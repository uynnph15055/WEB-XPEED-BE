<?php
session_start();
require_once 'app/Config.php';
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
      <meta charset="<?php bloginfo('charset'); ?>">
      <meta name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet" />
      <link rel="profile" href="http://gmpg.org/xfn/11">
      <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
      <link rel="icon" href="<?= get_template_directory_uri() . '/assets/images/logo/logo-url.svg' ?>" sizes="16x16"
            type="image/png">
      <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
      <script src="https://unpkg.com/scrollreveal"></script>
      <script>
      const baseUrl = "<?php echo home_url(); ?>";
      </script>
      <?php
      wp_head()
      ?>
</head>

<body>
      <div class="wp-loading-overlay" style="display: none">
            <div class="wp-loading"></div>
      </div>
      <div class="container home">
            <header class="header">
                  <div class="header_main">
                        <div class="containerX header_main-in">
                              <a href="<?= home_url() ?>" class="header_main-logo">
                                    <img class="logo"
                                          src="<?= get_template_directory_uri() . '/assets/images/logo/logo.png' ?>"
                                          alt="" />
                              </a>
                              <div class="header_main-nav">
                                    <ul class="header_main-nav-list">
                                          <?php foreach ($parent_menu_items as $menu_item) : ?>
                                          <li class="header_main-nav--item">
                                                <a href="<?= $menu_item->url ?>" class="header_main-nav--item--link">
                                                      <?= $menu_item->title ?>
                                                </a>
                                                <?php if ($menu_item->submenu_count > 0) {
                                                      ?>
                                                <ion-icon class="icon-down" name="caret-down-outline"></ion-icon>
                                                <?php } ?>

                                                <?php echo render_submenu_by_parent_id($menu_item->ID, $menu_name, $locations) ?>
                                          </li>
                                          <?php endforeach; ?>
                                    </ul>
                              </div>
                              <div class="header_main-icon">
                                    <li class="header_main-icon--item">
                                          <a href="" class="header_main-icon--item--link">
                                                <ion-icon name="search-outline"></ion-icon>
                                          </a>
                                    </li>
                                    <li class="header_main-icon--item">
                                          <?php if (!is_user_logged_in()): ?>
                                          <a href="./login" class="header_main-icon--item--link">
                                                <ion-icon name="person-circle-outline"></ion-icon>
                                          </a>
                                          <?php else: ?>
                                          <a href="./profile" class="header_main-icon--item--link">
                                                <ion-icon name="person-circle-outline"></ion-icon>
                                          </a>
                                          <?php endif; ?>
                                    </li>
                                    <li class="header_main-icon--item header_main-icon--item--cart" id="show-cart">
                                          <button class="header_main-icon--item--button">
                                                <ion-icon name="cart-outline"></ion-icon>
                                          </button>
                                          <div class="header_main-cart-count">2</div>
                                          <div class="header__cart-overlay"></div>
                                          <div class="header__cart">
                                                <div class="header__cart-content">

                                                      <div class="header__cart-content--having">
                                                            <h4 class="cart-content__title">Cart</h4>
                                                            <div class="cart-content__list">
                                                                  <div class="cart-content__item">
                                                                        <div class="cart-content__item-container-img">
                                                                              <div class="cart-content__item-wrap-img">
                                                                                    <img class="cart-content__item-img"
                                                                                          src="https://bikegear.in/image/cache/catalog/products/HJC%20Helmets/hjc-f31-solid-semi-flat-black-helmet/1-hjc-f31-solid-semi-flat-black-helmet-800x800.png"
                                                                                          alt="" />
                                                                              </div>
                                                                              <div class="cart-content__item-quantity">
                                                                                    <div
                                                                                          class="cart-content__item-quantity-controls">
                                                                                          <button
                                                                                                class="cart-content__item-quantity-decrease">
                                                                                                -
                                                                                          </button>
                                                                                          <input value="1" min="1"
                                                                                                class="cart-content__item-quantity-input" />
                                                                                          <button
                                                                                                class="cart-content__item-quantity-increase">
                                                                                                +
                                                                                          </button>
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                        <div class="cart-content__item-desc">
                                                                              <div class="cart-content__item-info">
                                                                                    <h3
                                                                                          class="cart-content__item-title">
                                                                                          i91 CARST/MC1SF
                                                                                    </h3>
                                                                                    <div
                                                                                          class="cart-content__item-price">
                                                                                          <span
                                                                                                class="cart-content__item-price-item">319.000</span>
                                                                                          <span
                                                                                                class="cart-content__item-quantity-item">x
                                                                                                2</span>
                                                                                    </div>
                                                                                    <div
                                                                                          class="cart-content__item-property">
                                                                                          <span
                                                                                                class="cart-content__item-property-text">Kích
                                                                                                thước: M</span>
                                                                                    </div>
                                                                              </div>
                                                                              <button
                                                                                    class="cart-content__item-action-delete">
                                                                                    Xoá
                                                                              </button>
                                                                        </div>
                                                                  </div>
                                                                  <div class="cart-content__item">
                                                                        <div class="cart-content__item-container-img">
                                                                              <div class="cart-content__item-wrap-img">
                                                                                    <img class="cart-content__item-img"
                                                                                          src="https://bikegear.in/image/cache/catalog/products/HJC%20Helmets/hjc-f31-solid-semi-flat-black-helmet/1-hjc-f31-solid-semi-flat-black-helmet-800x800.png"
                                                                                          alt="" />
                                                                              </div>
                                                                              <div class="cart-content__item-quantity">
                                                                                    <div
                                                                                          class="cart-content__item-quantity-controls">
                                                                                          <button
                                                                                                class="cart-content__item-quantity-decrease">
                                                                                                -
                                                                                          </button>
                                                                                          <input value="1" min="1"
                                                                                                class="cart-content__item-quantity-input" />
                                                                                          <button
                                                                                                class="cart-content__item-quantity-increase">
                                                                                                +
                                                                                          </button>
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                        <div class="cart-content__item-desc">
                                                                              <div class="cart-content__item-info">
                                                                                    <h3
                                                                                          class="cart-content__item-title">
                                                                                          i91 CARST/MC1SF
                                                                                    </h3>
                                                                                    <div
                                                                                          class="cart-content__item-price">
                                                                                          <span
                                                                                                class="cart-content__item-price-item">319.000</span>
                                                                                          <span
                                                                                                class="cart-content__item-quantity-item">x
                                                                                                2</span>
                                                                                    </div>
                                                                                    <div
                                                                                          class="cart-content__item-property">
                                                                                          <span
                                                                                                class="cart-content__item-property-text">Kích
                                                                                                thước: M</span>
                                                                                    </div>
                                                                              </div>
                                                                              <button
                                                                                    class="cart-content__item-action-delete">
                                                                                    Xoá
                                                                              </button>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                            <div class="cart-content__footer">
                                                                  <a class="cart-content__footer-link"
                                                                        href="<?php echo home_url('cart'); ?>">
                                                                        <button class="button button--primary">
                                                                              Xem tất cả
                                                                        </button>
                                                                  </a>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </li>
                              </div>
                        </div>
                  </div>
            </header>
      </div>