<?php

/**
 * Template Name: Register
 * Author: Uynn
 */
get_header();
?>
<main class="auth-wrapper">
      <div class="auth-wrapper__container">
            <h2 class="auth-wrapper__title">회원가입</h2>
            <form class="auth-wrapper__form" action="">
                  <input class="auth-wrapper__input auth-wrapper__input--name" type="text" placeholder="이름" />
                  <input class="auth-wrapper__input auth-wrapper__input--email" type="text" placeholder="이메일 계정" />
                  <input class="auth-wrapper__input auth-wrapper__input--password" type="text" placeholder="비밀번호" />
                  <a href="#" class="auth-wrapper__link-button">
                        <button class="auth-wrapper__button auth-wrapper__button--submit button button--primary"
                              type="button">
                              우편번호 검색
                        </button>
                  </a>
                  <input class="auth-wrapper__input auth-wrapper__input--name auth-wrapper__input--readonly" type="text"
                        placeholder="우편번호" readonly />
                  <input class="auth-wrapper__input auth-wrapper__input--email" type="text" placeholder="주소" readonly />
                  <input class="auth-wrapper__input auth-wrapper__input--password" type="text"
                        placeholder="아파트, 동/호수 등" />
                  <button class="auth-wrapper__button auth-wrapper__button--submit button button--primary"
                        type="button">
                        회원가입
                  </button>
            </form>
            <div class="auth-wrapper__links auth-wrapper__links--register">
                  <div class="auth-wrapper__divider">
                        <div class="auth-wrapper__divider-text">또는</div>
                        <div class="auth-wrapper__social-buttons">
                              <button class="auth-wrapper__social-button auth-wrapper__social-button--google"
                                    type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                          class="bi bi-google" viewBox="0 0 16 16">
                                          <path
                                                d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                                    </svg>
                              </button>
                              <button class="auth-wrapper__social-button auth-wrapper__social-button--facebook"
                                    type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                          class="bi bi-facebook" viewBox="0 0 16 16">
                                          <path
                                                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                    </svg>
                              </button>
                              <button class="auth-wrapper__social-button auth-wrapper__social-button--kakao"
                                    type="button">
                                    <svg width="16" height="16" viewBox="0 0 512 512" version="1.1"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path fill="currentColor"
                                                d="M255.5 48C299.345 48 339.897 56.5332 377.156 73.5996C414.415 90.666 443.871 113.873 465.522 143.22C487.174 172.566 498 204.577 498 239.252C498 273.926 487.174 305.982 465.522 335.42C443.871 364.857 414.46 388.109 377.291 405.175C340.122 422.241 299.525 430.775 255.5 430.775C241.607 430.775 227.262 429.781 212.467 427.795C148.233 472.402 114.042 494.977 109.892 495.518C107.907 496.241 106.012 496.15 104.208 495.248C103.486 494.706 102.945 493.983 102.584 493.08C102.223 492.177 102.043 491.365 102.043 490.642V489.559C103.126 482.515 111.335 453.169 126.672 401.518C91.8486 384.181 64.1974 361.2 43.7185 332.575C23.2395 303.951 13 272.843 13 239.252C13 204.577 23.8259 172.566 45.4777 143.22C67.1295 113.873 96.5849 90.666 133.844 73.5996C171.103 56.5332 211.655 48 255.5 48Z">
                                          </path>
                                    </svg>
                              </button>
                              <button class="auth-wrapper__social-button auth-wrapper__social-button--naver"
                                    type="button">
                                    <svg width="16" height="16" viewBox="0 0 512 512" version="1.1"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path fill="currentColor"
                                                d="M9 32V480H181.366V255.862L331.358 480H504V32H331.358V255.862L181.366 32H9Z">
                                          </path>
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