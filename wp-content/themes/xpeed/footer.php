<footer class="footer">
      <div class="footer-container">
            <div class="footer__nav">
                  <div class="footer__nav-social">
                        <ul class="footer__nav-social-list">
                              <li class="footer__nav-social-item">
                                    <span class="footer__nav-social-item__icon">
                                          <a class="footer__nav-social-item__icon-link"
                                                href="https://www.tiktok.com/@hjchelmetsvietnam?_t=8rkKgRcPeuV&_r=1">
                                                <span class="footer__nav-social-item__text">TIK TOK</span>
                                                <ion-icon name="logo-tiktok"></ion-icon>
                                          </a>
                                    </span>
                              </li>
                              <li class="footer__nav-social-item">
                                    <span class="footer__nav-social-item__icon">
                                          <a class="footer__nav-social-item__icon-link"
                                                href="https://www.facebook.com/hjchelmetsvn?mibextid=ZbWKwL">
                                                <span class="footer__nav-social-item__text">&nbsp FACEBOOK</span>
                                                <ion-icon name="logo-facebook"></ion-icon>
                                          </a>
                                    </span>
                              </li>
                        </ul>
                  </div>
                  <div class="footer__nav-menu">
                        <ul class="footer__nav-menu-list">
                              <?php
                              if (!empty($footers)):
                                    foreach ($footers as $menu) :   ?>
                              <li class="footer__nav-menu-item">
                                    <a class="footer__nav-menu-item__link" href="<?= $menu->url ?>"
                                          title="<?= !empty($menu->title) ? $menu->title : 'Link to ' . $menu->url ?>">
                                          <?= !empty($menu->title) ? $menu->title : 'Link' ?>
                                    </a>
                                    </a>
                              </li>
                              <?php endforeach;
                              endif; ?>
                        </ul>
                  </div>
            </div>
            <div class="footer__credits">
                  <p class="footer__credits-text">
                        <?= _e('Văn Phòng/Showroom: Mộc Lan 6-06, KDT Vinhomes Green Bay, Mễ Trì, Nam Từ Liêm, Hà Nội.', 'xpeed'); ?>
                  </p>
                  <p class="footer__credits-text">
                        <?= _e('Hotline: 0987254899', 'xpeed'); ?>
                  </p>
                  <p class="footer__credits-text">
                        <?= _e('Email: vuong.quyen@gmail.com', 'xpeed'); ?>
                  </p>
            </div>
      </div>
</footer>
<button aria-label="<?= home_url() ?>" id="backToTop" class="back_top">
      <ion-icon name="caret-up-outline"></ion-icon>
</button>

<div class="overlay"></div>
<div class="language">
      <div class="language-selected">
            <img alt="language"
                  src="<?= get_template_directory_uri()  ?><?= $current_lang == 'vi' ? '/assets/images/icons/flag_vi.svg' : '/assets/images/icons/flag_us.svg'  ?>"
                  alt="language image" class="language-selected--img" />
      </div>

      <ul class="language-list">
            <?php foreach ($languages as $language) :
            ?>
            <li class="language-item">
                  <a href=<?= $language['url'] ?>>
                        <img alt="language"
                              src="<?= get_template_directory_uri() ?><?= $language['slug'] == 'vi' ? '/assets/images/icons/flag_vi.svg' : '/assets/images/icons/flag_us.svg'  ?>"
                              alt="language image" class="language-selected--img" />
                  </a>
            </li>
            <?php endforeach; ?>
      </ul>
</div>
</div>
</body>
<script src="https://code.jquery.com/jquery-3.7.1.js"></script>
<script src="<?= get_template_directory_uri() . '/assets/js/animations/animation.js' ?>"></script>
<script src="<?= get_template_directory_uri() . '/dist/main.bundle.js' ?>"></script>


</html>