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

/* newsletter/templates/blocks/woocommerceContent/customer_note.hbs */
class __TwigTemplate_eccf35d9fdf4f7fe19ba5b7d16351352bddcfe00eaea3c0e51821fc03e224072 extends Template
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
        yield $this->extensions['MailPoet\Twig\I18n']->translate("The following note has been added to your order:", "woocommerce");
        yield "</p>
<blockquote>
<p style=\"margin:0 0 16px\">Hi Jane, welcome to MailPoet!</p>
</blockquote>
<p style=\"margin:0 0 16px\">";
        // line 11
        yield $this->extensions['MailPoet\Twig\I18n']->translate("As a reminder, here are your order details:", "woocommerce");
        yield "</p>
<h2 style=\"display:block;font-family:&quot;Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif;font-size:18px;font-weight:bold;line-height:130%;margin:0 0 18px;text-align:left\">
\t";
        // line 13
        yield $this->extensions['MailPoet\Twig\I18n']->translate("[Order #0001]", "woocommerce");
        yield "</h2>

<div style=\"margin-bottom:40px\">
\t<table class=\"m_3180768237544866075td\" cellspacing=\"0\" cellpadding=\"6\" border=\"1\" style=\"border:1px solid #e4e4e4;vertical-align:middle;width:100%;font-family:'Helvetica Neue',Helvetica,Roboto,Arial,sans-serif\">
\t\t<thead>
\t\t\t<tr>
\t\t\t\t<th class=\"m_3180768237544866075td\" scope=\"col\" style=\"border:1px solid #e4e4e4;vertical-align:middle;padding:12px;text-align:left\">";
        // line 19
        yield $this->extensions['MailPoet\Twig\I18n']->translate("Product", "woocommerce");
        yield "</th>
\t\t\t\t<th class=\"m_3180768237544866075td\" scope=\"col\" style=\"border:1px solid #e4e4e4;vertical-align:middle;padding:12px;text-align:left\">";
        // line 20
        yield $this->extensions['MailPoet\Twig\I18n']->translate("Quantity", "woocommerce");
        yield "</th>
\t\t\t\t<th class=\"m_3180768237544866075td\" scope=\"col\" style=\"border:1px solid #e4e4e4;vertical-align:middle;padding:12px;text-align:left\">";
        // line 21
        yield $this->extensions['MailPoet\Twig\I18n']->translate("Price", "woocommerce");
        yield "</th>
\t\t\t</tr>
\t\t</thead>
\t\t<tbody>
\t\t\t\t<tr class=\"m_3180768237544866075order_item\">
\t\t<td class=\"m_3180768237544866075td\" style=\"border:1px solid #e4e4e4;padding:12px;text-align:left;vertical-align:middle;font-family:'Helvetica Neue',Helvetica,Roboto,Arial,sans-serif;word-wrap:break-word\">
\t\tMy First Product\t\t</td>
\t\t<td class=\"m_3180768237544866075td\" style=\"border:1px solid #e4e4e4;padding:12px;text-align:left;vertical-align:middle;font-family:'Helvetica Neue',Helvetica,Roboto,Arial,sans-serif\">
\t\t\t1\t\t</td>
\t\t<td class=\"m_3180768237544866075td\" style=\"border:1px solid #e4e4e4;padding:12px;text-align:left;vertical-align:middle;font-family:'Helvetica Neue',Helvetica,Roboto,Arial,sans-serif\">
\t\t\t<span class=\"m_3180768237544866075woocommerce-Price-amount m_3180768237544866075amount\">10,00<span class=\"m_3180768237544866075woocommerce-Price-currencySymbol\">€</span></span>\t\t</td>
\t</tr>

\t\t</tbody>
\t\t<tfoot>
\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t<th class=\"m_3180768237544866075td\" scope=\"row\" colspan=\"2\" style=\"border:1px solid #e4e4e4;vertical-align:middle;padding:12px;text-align:left;border-top-width:4px\">";
        // line 37
        yield $this->extensions['MailPoet\Twig\I18n']->translate("Subtotal:", "woocommerce");
        yield "</th>
\t\t\t\t\t\t<td class=\"m_3180768237544866075td\" style=\"border:1px solid #e4e4e4;vertical-align:middle;padding:12px;text-align:left;border-top-width:4px\"><span class=\"m_3180768237544866075woocommerce-Price-amount m_3180768237544866075amount\">10,00<span class=\"m_3180768237544866075woocommerce-Price-currencySymbol\">€</span></span></td>
\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t<th class=\"m_3180768237544866075td\" scope=\"row\" colspan=\"2\" style=\"border:1px solid #e4e4e4;vertical-align:middle;padding:12px;text-align:left\">";
        // line 41
        yield $this->extensions['MailPoet\Twig\I18n']->translate("Shipping:", "woocommerce");
        yield "</th>
