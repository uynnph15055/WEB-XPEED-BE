<?php

/**
 * Template Name: Register
 * Author: Uynn
 */
get_header();
?>
<main class="auth-wrapper">
    <div class="auth-wrapper__container">
        <h2 class="auth-wrapper__title"><?php _e('Đăng ký', 'xpeed'); ?></h2>
        <form class="auth-wrapper__form" id='auth-wrapper-register__form'>
            <input
                    class="auth-wrapper__input auth-wrapper__input--name"
                    type="text"
                    name="username"
                    placeholder="<?php _e('Nhập tên người dùng', 'xpeed'); ?>"
            />
            <div id="auth-wrapper-username__message" class="auth-wrapper__message" style="color: red;"></div>
            <input
                    class="auth-wrapper__input auth-wrapper__input--email"
                    type="text"
                    name="email"
                    placeholder="<?php _e('Nhập email', 'xpeed'); ?>"
            />
            <div id="auth-wrapper-email__message" class="auth-wrapper__message" style="color: red;"></div>
            <input
                    class="auth-wrapper__input auth-wrapper__input--password"
                    type="password"
                    name="password"
                    placeholder="<?php _e('Nhập mật khẩu', 'xpeed'); ?>"
            />
            <div id="auth-wrapper-password__message" class="auth-wrapper__message" style="color: red;"></div>
            <input
                    class="auth-wrapper__input auth-wrapper__input--address"
                    type="text"
                    name="address"
                    placeholder="<?php _e('Nhập địa chỉ', 'xpeed'); ?>"
            />
            <div id="auth-wrapper-address__message" class="auth-wrapper__message" style="color: red;"></div>
            <button
                    class="auth-wrapper__button auth-wrapper__button--submit button button--primary"
                    type="submit"
            >
                <?php _e('Gửi', 'xpeed'); ?>
            </button>
        </form>
        <div class="auth-wrapper__links auth-wrapper__links--register">
            <div class="auth-wrapper__divider">
                <div class="auth-wrapper__divider-text"><?php _e('HOẶC', 'xpeed'); ?></div>
                <div class="auth-wrapper__social-buttons">
                    <button
                            class="auth-wrapper__social-button auth-wrapper__social-button--google"
                            type="button"
                            onclick="window.location.href='<?php echo home_url('/google-login-callback'); ?>'"
                    >
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-google"
                                viewBox="0 0 16 16"
                        >
                            <path
                                    d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"
                            />
                        </svg>
                    </button>

                </div>
            </div>
        </div>
    </div>
</main>
<?php
get_footer();
?>
