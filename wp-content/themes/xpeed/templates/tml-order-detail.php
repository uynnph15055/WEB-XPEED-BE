<?php

/**
 * Template Name: Order_detail
 * Author: Phuongdd
 */

use app\Controllers\OrderController;

check_user_login_and_redirect();
$orderController = new OrderController();
$orders = $orderController->getAllOrdersForCurrentUser();

get_header();

include plugin_dir_path(__FILE__) . 'sideBar.php';
?>
    <div class="account__content">
        <div class="content__title">Invoice Detail</div>
        <div class="invoice-wrapper invoice">
            <div class="invoice__container">
                <div class="invoice__header">
                    <table class="invoice__table">
                        <tbody>
                        <tr>
                            <!-- <td class="invoice__logo-cell">
                              <div>
                                <img
                                  src="./assets/images/logo/logo.png"
                                  class="invoice__logo"
                                />
                              </div>
                            </td> -->
                            <td class="invoice__info-cell">
                                <div class="invoice__info">
                                    <table class="invoice__table">
                                        <tbody>
                                        <tr>
                                            <td
                                                    class="invoice__info-cell invoice__info-cell--border-right"
                                            >
                                                <div>
                                                    <p class="invoice__info-label">Date</p>
                                                    <p class="invoice__info-value">
                                                        April 26, 2023
                                                    </p>
                                                </div>
                                            </td>
                                            <td
                                                    class="invoice__info-cell invoice__info-cell--padding-left"
                                            >
                                                <div>
                                                    <p class="invoice__info-label">Invoice #</p>
                                                    <p class="invoice__info-value">BRA-00335</p>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div class="invoice__section">
                    <table class="invoice__table">
                        <tbody>
                        <tr>
                            <td class="invoice__details-cell">
                                <div class="invoice__details">
                                    <p class="invoice__details-item">
                                        Supplier Company INC
                                    </p>
                                    <p class="invoice__details-info">Number: 23456789</p>
                                    <p class="invoice__details-info">VAT: 23456789</p>
                                    <p class="invoice__details-info">6622 Abshire Mills</p>
                                    <p class="invoice__details-info">
                                        Port Orlofurt, 05820
                                    </p>
                                    <p class="invoice__details-info">United States</p>
                                </div>
                            </td>
                            <td
                                    class="invoice__details-cell invoice__details-cell--right"
                            >
                                <div class="invoice__details">
                                    <p class="invoice__details-item">Customer Company</p>
                                    <p class="invoice__details-info">Number: 123456789</p>
                                    <p class="invoice__details-info">VAT: 23456789</p>
                                    <p class="invoice__details-info">
                                        9552 Vandervort Spurs
                                    </p>
                                    <p class="invoice__details-info">Paradise, 43325</p>
                                    <p class="invoice__details-info">United States</p>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div class="invoice__items">
                    <table class="invoice__items-table">
                        <thead>
                        <tr>
                            <td class="invoice__items-header">#</td>
                            <td class="invoice__items-header">Product details</td>
                            <td
                                    class="invoice__items-header invoice__items-header--right"
                            >
                                Price
                            </td>
                            <td
                                    class="invoice__items-header invoice__items-header--center"
                            >
                                Qty.
                            </td>
                            <td
                                    class="invoice__items-header invoice__items-header--center"
                            >
                                VAT
                            </td>
                            <td
                                    class="invoice__items-header invoice__items-header--right"
                            >
                                Subtotal
                            </td>
                            <td
                                    class="invoice__items-header invoice__items-header--right invoice__items-header--padding-right"
                            >
                                Subtotal + VAT
                            </td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td class="invoice__items-row">1.</td>
                            <td class="invoice__items-row">
                                Monthly accounting services
                            </td>
                            <td class="invoice__items-row invoice__items-row--right">
                                $150.00
                            </td>
                            <td class="invoice__items-row invoice__items-row--center">
                                1
                            </td>
                            <td class="invoice__items-row invoice__items-row--center">
                                20%
                            </td>
                            <td class="invoice__items-row invoice__items-row--right">
                                $150.00
                            </td>
                            <td
                                    class="invoice__items-row invoice__items-row--right invoice__items-row--padding-right"
                            >
                                $180.00
                            </td>
                        </tr>
                        <tr>
                            <td class="invoice__items-row">2.</td>
                            <td class="invoice__items-row">
                                Taxation consulting (hour)
                            </td>
                            <td class="invoice__items-row invoice__items-row--right">
                                $60.00
                            </td>
                            <td class="invoice__items-row invoice__items-row--center">
                                2
                            </td>
                            <td class="invoice__items-row invoice__items-row--center">
                                20%
                            </td>
                            <td class="invoice__items-row invoice__items-row--right">
                                $120.00
                            </td>
                            <td
                                    class="invoice__items-row invoice__items-row--right invoice__items-row--padding-right"
                            >
                                $144.00
                            </td>
                        </tr>
                        <tr>
                            <td class="invoice__items-row">3.</td>
                            <td class="invoice__items-row">Bookkeeping services</td>
                            <td class="invoice__items-row invoice__items-row--right">
                                $50.00
                            </td>
                            <td class="invoice__items-row invoice__items-row--center">
                                1
                            </td>
                            <td class="invoice__items-row invoice__items-row--center">
                                20%
                            </td>
                            <td class="invoice__items-row invoice__items-row--right">
                                $50.00
                            </td>
                            <td
                                    class="invoice__items-row invoice__items-row--right invoice__items-row--padding-right"
                            >
                                $60.00
                            </td>
                        </tr>
                        <tr>
                            <td colspan="7">
                                <table class="invoice__totals">
                                    <tbody>
                                    <tr>
                                        <td class="invoice__totals-cell">
                                            <div class="invoice__totals-label">
                                                Net total:
                                            </div>
                                        </td>
                                        <td
                                                class="invoice__totals-cell invoice__totals-value"
                                        >
                                            $320.00
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="invoice__totals-cell">
                                            <div class="invoice__totals-label">
                                                VAT total:
                                            </div>
                                        </td>
                                        <td
                                                class="invoice__totals-cell invoice__totals-value"
                                        >
                                            $64.00
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="invoice__totals-total">
                                            <div class="invoice__totals-label">Total:</div>
                                        </td>
                                        <td class="invoice__totals-total">$384.00</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div class="invoice__payment">
                    <p class="invoice__payment-label">PAYMENT DETAILS</p>
                    <p class="invoice__payment-info">Banks of Banks</p>
                    <p class="invoice__payment-info">Bank/Sort Code: 1234567</p>
                    <p class="invoice__payment-info">Account Number: 123456678</p>
                    <p class="invoice__payment-info">Payment Reference: BRA-00335</p>
                </div>

                <div class="invoice__notes">
                    <p class="invoice__notes-label">Notes</p>
                    <p class="invoice__notes-text">
                        Lorem ipsum is placeholder text commonly used in the graphic,
                        print, and publishing industries for previewing layouts and
                        visual mockups.
                    </p>
                </div>

                <footer class="invoice__footer">
                    Supplier Company
                    <span class="invoice__footer-separator">|</span>
                    info@company.com
                    <span class="invoice__footer-separator">|</span>
                    +1-202-555-0106
                </footer>
            </div>
        </div>
    </div>
    </div>

<?php
get_footer();
?>