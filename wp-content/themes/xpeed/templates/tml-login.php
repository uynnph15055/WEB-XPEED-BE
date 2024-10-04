<?php

/**
 * Template Name: Login
 * Author: Phuongdd
 */
get_header();
?>
<main class="auth-wrapper">
    <div class="auth-wrapper__container">
        <h2 class="auth-wrapper__title">Login</h2>
        <form class="auth-wrapper__form" id="auth-wrapper-login__form">
            <input class="auth-wrapper__input auth-wrapper__input--email" type="text" name="username"
                placeholder="Enter username" />
            <div id="auth-wrapper-username__message" class="auth-wrapper__message" style="color: red;"></div>
            <input class="auth-wrapper__input auth-wrapper__input--password" type="password" name="password"
                placeholder="Enter password" />
            <div id="auth-wrapper-password__message" class="auth-wrapper__message" style="color: red;"></div>
            <div id="auth-wrapper-login__message" class="auth-wrapper__message"
                style="color: red; text-align: center;"></div>
            <button class="auth-wrapper__button auth-wrapper__button--submit button button--primary"
                type="submit">
                submit
            </button>
        </form>
        <div class="auth-wrapper__links">
            <div class="auth-wrapper__links-group">
                <div class="auth-wrapper__link-item">
                    <a class="auth-wrapper__link" href="">Forgot your password?</a>
                </div>
                <div class="auth-wrapper__link-item">
                    <a class="auth-wrapper__link" href="../register">Sign Up</a>
                </div>
            </div>
            <div class="auth-wrapper__divider">
                <div class="auth-wrapper__divider-text">OR</div>
                <div class="auth-wrapper__social-buttons">
                    <button class="auth-wrapper__social-button auth-wrapper__social-button--google"
                        type="button">
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                                <path
                                    d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                            </svg>
                        </a>
                    </button>
                    <button class="auth-wrapper__social-button auth-wrapper__social-button--facebook"
                        type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-facebook" viewBox="0 0 16 16">
                            <path
                                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
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