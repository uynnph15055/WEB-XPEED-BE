<?php

namespace MailPoetDoctrineProxies\__CG__\MailPoet\Entities;

if (!defined('ABSPATH')) exit;



/**
 * DO NOT EDIT THIS FILE - IT WAS CREATED BY DOCTRINE'S PROXY GENERATOR
 */
class SegmentEntity extends \MailPoet\Entities\SegmentEntity implements \MailPoetVendor\Doctrine\ORM\Proxy\Proxy
{
    /**
     * @var \Closure the callback responsible for loading properties in the proxy object. This callback is called with
     *      three parameters, being respectively the proxy object to be initialized, the method that triggered the
     *      initialization process and an array of ordered parameters that were passed to that method.
     *
     * @see \Doctrine\Common\Proxy\Proxy::__setInitializer
     */
    public $__initializer__;

    /**
     * @var \Closure the callback responsible of loading properties that need to be copied in the cloned object
     *
     * @see \Doctrine\Common\Proxy\Proxy::__setCloner
     */
    public $__cloner__;

    /**
     * @var boolean flag indicating if this object was already initialized
     *
     * @see \Doctrine\Persistence\Proxy::__isInitialized
     */
    public $__isInitialized__ = false;

    /**
     * @var array<string, null> properties to be lazy loaded, indexed by property name
     */
    public static $lazyPropertiesNames = array (
);

    /**
     * @var array<string, mixed> default values of properties to be lazy loaded, with keys being the property names
     *
     * @see \Doctrine\Common\Proxy\Proxy::__getLazyProperties
     */
    public static $lazyPropertiesDefaults = array (
);



    public function __construct(?\Closure $initializer = null, ?\Closure $cloner = null)
    {

        $this->__initializer__ = $initializer;
        $this->__cloner__      = $cloner;
    }







    /**
     * 
     * @return array
     */
    public function __sleep()
    {
        if ($this->__isInitialized__) {
            return ['__isInitialized__', '' . "\0" . 'MailPoet\\Entities\\SegmentEntity' . "\0" . 'name', '' . "\0" . 'MailPoet\\Entities\\SegmentEntity' . "\0" . 'type', '' . "\0" . 'MailPoet\\Entities\\SegmentEntity' . "\0" . 'description', '' . "\0" . 'MailPoet\\Entities\\SegmentEntity' . "\0" . 'dynamicFilters', '' . "\0" . 'MailPoet\\Entities\\SegmentEntity' . "\0" . 'averageEngagementScore', '' . "\0" . 'MailPoet\\Entities\\SegmentEntity' . "\0" . 'averageEngagementScoreUpdatedAt', '' . "\0" . 'MailPoet\\Entities\\SegmentEntity' . "\0" . 'displayInManageSubscriptionPage', '' . "\0" . 'MailPoet\\Entities\\SegmentEntity' . "\0" . 'id', '' . "\0" . 'MailPoet\\Entities\\SegmentEntity' . "\0" . 'createdAt', '' . "\0" . 'MailPoet\\Entities\\SegmentEntity' . "\0" . 'updatedAt', '' . "\0" . 'MailPoet\\Entities\\SegmentEntity' . "\0" . 'deletedAt'];
        }

        return ['__isInitialized__', '' . "\0" . 'MailPoet\\Entities\\SegmentEntity' . "\0" . 'name', '' . "\0" . 'MailPoet\\Entities\\SegmentEntity' . "\0" . 'type', '' . "\0" . 'MailPoet\\Entities\\SegmentEntity' . "\0" . 'description', '' . "\0" . 'MailPoet\\Entities\\SegmentEntity' . "\0" . 'dynamicFilters', '' . "\0" . 'MailPoet\\Entities\\SegmentEntity' . "\0" . 'averageEngagementScore', '' . "\0" . 'MailPoet\\Entities\\SegmentEntity' . "\0" . 'averageEngagementScoreUpdatedAt', '' . "\0" . 'MailPoet\\Entities\\SegmentEntity' . "\0" . 'displayInManageSubscriptionPage', '' . "\0" . 'MailPoet\\Entities\\SegmentEntity' . "\0" . 'id', '' . "\0" . 'MailPoet\\Entities\\SegmentEntity' . "\0" . 'createdAt', '' . "\0" . 'MailPoet\\Entities\\SegmentEntity' . "\0" . 'updatedAt', '' . "\0" . 'MailPoet\\Entities\\SegmentEntity' . "\0" . 'deletedAt'];
    }

    /**
     * 
     */
    public function __wakeup()
    {
        if ( ! $this->__isInitialized__) {
            $this->__initializer__ = function (SegmentEntity $proxy) {
                $proxy->__setInitializer(null);
                $proxy->__setCloner(null);

                $existingProperties = get_object_vars($proxy);

                foreach ($proxy::$lazyPropertiesDefaults as $property => $defaultValue) {
                    if ( ! array_key_exists($property, $existingProperties)) {
                        $proxy->$property = $defaultValue;
                    }
                }
            };

        }
    }

    /**
     * {@inheritDoc}
     */
    public function __clone()
    {
        $this->__cloner__ && $this->__cloner__->__invoke($this, '__clone', []);

        parent::__clone();
    }

