<?php

namespace MailPoetDoctrineProxies\__CG__\MailPoet\Entities;

if (!defined('ABSPATH')) exit;



/**
 * DO NOT EDIT THIS FILE - IT WAS CREATED BY DOCTRINE'S PROXY GENERATOR
 */
class StatisticsOpenEntity extends \MailPoet\Entities\StatisticsOpenEntity implements \MailPoetVendor\Doctrine\ORM\Proxy\Proxy
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
            return ['__isInitialized__', '' . "\0" . 'MailPoet\\Entities\\StatisticsOpenEntity' . "\0" . 'newsletter', '' . "\0" . 'MailPoet\\Entities\\StatisticsOpenEntity' . "\0" . 'queue', '' . "\0" . 'MailPoet\\Entities\\StatisticsOpenEntity' . "\0" . 'subscriber', '' . "\0" . 'MailPoet\\Entities\\StatisticsOpenEntity' . "\0" . 'userAgent', '' . "\0" . 'MailPoet\\Entities\\StatisticsOpenEntity' . "\0" . 'userAgentType', '' . "\0" . 'MailPoet\\Entities\\StatisticsOpenEntity' . "\0" . 'id', '' . "\0" . 'MailPoet\\Entities\\StatisticsOpenEntity' . "\0" . 'createdAt'];
        }

        return ['__isInitialized__', '' . "\0" . 'MailPoet\\Entities\\StatisticsOpenEntity' . "\0" . 'newsletter', '' . "\0" . 'MailPoet\\Entities\\StatisticsOpenEntity' . "\0" . 'queue', '' . "\0" . 'MailPoet\\Entities\\StatisticsOpenEntity' . "\0" . 'subscriber', '' . "\0" . 'MailPoet\\Entities\\StatisticsOpenEntity' . "\0" . 'userAgent', '' . "\0" . 'MailPoet\\Entities\\StatisticsOpenEntity' . "\0" . 'userAgentType', '' . "\0" . 'MailPoet\\Entities\\StatisticsOpenEntity' . "\0" . 'id', '' . "\0" . 'MailPoet\\Entities\\StatisticsOpenEntity' . "\0" . 'createdAt'];
    }

    /**
     * 
     */
    public function __wakeup()
    {
        if ( ! $this->__isInitialized__) {
            $this->__initializer__ = function (StatisticsOpenEntity $proxy) {
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
     * 
     */
    public function __clone()
    {
        $this->__cloner__ && $this->__cloner__->__invoke($this, '__clone', []);
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
    public function getNewsletter()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getNewsletter', []);

        return parent::getNewsletter();
    }

    /**
     * {@inheritDoc}
     */
    public function getQueue()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getQueue', []);

        return parent::getQueue();
    }

    /**
     * {@inheritDoc}
     */
    public function setNewsletter($newsletter)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setNewsletter', [$newsletter]);

        return parent::setNewsletter($newsletter);
    }

    /**
     * {@inheritDoc}
     */
    public function setQueue($queue)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setQueue', [$queue]);

        return parent::setQueue($queue);
    }

    /**
     * {@inheritDoc}
     */
    public function setSubscriber($subscriber)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setSubscriber', [$subscriber]);

        return parent::setSubscriber($subscriber);
    }

    /**
     * {@inheritDoc}
     */
    public function getUserAgent(): ?\MailPoet\Entities\UserAgentEntity
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getUserAgent', []);

        return parent::getUserAgent();
    }

    /**
     * {@inheritDoc}
     */
    public function setUserAgent(?\MailPoet\Entities\UserAgentEntity $userAgent): void
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setUserAgent', [$userAgent]);

        parent::setUserAgent($userAgent);
    }

    /**
     * {@inheritDoc}
     */
    public function getUserAgentType(): int
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getUserAgentType', []);

        return parent::getUserAgentType();
    }

    /**
     * {@inheritDoc}
     */
    public function setUserAgentType(int $userAgentType): void
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setUserAgentType', [$userAgentType]);

        parent::setUserAgentType($userAgentType);
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

}