\t\t\t\t\t\t<td class=\"m_3180768237544866075td\" style=\"border:1px solid #e4e4e4;vertical-align:middle;padding:12px;text-align:left\">
<span class=\"m_3180768237544866075woocommerce-Price-amount m_3180768237544866075amount\">4,90<span class=\"m_3180768237544866075woocommerce-Price-currencySymbol\">€</span></span>
</td>
\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t<th class=\"m_3180768237544866075td\" scope=\"row\" colspan=\"2\" style=\"border:1px solid #e4e4e4;vertical-align:middle;padding:12px;text-align:left\">";
        // line 47
        yield $this->extensions['MailPoet\Twig\I18n']->translate("Payment method:", "woocommerce");
        yield "</th>
\t\t\t\t\t\t<td class=\"m_3180768237544866075td\" style=\"border:1px solid #e4e4e4;vertical-align:middle;padding:12px;text-align:left\">Paypal</td>
\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t<th class=\"m_3180768237544866075td\" scope=\"row\" colspan=\"2\" style=\"border:1px solid #e4e4e4;vertical-align:middle;padding:12px;text-align:left\">";
        // line 51
        yield $this->extensions['MailPoet\Twig\I18n']->translate("Total:", "woocommerce");
        yield "</th>
\t\t\t\t\t\t<td class=\"m_3180768237544866075td\" style=\"border:1px solid #e4e4e4;vertical-align:middle;padding:12px;text-align:left\">
<span class=\"m_3180768237544866075woocommerce-Price-amount m_3180768237544866075amount\">14,90<span class=\"m_3180768237544866075woocommerce-Price-currencySymbol\">€</span></span> <small class=\"m_3180768237544866075includes_tax\">(includes <span class=\"m_3180768237544866075woocommerce-Price-amount m_3180768237544866075amount\">0,91<span class=\"m_3180768237544866075woocommerce-Price-currencySymbol\">€</span></span> VAT)</small>
</td>
\t\t\t\t\t</tr>
\t\t\t\t\t\t\t</tfoot>
\t</table>
</div>

<table id=\"m_3180768237544866075addresses\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" style=\"width:100%;vertical-align:top;margin-bottom:40px;padding:0\">
\t<tbody><tr>
\t\t<td valign=\"top\" width=\"50%\" style=\"text-align:left;font-family:'Helvetica Neue',Helvetica,Roboto,Arial,sans-serif;border:0;padding:0\">
\t\t\t<h2 style=\"display:block;font-family:&quot;Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif;font-size:18px;font-weight:bold;line-height:130%;margin:0 0 18px;text-align:left\">";
        // line 63
        yield $this->extensions['MailPoet\Twig\I18n']->translate("Billing address", "woocommerce");
        yield "</h2>

\t\t\t<address class=\"m_3180768237544866075address\" style=\"padding:12px;border:1px solid #e4e4e4\">Jane Doe<br>42 rue Blue Origin<br>75000 Paris<br>France</address>
\t\t</td>
\t\t\t\t\t<td valign=\"top\" width=\"50%\" style=\"text-align:left;font-family:'Helvetica Neue',Helvetica,Roboto,Arial,sans-serif;padding:0\">
\t\t\t\t<h2 style=\"display:block;font-family:&quot;Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif;font-size:18px;font-weight:bold;line-height:130%;margin:0 0 18px;text-align:left\">";
        // line 68
        yield $this->extensions['MailPoet\Twig\I18n']->translate("Shipping address", "woocommerce");
        yield "</h2>

\t\t\t\t<address class=\"m_3180768237544866075address\" style=\"padding:12px;border:1px solid #e4e4e4\">Jane Doe<br>42 rue Blue Origin<br>75000 Paris<br>France</address>
\t\t\t</td>
\t\t\t</tr>
</tbody></table>
<p style=\"margin:0 0 16px\">";
        // line 74
        yield $this->extensions['MailPoet\Twig\I18n']->translate("Thanks for reading.", "woocommerce");
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
        return "newsletter/templates/blocks/woocommerceContent/customer_note.hbs";
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
        return array (  155 => 74,  146 => 68,  138 => 63,  123 => 51,  116 => 47,  107 => 41,  100 => 37,  81 => 21,  77 => 20,  73 => 19,  64 => 13,  59 => 11,  52 => 7,  48 => 6,  42 => 3,  38 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "newsletter/templates/blocks/woocommerceContent/customer_note.hbs", "/home/circleci/mailpoet/mailpoet/views/newsletter/templates/blocks/woocommerceContent/customer_note.hbs");
    }
}
