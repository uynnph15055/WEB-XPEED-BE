<?php

if (!defined('ABSPATH')) exit;


use MailPoetVendor\Twig\Environment;
use MailPoetVendor\Twig\Error\LoaderError;
use MailPoetVendor\Twig\Error\RuntimeError;
use MailPoetVendor\Twig\Extension\CoreExtension;
use MailPoetVendor\Twig\Extension\SandboxExtension;
use MailPoetVendor\Twig\Markup;
use MailPoetVendor\Twig\Sandbox\SecurityError;
use MailPoetVendor\Twig\Sandbox\SecurityNotAllowedTagError;
use MailPoetVendor\Twig\Sandbox\SecurityNotAllowedFilterError;
use MailPoetVendor\Twig\Sandbox\SecurityNotAllowedFunctionError;
use MailPoetVendor\Twig\Source;
use MailPoetVendor\Twig\Template;

/* newsletter/templates/blocks/woocommerceContent/new_account.hbs */
class __TwigTemplate_d3c0219cc7d428fe42a4fc7e74d053d0913c24417b15ad16753e99a9561d94f0 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        yield "<div class=\"mailpoet_tools\"></div>
<div class=\"mailpoet_woocommerce_content_overlay\">
  <p>";
        // line 3
        yield $this->extensions['MailPoet\Twig\I18n']->translate("Autogenerated content by WooCommerce");
        yield "</p>
</div>
<div class=\"mailpoet_content mailpoet_woocommerce_content\" data-automation-id=\"woocommerce_content\">
<p style=\"margin:0 0 16px\">";
        // line 6
        yield $this->env->getRuntime('MailPoetVendor\Twig\Runtime\EscaperRuntime')->escape(MailPoetVendor\Twig\Extension\CoreExtension::sprintf($this->extensions['MailPoet\Twig\I18n']->translate("Hi %s,", "woocommerce"), "Jane"), "html", null, true);
        yield "</p>
<p style=\"margin:0 0 16px\">";
        // line 7
        yield MailPoetVendor\Twig\Extension\CoreExtension::sprintf($this->extensions['MailPoet\Twig\I18n']->translate("Thanks for creating an account on %1\$s. Your username is %2\$s. You can access your account area to view orders, change your password, and more at: %3\$s", "woocommerce"), "{{siteName}}", "<strong>elon.musk</strong>", "<a href=\"http://{{siteAddress}}\" style=\"font-weight:normal;text-decoration:underline\" target=\"_blank\">{{siteAddress}}</a>");
        yield "</p>
<p style=\"margin:0 0 16px\">";
        // line 8
        yield $this->extensions['MailPoet\Twig\I18n']->translate("We look forward to seeing you soon.", "woocommerce");
        yield "</p>
</div>
<div class=\"mailpoet_block_highlight\"></div>
";
        return; yield '';
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "newsletter/templates/blocks/woocommerceContent/new_account.hbs";
    }

    /**
     * @codeCoverageIgnore
     */
    public function isTraitable()
    {
        return false;
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo()
    {
        return array (  56 => 8,  52 => 7,  48 => 6,  42 => 3,  38 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "newsletter/templates/blocks/woocommerceContent/new_account.hbs", "/home/circleci/mailpoet/mailpoet/views/newsletter/templates/blocks/woocommerceContent/new_account.hbs");
    }
}
