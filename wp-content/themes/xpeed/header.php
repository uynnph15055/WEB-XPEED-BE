<?php
session_start();
require_once 'app/Config.php';
if (!isset($_SESSION['cart'])) {
      $_SESSION['cart'] = [];
}
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
      <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet" />
      <link rel="profile" href="http://gmpg.org/xfn/11">
      <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
      <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
      <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
      <script src="https://unpkg.com/scrollreveal"></script>
      <script>
            const baseUrl = "<?php echo home_url(); ?>";
      </script>
      <?php wp_head() ?>
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
                                          <?php foreach ($headers as $menu_item) : ?>
                                                <li class="header_main-nav--item">
                                                      <a href="<?= $menu_item->url ?>" class="header_main-nav--item--link">
                                                            <?= $menu_item->title ?>
                                                      </a>
                                                      <?php if ($menu_item->submenu_count > 0) {
                                                      ?>
                                                            <ion-icon class="icon-down" name="caret-down-outline"></ion-icon>
                                                      <?php } ?>

                                                      <?php echo render_submenu_by_parent_id($menu_item->ID, $header_menu, $locations) ?>
                                                </li>
                                          <?php endforeach; ?>
                                    </ul>
                              </div>
                              <div class="header_main-icon">
                                  <li class="header_main-icon--item">
                                      <?php if (!is_user_logged_in()): ?>
                                          <a href="<?= $current_lang == 'vi' ? './dang-nhap' : './en/login' ?>"
                                             class="header_main-btn-login"><?= $current_lang == 'vi' ? 'Đăng nhập' : 'Login' ?>
                                          </a>
                                      <?php else: ?>
                                          <a href="<?= $current_lang == 'vi' ? './en/profile' : './tai-khoan' ?>"
                                             class="header_main-icon--item--link">
                                              <ion-icon name="person-circle-outline"></ion-icon>
                                          </a>
                                      <?php endif; ?>
                                  </li>
                                    <li class="header_main-icon--item header_main-icon--item--cart" id="show-cart">
                                          <button class="header_main-icon--item--button"
                                                onclick="window.location.href='<?php echo home_url('cart'); ?>'">
                                                <ion-icon name="cart-outline"></ion-icon>
                                          </button>

                                        <?php if (count($_SESSION['cart']) >= 1): ?>
                                            <div class="header_main-cart-count" id="product-count"><?= count($_SESSION['cart']); ?></div>
                                        <?php endif; ?>
                                          <div class="header__cart-overlay"></div>
                                    </li>
                              </div>
                        </div>
                  </div>
            </header>
      </div>