    /**
     * Forces initialization of the proxy
     */
    public function __load(): void
    {
        $this->__initializer__ && $this->__initializer__->__invoke($this, '__load', []);
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __isInitialized(): bool
    {
        return $this->__isInitialized__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setInitialized($initialized): void
    {
        $this->__isInitialized__ = $initialized;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setInitializer(?\Closure $initializer = null): void
    {
        $this->__initializer__ = $initializer;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __getInitializer(): ?\Closure
    {
        return $this->__initializer__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setCloner(?\Closure $cloner = null): void
    {
        $this->__cloner__ = $cloner;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific cloning logic
     */
    public function __getCloner(): ?\Closure
    {
        return $this->__cloner__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     * @deprecated no longer in use - generated code now relies on internal components rather than generated public API
     * @static
     */
    public function __getLazyProperties(): array
    {
        return self::$lazyPropertiesDefaults;
    }

    
    /**
     * {@inheritDoc}
     */
    public function getName()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getName', []);

        return parent::getName();
    }

    /**
     * {@inheritDoc}
     */
    public function setName($name)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setName', [$name]);

        return parent::setName($name);
    }

    /**
     * {@inheritDoc}
     */
    public function getType()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getType', []);

        return parent::getType();
    }

    /**
     * {@inheritDoc}
     */
    public function setType($type)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setType', [$type]);

        return parent::setType($type);
    }

    /**
     * {@inheritDoc}
     */
    public function getDescription()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getDescription', []);

        return parent::getDescription();
    }

    /**
     * {@inheritDoc}
     */
    public function setDescription($description)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setDescription', [$description]);

        return parent::setDescription($description);
    }

    /**
     * {@inheritDoc}
     */
    public function getDynamicFilters()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getDynamicFilters', []);

        return parent::getDynamicFilters();
    }

    /**
     * {@inheritDoc}
     */
    public function addDynamicFilter(\MailPoet\Entities\DynamicSegmentFilterEntity $dynamicSegmentFilterEntity)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addDynamicFilter', [$dynamicSegmentFilterEntity]);

        return parent::addDynamicFilter($dynamicSegmentFilterEntity);
    }

    /**
     * {@inheritDoc}
     */
    public function isStatic(): bool
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'isStatic', []);

        return parent::isStatic();
    }

    /**
     * {@inheritDoc}
     */
    public function getAverageEngagementScore(): ?float
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getAverageEngagementScore', []);

        return parent::getAverageEngagementScore();
    }

    /**
     * {@inheritDoc}
     */
    public function setAverageEngagementScore(?float $averageEngagementScore): void
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setAverageEngagementScore', [$averageEngagementScore]);

        parent::setAverageEngagementScore($averageEngagementScore);
    }

    /**
     * {@inheritDoc}
     */
    public function getAverageEngagementScoreUpdatedAt(): ?\DateTimeInterface
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getAverageEngagementScoreUpdatedAt', []);

        return parent::getAverageEngagementScoreUpdatedAt();
    }

    /**
     * {@inheritDoc}
     */
    public function setAverageEngagementScoreUpdatedAt(?\DateTimeInterface $averageEngagementScoreUpdatedAt): void
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setAverageEngagementScoreUpdatedAt', [$averageEngagementScoreUpdatedAt]);

        parent::setAverageEngagementScoreUpdatedAt($averageEngagementScoreUpdatedAt);
    }

    /**
     * {@inheritDoc}
     */
    public function getDisplayInManageSubscriptionPage(): bool
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getDisplayInManageSubscriptionPage', []);

        return parent::getDisplayInManageSubscriptionPage();
    }

    /**
     * {@inheritDoc}
     */
    public function setDisplayInManageSubscriptionPage(bool $state): void
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setDisplayInManageSubscriptionPage', [$state]);

        parent::setDisplayInManageSubscriptionPage($state);
    }

    /**
     * {@inheritDoc}
     */
    public function getFiltersConnectOperator(): string
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getFiltersConnectOperator', []);

        return parent::getFiltersConnectOperator();
    }

    /**
     * {@inheritDoc}
     */
    public function getId()
    {
        if ($this->__isInitialized__ === false) {
            return (int)  parent::getId();
        }


        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getId', []);

        return parent::getId();
    }

    /**
     * {@inheritDoc}
     */
    public function setId($id)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setId', [$id]);

        return parent::setId($id);
    }

    /**
     * {@inheritDoc}
     */
    public function getCreatedAt(): ?\DateTimeInterface
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getCreatedAt', []);

        return parent::getCreatedAt();
    }

    /**
     * {@inheritDoc}
     */
    public function setCreatedAt(\DateTimeInterface $createdAt): void
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setCreatedAt', [$createdAt]);

        parent::setCreatedAt($createdAt);
    }

    /**
     * {@inheritDoc}
     */
    public function getUpdatedAt()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getUpdatedAt', []);

        return parent::getUpdatedAt();
    }

    /**
     * {@inheritDoc}
     */
    public function setUpdatedAt(\DateTimeInterface $updatedAt)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setUpdatedAt', [$updatedAt]);

        return parent::setUpdatedAt($updatedAt);
    }

    /**
     * {@inheritDoc}
     */
    public function getDeletedAt()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getDeletedAt', []);

        return parent::getDeletedAt();
    }

    /**
     * {@inheritDoc}
     */
    public function setDeletedAt($deletedAt)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setDeletedAt', [$deletedAt]);

        return parent::setDeletedAt($deletedAt);
    }

}
