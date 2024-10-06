<?php

/**
 * Template Name: Home
 * Author: Uynn
 */
get_header();
?>
<main class="product-single-wrapper">
      <div class="product-single">
            <div class="product-content">
                  <!-- Phần bên trái, để trống -->
                  <div class="product-content__left">
                        <img src="https://cdn.shopify.com/s/files/1/0669/5803/3208/files/RPHA_12_FQ20_DIABLO_banner.jpg?v=1725274055"
                              alt="" />
                  </div>

                  <!-- Phần bên phải là thông tin chi tiết sản phẩm -->
                  <div class="product-content__right">
                        <div class="product-detail">
                              <div class="product-detail__top-line">
                                    <div class="product-detail__brand-logo">
                                          <img class="brand-logo__img"
                                                src="https://i.ebayimg.com/images/g/3loAAOSwPYZU2PmE/s-l1200.jpg"
                                                alt="" />
                                    </div>
                                    <div class="product-detail__badge">
                                          <span class="product-detail__badge product-detail__badge--new">NEW</span>
                                    </div>
                              </div>
                              <h1 class="product-detail__title">RPHA 12 LIGHT FURY</h1>
                              <p class="product-detail__series">RPHA SERIES</p>
                              <p class="product-detail__price">₩ 729,000</p>

                              <div class="product-detail__size">
                                    <label class="product-detail__size-label">SIZE</label>
                                    <div class="product-detail__size-options">
                                          <input type="radio" name="size" id="size-s" value="S"
                                                class="product-detail__size-option" />
                                          <label for="size-s" class="product-detail__size-label-option">S</label>

                                          <input type="radio" name="size" id="size-m" value="M"
                                                class="product-detail__size-option" />
                                          <label for="size-m" class="product-detail__size-label-option">M</label>

                                          <input type="radio" name="size" id="size-l" value="L"
                                                class="product-detail__size-option" />
                                          <label for="size-l" class="product-detail__size-label-option">L</label>

                                          <input type="radio" name="size" id="size-xl" value="XL"
                                                class="product-detail__size-option" />
                                          <label for="size-xl" class="product-detail__size-label-option">XL</label>

                                          <input type="radio" name="size" id="size-2xl" value="2XL"
                                                class="product-detail__size-option" />
                                          <label for="size-2xl" class="product-detail__size-label-option">2XL</label>
                                    </div>
                              </div>

                              <div class="product-detail__quantity">
                                    <label class="product-detail__quantity-label">수량</label>
                                    <div class="product-detail__quantity-controls">
                                          <button class="product-detail__quantity-decrease">-</button>
                                          <input value="1" min="1" class="product-detail__quantity-input" />
                                          <button class="product-detail__quantity-increase">+</button>
                                    </div>
                              </div>

                              <div class="product-detail__actions">
                                    <button class="button button--primary product-detail__buy-now">
                                          지금 구매
                                    </button>
                                    <button class="button button--cart product-detail__add-to-cart">
                                          카트에 추가
                                    </button>
                              </div>

                              <div class="product-detail__info">
                                    <div class="product-detail__info-item">
                                          <input type="checkbox" id="toggle1" class="product-detail__info-toggle" />
                                          <label class="product-detail__info-label" for="toggle1">
                                                배송 안내
                                                <ion-icon class="product-detail__info-icon" name="caret-down-outline">
                                                </ion-icon>
                                          </label>
                                          <div class="product-detail__info-content">
                                                - 배송비 : 기본배송료는 3,500원 입니다. (도서,산간,오지
                                                일부지역은 배송비가 추가될 수 있습니다) 10만원 이상 구매시
                                                무료배송입니다. - 본 상품의 평균 배송일은
                                                2~3일입니다.(입금 확인 후) [배송예정일은
                                                주문시점(주문순서)에 따른 유동성이 발생하므로 평균
                                                배송일과는 차이가 발생할 수 있습니다.] - 주문 마감은 평일
                                                오후 2시까지 입니다. (토요일, 일요일, 공휴일 배송업무
                                                휴무) - 배송 정책 : 주문 하신 제품 영업일 1~2일 내에서
                                                발송 되며, 배송비는 구매 금액에 따라 달라집니다. 특정
                                                제품의 경우 발송 시가가 다를 수 있습니다.
                                          </div>
                                    </div>

                                    <div class="product-detail__info-item">
                                          <input type="checkbox" id="toggle2" class="product-detail__info-toggle" />
                                          <label class="product-detail__info-label" for="toggle2">
                                                교환 및 반품안내
                                                <ion-icon class="product-detail__info-icon" name="caret-down-outline">
                                                </ion-icon>
                                          </label>
                                          <div class="product-detail__info-content">
                                                - 상품 택(tag)제거 또는 개봉으로 상품 가치 훼손 시에는
                                                상품수령후 7일 이내라도 교환 및 반품이 불가능합니다. -
                                                저단가 상품, 일부 특가 상품은 고객 변심에 의한 교환,
                                                반품은 고객께서 배송비를 부담하셔야 합니다(제품의
                                                하자,배송오류는 제외) - 상품의 경우, 실외에서 착용하였거나
                                                사용 흔적이 있는 경우에는 교환/반품 기간 내라도 교환 및
                                                반품이 불가능 합니다. - 일부 특가 상품의 경우, 인수 후에는
                                                제품 하자나 오배송의 경우를 제외한 고객님의 단순 변심에
                                                의한 교환, 반품이 불가능할 수 있사오니, 각 상품의 상품
                                                상세 정보를 참조 하십시오. 환불 안내 - 상품 청약철회
                                                가능기간은 상품 수령일로 부터 7일 이내 입니다. - 고객의
                                                단순 변심으로 인한 환불은 왕복 배송비 7,000원을 부담하셔야
                                                합니다. AS 안내 - A/S 관련 문의는 고객 서비스 페이지를
                                                통해 문의하시기 바랍니다.
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
            <div class="product-description">
                  <!-- Product description content fill -->
                  <img src="https://cdn.shopify.com/s/files/1/0669/5803/3208/files/RPHA_12_FQ20_DIABLO_banner.jpg?v=1725274055"
                        alt="" />
                  <!-- End product description content fill -->
            </div>
      </div>
      <div class="product-related">
            <h2 class="product-related__title">관련 상품</h2>
            <div class="product-related__list">
                  <div class="shopify__product">
                        <a href="" class="shopify__product-image-wrapper">
                              <span class="shopify__product-badge shopify__product-badge--new">NEW</span>
                              <img src="https://hjchelmets.eu/cdn/shop/files/black___rpha_12_carbon-solid_1.png?v=1692400941"
                                    alt="" class="shopify__product-image" />
                        </a>

                        <div class="shopify__product-details">
                              <h3 class="shopify__product-title">
                                    <a href="" class="shopify__product-link">i71 CELOS / MC5</a>
                              </h3>

                              <p class="shopify__product-cate">FULL FACE</p>

                              <span class="shopify__product-price">₩ 299,000</span>
                        </div>
                  </div>
                  <div class="shopify__product">
                        <a href="" class="shopify__product-image-wrapper">
                              <span class="shopify__product-badge shopify__product-badge--new">NEW</span>
                              <img src="https://hjchelmets.eu/cdn/shop/files/black___rpha_12_carbon-solid_1.png?v=1692400941"
                                    alt="" class="shopify__product-image" />
                        </a>

                        <div class="shopify__product-details">
                              <h3 class="shopify__product-title">
                                    <a href="" class="shopify__product-link">i71 CELOS / MC5</a>
                              </h3>

                              <p class="shopify__product-cate">FULL FACE</p>

                              <span class="shopify__product-price">₩ 299,000</span>
                        </div>
                  </div>
                  <div class="shopify__product">
                        <a href="" class="shopify__product-image-wrapper">
                              <span class="shopify__product-badge shopify__product-badge--new">NEW</span>
                              <img src="https://hjchelmets.eu/cdn/shop/files/black___rpha_12_carbon-solid_1.png?v=1692400941"
                                    alt="" class="shopify__product-image" />
                        </a>

                        <div class="shopify__product-details">
                              <h3 class="shopify__product-title">
                                    <a href="" class="shopify__product-link">i71 CELOS / MC5</a>
                              </h3>

                              <p class="shopify__product-cate">FULL FACE</p>

                              <span class="shopify__product-price">₩ 299,000</span>
                        </div>
                  </div>
                  <div class="shopify__product">
                        <a href="" class="shopify__product-image-wrapper">
                              <span class="shopify__product-badge shopify__product-badge--new">NEW</span>
                              <img src="https://hjchelmets.eu/cdn/shop/files/black___rpha_12_carbon-solid_1.png?v=1692400941"
                                    alt="" class="shopify__product-image" />
                        </a>

                        <div class="shopify__product-details">
                              <h3 class="shopify__product-title">
                                    <a href="" class="shopify__product-link">i71 CELOS / MC5</a>
                              </h3>

                              <p class="shopify__product-cate">FULL FACE</p>

                              <span class="shopify__product-price">₩ 299,000</span>
                        </div>
                  </div>
                  <div class="shopify__product">
                        <a href="" class="shopify__product-image-wrapper">
                              <span class="shopify__product-badge shopify__product-badge--new">NEW</span>
                              <img src="https://hjchelmets.eu/cdn/shop/files/black___rpha_12_carbon-solid_1.png?v=1692400941"
                                    alt="" class="shopify__product-image" />
                        </a>

                        <div class="shopify__product-details">
                              <h3 class="shopify__product-title">
                                    <a href="" class="shopify__product-link">i71 CELOS / MC5</a>
                              </h3>

                              <p class="shopify__product-cate">FULL FACE</p>

                              <span class="shopify__product-price">₩ 299,000</span>
                        </div>
                  </div>
            </div>
      </div>
</main>
<?php
get_footer();
?>