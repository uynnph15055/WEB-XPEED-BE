<?php

/**
 * Template Name: Profile
 * Author: Phuongdd
 */

check_user_login_and_redirect();
$current_user = wp_get_current_user();
?>
    <!-- account -->
        <div class="account__sidebar">
            <div class="account__sidebar-close">
                <ion-icon
                        name="close-outline"
                        class="sidebar__close-icon"
                ></ion-icon>
            </div>

            <div class="sidebar__menu">
                <a href="<?= home_url('/lich-su-dat-hang') ?>" class="menu__item">
                      <span class="menu__item-content"><?= _e('Lịch sử mua hàng' , 'xpeed') ?></span>
                    <ion-icon name="cart"></ion-icon>
                </a>
<!--                <a href="--><?//= home_url('/profile') ?><!--" class="menu__item">-->
<!--                    <span class="menu__item-content">My Profile</span>-->
<!--                    <ion-icon name="settings"></ion-icon>-->
<!--                </a>-->
<!--                <a href="--><?//= home_url('/lich-su-dat-hang') ?><!--" class="menu__item">-->
<!--                    <span class="menu__item-content">Find Zip Code</span>-->
<!--                    <ion-icon name="search"></ion-icon>-->
<!--                </a>-->
<!--                <a href="--><?//= home_url('/lich-su-dat-hang') ?><!--" class="menu__item">-->
<!--                    <span class="menu__item-content">Logout</span>-->
<!--                    <ion-icon name="exit"></ion-icon>-->
<!--                </a>-->
            </div>

            <div class="sidebar__profile">
                <div class="profile__head"><?= _e('Thẻ hồ sơ' , 'xpeed') ?></div>

                <div class="profile__body">
                    <div class="profile__item">
                        <ion-icon class="profile__item-icon" name="person"></ion-icon>
                        <span><?php echo $current_user->user_login ?? ''  ?></span>
                    </div>
                    <div class="profile__item">
                        <ion-icon class="profile__item-icon" name="mail"></ion-icon>
                        <span><?php echo $current_user->user_email ?? ''  ?></span>
                    </div>
                    <?php if(!empty($current_user->user_address)){ ?>
                    <div class="profile__location"> 
                        <ion-icon class="profile__item-icon" name="location"></ion-icon>
                        <div class="location__content">
                            <div class="location__username"></div>
                            <div class="location__address"><?php echo $current_user->user_address ?? ''  ?></div>
                        </div>
                    </div>
                    <?php } ?>
                </div>

                <div class="profile__actions">
<!--                    <a href="#" class="profile__action">Update</a>-->
<!--                    <a href="#" class="profile__action">Change Password</a>-->
                    <a href="#" class="profile__action" id="profile-logout__action"><?= _e('Đăng xuất' , 'xpeed') ?></a>
                </div>
            </div>
        </div>