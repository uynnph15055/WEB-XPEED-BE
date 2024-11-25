<?php

/**
 * Template Name: Profile
 * Author: Phuongdd
 */

check_user_login_and_redirect();
$current_user = wp_get_current_user();
?>
<div class="content__page">
    <!-- account -->
    <div class="account">
        <div class="account__sidebar">
            <div class="sidebar__menu">
                <a href="<?= home_url('/profile') ?>" class="menu__item">
                    <span class="menu__item-content">Trang của tôi</span>
                    <ion-icon class="menu__item-icon" name="person-circle-outline"></ion-icon>
                </a>
                <a href="<?= home_url('/lich-su-dat-hang') ?>" class="menu__item">
                    <span class="menu__item-content">Lịch sử đơn hàng</span>
                    <ion-icon class="menu__item-icon" name="person-circle-outline"></ion-icon>
                </a>
                <a href="<?= home_url('/lich-su-dat-hang') ?>" class="menu__item">
                    <span class="menu__item-content">Hồ sơ của tôi</span>
                    <ion-icon class="menu__item-icon" name="person-circle-outline"></ion-icon>
                </a>
                <a href="<?= home_url('/lich-su-dat-hang') ?>" class="menu__item">
                    <span class="menu__item-content">Tìm mã bưu điện</span>
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
