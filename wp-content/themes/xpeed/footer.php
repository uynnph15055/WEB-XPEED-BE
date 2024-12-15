<footer class="footer">
      <div class="footer-container">
            <div class="footer__nav">
                  <div class="footer__nav-social">
                        <ul class="footer__nav-social-list">
                              <li class="footer__nav-social-item">
                                    <span class="footer__nav-social-item__icon">
                                          <a class="footer__nav-social-item__icon-link"
                                                href="https://www.tiktok.com/@xpeedhelmets">
                                                <span class="footer__nav-social-item__text">TIK TOK</span>
                                                <ion-icon style="transform:translateY(3px)" name="logo-tiktok"></ion-icon>
                                          </a>
                                    </span>
                              </li>
                              <li class="footer__nav-social-item">
                                    <span class="footer__nav-social-item__icon">
                                          <a class="footer__nav-social-item__icon-link"
                                                href="https://www.facebook.com/xpeedhelmets">
                                                <span class="footer__nav-social-item__text">&nbsp FACEBOOK</span>
                                                <ion-icon style="transform:translateY(3px)" name="logo-facebook"></ion-icon>
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
                        <?= _e('Email: Xpeedhelmets.marketing@gmail.com', 'xpeed'); ?>
                  </p>
            </div>
      </div>
</footer>
<button aria-label="<?= home_url() ?>" id="backToTop" class="back_top">
      <ion-icon name="caret-up-outline"></ion-icon>
</button>

<div class="overlay"></div>
</div>
</body>
<link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
    />
<script
      type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
<script>
      $(document).ready(function () {
        $('.shopify__product-slider').slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: true,
          prevArrow: '<button type="button" class="slick-prev"><ion-icon name="arrow-back-outline"></ion-icon></button>', // Nút Prev
          nextArrow: '<button type="button" class="slick-next"><ion-icon name="arrow-forward-outline"></ion-icon></button>', // Nút Next
          infinite: false,
          responsive: [
            {
              breakpoint: 425,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1
              }
            }
          ]
        });
      });
    </script>
<script src="https://code.jquery.com/jquery-3.7.1.js"></script>
<script src="<?= get_template_directory_uri() . '/assets/js/animations/animation.js' ?>"></script>
<script src="<?= get_template_directory_uri() . '/dist/main.bundle.js' ?>"></script>


</html>