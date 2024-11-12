<?php

/**
 * Template Name: Profile
 * Author: Phuongdd
 */

check_user_login_and_redirect();
$current_user = wp_get_current_user();
get_header();
?>
    <!-- account -->
    <div class="account">
        <div class="account__sidebar">
            <div class="sidebar__menu">
                <a href="#" class="menu__item">
                    <span class="menu__item-content">Trang của tôi</span>
                    <ion-icon class="menu__item-icon" name="person-circle-outline"></ion-icon>
                </a>
                <a href="#" class="menu__item">
                    <span class="menu__item-content">Lịch sử đơn hàng</span>
                    <ion-icon class="menu__item-icon" name="person-circle-outline"></ion-icon>
                </a>
                <a href="#" class="menu__item">
                    <span class="menu__item-content">Hồ sơ của tôi</span>
                    <ion-icon class="menu__item-icon" name="person-circle-outline"></ion-icon>
                </a>
                <a href="#" class="menu__item">
                    <span class="menu__item-content">Tìm mã bưu điện</span>
                    <ion-icon class="menu__item-icon" name="person-circle-outline"></ion-icon>
                </a>
                <a href="#" class="menu__item">
                    <span class="menu__item-content">Đăng xuất</span>
                    <ion-icon class="menu__item-icon" name="person-circle-outline"></ion-icon>
                </a>
            </div>

            <div class="sidebar__profile">
                <div class="profile__head">Thẻ hồ sơ</div>

                <div class="profile__body">
                    <div class="profile__item">
                        <ion-icon class="profile__item-icon" name="person"></ion-icon>
                        <span><?php echo $current_user->user_login ?? ''  ?></span>
                    </div>
                    <div class="profile__item">
                        <ion-icon class="profile__item-icon" name="mail"></ion-icon>
                        <span><?php echo $current_user->user_email ?? ''  ?></span>
                    </div>
                    <div class="profile__location">
                        <ion-icon class="profile__item-icon" name="location"></ion-icon>
                        <div class="location__content">
                            <div class="location__username"></div>
                            <div class="location__address"><?php echo $current_user->user_address ?? ''  ?></div>
                        </div>
                    </div>
                </div>

                <div class="profile__actions">
                    <a href="#" class="profile__action">Cập nhật</a>
                    <a href="#" class="profile__action">Đổi mật khẩu</a>
                    <a class="profile__action" id="profile-logout__action">Đăng xuất</a>
                </div>
            </div>
        </div>

        <div class="account__content">
            <div class="content__title">Thông tin tài khoản</div>
            <div class="general__title-wrapper">
                <h2 class="general__title">Lịch sử đơn hàng gần đây</h2>
                <div class="">
                    <a href="#">
                        <ion-icon class="menu__item-icon" name="chevron-back-outline"></ion-icon>
                        Trang của tôi
                    </a>
                </div>
            </div>
            <div class="general__search">
                <div class="search__form">
                    <input type="text" class="search__input" placeholder="Tìm kiếm theo số đơn hàng hoặc tên sản phẩm" />
                    <button class="search__button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-search-box">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            <path d="M9 10V7.5l2-1.5 2 1.5V10l-2 1.5L9 10z"></path>
                            <path d="M9 13l2 1.5 2-1.5"></path>
                        </svg>
                    </button>
                </div>
                <span class="search__result">Hiển thị 0 Đơn hàng</span>
            </div>

            <div class="recent__order">
                <div class="order__none">Không tìm thấy lịch sử đơn hàng.</div>
            </div>
        </div>
    </div>

<?php
get_footer();
?>