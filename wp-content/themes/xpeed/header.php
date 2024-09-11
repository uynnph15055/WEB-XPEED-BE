<?php session_start(); ?>
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
      <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
      <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      <?php wp_head() ?>
</head>

<body>
      <div class="container home">
            <header class="header">
                  <div class="header_headline">
                        <div class="header_headline-one headline-common">
                              8월 택배 쉬는 날 배송 공지
                        </div>

                  </div>
                  <div class="header_main containerX">
                        <div class="header_main-logo">
                              <img class="logo"
                                    src="<?= get_template_directory_uri() . '/assets/images/logo/logo.png' ?>"
                                    alt="Logo" />
                        </div>
                        <div class="header_main-nav">
                              <ul class="header_main-nav-list">
                                    <li class="header_main-nav--item">
                                          <a href="">RPHA 12 CARBON</a>
                                          <!-- <div class="header_main-submenu">
                                                <ul class="header_main-submenu-list">
                                                      <li class="header_main-submenu--item">
                                                            <a class="header_main-submenu--item-link" href="">RPHA 1
                                                            </a>
                                                            <span class="header_main-submenu__badge">N</span>
                                                      </li>
                                                      <li class="header_main-submenu--item">
                                                            <a class="header_main-submenu--item-link" href="">RPHA 1</a>
                                                      </li>
                                                      <li class="header_main-submenu--item">
                                                            <a class="header_main-submenu--item-link" href="">RPHA 1</a>
                                                      </li>
                                                      <li class="header_main-submenu--item">
                                                            <a class="header_main-submenu--item-link" href="">RPHA 1</a>
                                                      </li>
                                                      <li class="header_main-submenu--item">
                                                            <a class="header_main-submenu--item-link" href="">RPHA 1</a>
                                                      </li>
                                                </ul>
                                                <img class="header_main-submenu__image"
                                                      src="https://rt6moto.co.kr/cdn/shop/files/MAIN-full_face.jpg?v=1683869270&width=1080"
                                                      alt="">
                                          </div> -->
                                    </li>
                                    <li class="header_main-nav--item">
                                          <a href="">RPHA 1</a>
                                    </li>
                                    <li class="header_main-nav--item">
                                          <a href="">RPHA 12 CARBON</a>
                                          <!-- <div class="header_main-submenu">
                  <ul class="header_main-submenu-list">
                    <li class="header_main-submenu--item">
                      <a class="header_main-submenu--item-link" href="">RPHA 1 </a>
                      <span class="header_main-submenu__badge">N</span>
                    </li>
                    <li class="header_main-submenu--item">
                      <a class="header_main-submenu--item-link" href="">RPHA 1</a>
                    </li>
                    <li class="header_main-submenu--item">
                      <a class="header_main-submenu--item-link" href="">RPHA 1</a>
                    </li>
                    <li class="header_main-submenu--item">
                      <a class="header_main-submenu--item-link" href="">RPHA 1</a>
                    </li>
                    <li class="header_main-submenu--item">
                      <a class="header_main-submenu--item-link" href="">RPHA 1</a>
                    </li>
                  </ul>
                  <img class="header_main-submenu__image" src="https://rt6moto.co.kr/cdn/shop/files/MAIN-full_face.jpg?v=1683869270&width=1080" alt="">
                </div> -->
                                    </li>
                                    <li class="header_main-nav--item">RPHA 12</li>
                                    <li class="header_main-nav--item">RPAH 71 CARBON</li>
                              </ul>
                        </div>
                        <div class="header_main-icon">
                              <li class="header_main-icon--item">
                                    <a href="" class="header_main-icon--item--link">
                                          <ion-icon name="search-outline"></ion-icon>
                                    </a>
                              </li>
                              <li class="header_main-icon--item">
                                    <a href="" class="header_main-icon--item--link">
                                          <ion-icon name="person-circle-outline"></ion-icon>
                                    </a>
                              </li>
                              <li class="header_main-icon--item">
                                    <a href="" class="header_main-icon--item--link">
                                          <ion-icon name="cart-outline"></ion-icon>
                                    </a>
                              </li>
                        </div>
                  </div>
            </header>