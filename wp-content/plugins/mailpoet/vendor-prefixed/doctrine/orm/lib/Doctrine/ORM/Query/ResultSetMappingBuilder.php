<?php
declare (strict_types=1);
namespace MailPoetVendor\Doctrine\ORM\Query;
if (!defined('ABSPATH')) exit;
use MailPoetVendor\Doctrine\DBAL\Types\Type;
use MailPoetVendor\Doctrine\ORM\EntityManagerInterface;
use MailPoetVendor\Doctrine\ORM\Internal\SQLResultCasing;
use MailPoetVendor\Doctrine\ORM\Mapping\ClassMetadata;
use MailPoetVendor\Doctrine\ORM\Mapping\ClassMetadataInfo;
use MailPoetVendor\Doctrine\ORM\Mapping\MappingException;
use MailPoetVendor\Doctrine\ORM\Utility\PersisterHelper;
use InvalidArgumentException;
use LogicException;
use function assert;
use function explode;
use function in_array;
use function sprintf;
use function str_contains;
use function strtolower;
class ResultSetMappingBuilder extends ResultSetMapping
{
 use SQLResultCasing;
 public const COLUMN_RENAMING_NONE = 1;
 public const COLUMN_RENAMING_CUSTOM = 2;
 public const COLUMN_RENAMING_INCREMENT = 3;
 private $sqlCounter = 0;
 private $em;
 private $defaultRenameMode;
 public function __construct(EntityManagerInterface $em, $defaultRenameMode = self::COLUMN_RENAMING_NONE)
 {
 $this->em = $em;
 $this->defaultRenameMode = $defaultRenameMode;
 }
 public function addRootEntityFromClassMetadata($class, $alias, $renamedColumns = [], $renameMode = null)
 {
 $renameMode = $renameMode ?: $this->defaultRenameMode;
 $columnAliasMap = $this->getColumnAliasMap($class, $renameMode, $renamedColumns);
 $this->addEntityResult($class, $alias);
 $this->addAllClassFields($class, $alias, $columnAliasMap);
 }
 public function addJoinedEntityFromClassMetadata($class, $alias, $parentAlias, $relation, $renamedColumns = [], $renameMode = null)
 {
 $renameMode = $renameMode ?: $this->defaultRenameMode;
 $columnAliasMap = $this->getColumnAliasMap($class, $renameMode, $renamedColumns);
 $this->addJoinedEntityResult($class, $alias, $parentAlias, $relation);
 $this->addAllClassFields($class, $alias, $columnAliasMap);
 }
 protected function addAllClassFields($class, $alias, $columnAliasMap = [])
 {
 $classMetadata = $this->em->getClassMetadata($class);
 $platform = $this->em->getConnection()->getDatabasePlatform();
 if (!$this->isInheritanceSupported($classMetadata)) {
 throw new InvalidArgumentException('ResultSetMapping builder does not currently support your inheritance scheme.');
 }
 foreach ($classMetadata->getColumnNames() as $columnName) {
 $propertyName = $classMetadata->getFieldName($columnName);
 $columnAlias = $this->getSQLResultCasing($platform, $columnAliasMap[$columnName]);
 if (isset($this->fieldMappings[$columnAlias])) {
 throw new InvalidArgumentException(sprintf("The column '%s' conflicts with another column in the mapper.", $columnName));
 }
 $this->addFieldResult($alias, $columnAlias, $propertyName);
 }
 foreach ($classMetadata->associationMappings as $associationMapping) {
 if ($associationMapping['isOwningSide'] && $associationMapping['type'] & ClassMetadata::TO_ONE) {
 $targetClass = $this->em->getClassMetadata($associationMapping['targetEntity']);
 $isIdentifier = isset($associationMapping['id']) && $associationMapping['id'] === \true;
 foreach ($associationMapping['joinColumns'] as $joinColumn) {
 $columnName = $joinColumn['name'];
 $columnAlias = $this->getSQLResultCasing($platform, $columnAliasMap[$columnName]);
 $columnType = PersisterHelper::getTypeOfColumn($joinColumn['referencedColumnName'], $targetClass, $this->em);
 if (isset($this->metaMappings[$columnAlias])) {
 throw new InvalidArgumentException(sprintf("The column '%s' conflicts with another column in the mapper.", $columnAlias));
 }
 $this->addMetaResult($alias, $columnAlias, $columnName, $isIdentifier, $columnType);
 }
 }
 }
 }
 private function isInheritanceSupported(ClassMetadata $classMetadata) : bool
 {
 if ($classMetadata->isInheritanceTypeSingleTable() && in_array($classMetadata->name, $classMetadata->discriminatorMap, \true)) {
 return \true;
 }
 return !($classMetadata->isInheritanceTypeSingleTable() || $classMetadata->isInheritanceTypeJoined());
 }
 private function getColumnAlias(string $columnName, int $mode, array $customRenameColumns) : string
 {
 switch ($mode) {
 case self::COLUMN_RENAMING_INCREMENT:
 return $columnName . $this->sqlCounter++;
 case self::COLUMN_RENAMING_CUSTOM:
 return $customRenameColumns[$columnName] ?? $columnName;
 case self::COLUMN_RENAMING_NONE:
 return $columnName;
 default:
 throw new InvalidArgumentException(sprintf('%d is not a valid value for $mode', $mode));
 }
 }
 private function getColumnAliasMap(string $className, int $mode, array $customRenameColumns) : array
 {
 if ($customRenameColumns) {
 // for BC with 2.2-2.3 API
 $mode = self::COLUMN_RENAMING_CUSTOM;
 }
 $columnAlias = [];
 $class = $this->em->getClassMetadata($className);
 foreach ($class->getColumnNames() as $columnName) {
 $columnAlias[$columnName] = $this->getColumnAlias($columnName, $mode, $customRenameColumns);
 }
 foreach ($class->associationMappings as $associationMapping) {
 if ($associationMapping['isOwningSide'] && $associationMapping['type'] & ClassMetadata::TO_ONE) {
 foreach ($associationMapping['joinColumns'] as $joinColumn) {
 $columnName = $joinColumn['name'];
 $columnAlias[$columnName] = $this->getColumnAlias($columnName, $mode, $customRenameColumns);
 }
 }
 }
 return $columnAlias;
 }
 public function addNamedNativeQueryMapping(ClassMetadataInfo $class, array $queryMapping)
 {
 if (isset($queryMapping['resultClass'])) {
 return $this->addNamedNativeQueryResultClassMapping($class, $queryMapping['resultClass']);
 }
 return $this->addNamedNativeQueryResultSetMapping($class, $queryMapping['resultSetMapping']);
 }
 public function addNamedNativeQueryResultClassMapping(ClassMetadataInfo $class, $resultClassName)
 {
 $classMetadata = $this->em->getClassMetadata($resultClassName);
 assert($classMetadata->reflClass !== null);
 $shortName = $classMetadata->reflClass->getShortName();
 $alias = strtolower($shortName[0]) . '0';
 $this->addEntityResult($class->name, $alias);
 if ($classMetadata->discriminatorColumn) {
 $discrColumn = $classMetadata->discriminatorColumn;
 $this->setDiscriminatorColumn($alias, $discrColumn['name']);
 $this->addMetaResult($alias, $discrColumn['name'], $discrColumn['fieldName'], \false, $discrColumn['type']);
 }
 foreach ($classMetadata->getColumnNames() as $key => $columnName) {
 $propertyName = $classMetadata->getFieldName($columnName);
 $this->addFieldResult($alias, $columnName, $propertyName);
 }
 foreach ($classMetadata->associationMappings as $associationMapping) {
 if ($associationMapping['isOwningSide'] && $associationMapping['type'] & ClassMetadata::TO_ONE) {
 $targetClass = $this->em->getClassMetadata($associationMapping['targetEntity']);
 foreach ($associationMapping['joinColumns'] as $joinColumn) {
 $columnName = $joinColumn['name'];
 $columnType = PersisterHelper::getTypeOfColumn($joinColumn['referencedColumnName'], $targetClass, $this->em);
 $this->addMetaResult($alias, $columnName, $columnName, $classMetadata->isIdentifier($columnName), $columnType);
 }
 }
 }
 return $this;
 }
 public function addNamedNativeQueryResultSetMapping(ClassMetadataInfo $class, $resultSetMappingName)
 {
 if ($class->reflClass === null) {
 throw new LogicException('Given class metadata has now class reflector.');
 }
 $counter = 0;
 $resultMapping = $class->getSqlResultSetMapping($resultSetMappingName);
 $rootShortName = $class->reflClass->getShortName();
 $rootAlias = strtolower($rootShortName[0]) . $counter;
 if (isset($resultMapping['entities'])) {
 foreach ($resultMapping['entities'] as $entityMapping) {
 $classMetadata = $this->em->getClassMetadata($entityMapping['entityClass']);
 assert($classMetadata->reflClass !== null);
 if ($class->reflClass->name === $classMetadata->reflClass->name) {
 $this->addEntityResult($classMetadata->name, $rootAlias);
 $this->addNamedNativeQueryEntityResultMapping($classMetadata, $entityMapping, $rootAlias);
 } else {
 $shortName = $classMetadata->reflClass->getShortName();
 $joinAlias = strtolower($shortName[0]) . ++$counter;
 $associations = $class->getAssociationsByTargetClass($classMetadata->name);
 $this->addNamedNativeQueryEntityResultMapping($classMetadata, $entityMapping, $joinAlias);
 foreach ($associations as $relation => $mapping) {
 $this->addJoinedEntityResult($mapping['targetEntity'], $joinAlias, $rootAlias, $relation);
 }
 }
 }
 }
 if (isset($resultMapping['columns'])) {
 foreach ($resultMapping['columns'] as $entityMapping) {
 $type = isset($class->fieldNames[$entityMapping['name']]) ? PersisterHelper::getTypeOfColumn($entityMapping['name'], $class, $this->em) : 'string';
 $this->addScalarResult($entityMapping['name'], $entityMapping['name'], $type);
 }
 }
 return $this;
 }
 public function addNamedNativeQueryEntityResultMapping(ClassMetadataInfo $classMetadata, array $entityMapping, $alias)
 {
 if (isset($entityMapping['discriminatorColumn']) && $entityMapping['discriminatorColumn']) {
 $discriminatorColumn = $entityMapping['discriminatorColumn'];
 $discriminatorType = $classMetadata->getDiscriminatorColumn()['type'];
 $this->setDiscriminatorColumn($alias, $discriminatorColumn);
 $this->addMetaResult($alias, $discriminatorColumn, $discriminatorColumn, \false, $discriminatorType);
 }
 if (isset($entityMapping['fields']) && !empty($entityMapping['fields'])) {
 foreach ($entityMapping['fields'] as $field) {
 $fieldName = $field['name'];
 $relation = null;
 if (str_contains($fieldName, '.')) {
 [$relation, $fieldName] = explode('.', $fieldName);
 }
 if (isset($classMetadata->associationMappings[$relation])) {
 if ($relation) {
 $associationMapping = $classMetadata->associationMappings[$relation];
 $joinAlias = $alias . $relation;
 $parentAlias = $alias;
 $this->addJoinedEntityResult($associationMapping['targetEntity'], $joinAlias, $parentAlias, $relation);
 $this->addFieldResult($joinAlias, $field['column'], $fieldName);
 } else {
 $this->addFieldResult($alias, $field['column'], $fieldName, $classMetadata->name);
 }
 } else {
 if (!isset($classMetadata->fieldMappings[$fieldName])) {
 throw new InvalidArgumentException("Entity '" . $classMetadata->name . "' has no field '" . $fieldName . "'. ");
 }
 $this->addFieldResult($alias, $field['column'], $fieldName, $classMetadata->name);
 }
 }
 } else {
 foreach ($classMetadata->getColumnNames() as $columnName) {
 $propertyName = $classMetadata->getFieldName($columnName);
 $this->addFieldResult($alias, $columnName, $propertyName);
 }
 }
 return $this;
 }
 public function generateSelectClause($tableAliases = [])
 {
 $sql = '';
 foreach ($this->columnOwnerMap as $columnName => $dqlAlias) {
 $tableAlias = $tableAliases[$dqlAlias] ?? $dqlAlias;
 if ($sql !== '') {
 $sql .= ', ';
 }
 if (isset($this->fieldMappings[$columnName])) {
 $class = $this->em->getClassMetadata($this->declaringClasses[$columnName]);
 $fieldName = $this->fieldMappings[$columnName];
 $classFieldMapping = $class->fieldMappings[$fieldName];
 $columnSql = $tableAlias . '.' . $classFieldMapping['columnName'];
 if (isset($classFieldMapping['requireSQLConversion']) && $classFieldMapping['requireSQLConversion'] === \true) {
 $type = Type::getType($classFieldMapping['type']);
 $columnSql = $type->convertToPHPValueSQL($columnSql, $this->em->getConnection()->getDatabasePlatform());
 }
 $sql .= $columnSql;
 } elseif (isset($this->metaMappings[$columnName])) {
 $sql .= $tableAlias . '.' . $this->metaMappings[$columnName];
 } elseif (isset($this->discriminatorColumns[$dqlAlias])) {
 $sql .= $tableAlias . '.' . $this->discriminatorColumns[$dqlAlias];
 }
 $sql .= ' AS ' . $columnName;
 }
 return $sql;
 }
 public function __toString()
 {
 return $this->generateSelectClause([]);
 }
}
