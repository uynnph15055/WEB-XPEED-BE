<?php

/**
 * Template Name: Product List
 * Author: Uynn
 */
get_header();
?>
<div class="collection__header">
      <h1 id="collection-title" class="collection__heading"></h1>
</div>

<div class="collection__container">
      <div class="collection__sidebar">
            <div class="custom-select">
                  <div class="custom-select__button">
                        <button class="custom-select__title">MODEL</button>
                        <ion-icon class="custom-select__icon" name="caret-down-outline"></ion-icon>
                  </div>

                  <div class="custom-select__options custom-select__options--visible">
                        <label for="rpha1" class="custom-select__option">
                              <input type="checkbox" name="rpha1" id="rpha1" />
                              <span class="custom-select__option-label">RPHA 1</span>
                        </label>
                  </div>
            </div>

            <div class="custom-select">
                  <div class="custom-select__button">
                        <button class="custom-select__title">SIZE</button>
                        <ion-icon class="custom-select__icon" name="caret-down-outline"></ion-icon>
                  </div>

                  <div class="custom-select__options custom-select__options--visible">
                        <label for="xs" class="custom-select__option">
                              <input type="checkbox" name="xs" id="xs" />
                              <span class="custom-select__option-label">XS</span>
                        </label>
                        <label for="s" class="custom-select__option">
                              <input type="checkbox" name="s" id="s" />
                              <span class="custom-select__option-label">S</span>
                        </label>
                        <label for="m" class="custom-select__option">
                              <input type="checkbox" name="m" id="m" />
                              <span class="custom-select__option-label">M</span>
                        </label>
                        <label for="l" class="custom-select__option">
                              <input type="checkbox" name="l" id="l" />
                              <span class="custom-select__option-label">L</span>
                        </label>
                        <label for="xl" class="custom-select__option">
                              <input type="checkbox" name="xl" id="xl" />
                              <span class="custom-select__option-label">XL</span>
                        </label>
                        <label for="2xl" class="custom-select__option">
                              <input type="checkbox" name="2xl" id="2xl" />
                              <span class="custom-select__option-label">2XL</span>
                        </label>
                  </div>
            </div>

            <div class="custom-select">
                  <div class="custom-select__button">
                        <button class="custom-select__title">PRICE</button>
                        <ion-icon class="custom-select__icon" name="caret-down-outline"></ion-icon>
                  </div>

                  <div class="custom-range">
                        <div class="price-range" data-price-range="" style="display: block;">
                              <div class="price-range-input-wrapper">
                                    <div class="price-range-input">
                                          <span class="price-range-currency">₩</span>
                                          <input data-min-range-input="" data-range-input="" class="input"
                                                name="filter.v.price.gte" id="filter-PRICE" type="number"
                                                placeholder="MIN" min="0" max="339000" />
                                          <label class="price-range-label visually-hidden"
                                                for="filter-PRICE">From</label>
                                    </div>
                                    <span class="price-range-separator">–</span>
                                    <div class="price-range-input">
                                          <span class="price-range-currency">₩</span>
                                          <input data-max-range-input="" data-range-input="" class="input"
                                                name="filter.v.price.lte" id="filter-PRICE" type="number"
                                                placeholder="MAX" min="0" max="339000" />
                                          <label class="price-range-label visually-hidden" for="filter-PRICE">To</label>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      </div>

      <div class="collection__content">
            <div class="collection__tags">
                  <a href="#" class="collection__tags__item">
                        <span class="collection__tags__item__content">MODEL: F70 CARBON</span>
                        <ion-icon class="collection__tags__item__close" name="close-outline"></ion-icon>
                  </a>

                  <a href="#" class="collection__tags__item">
                        <span class="collection__tags__item__content">MODEL: F70 CARBON</span>
                        <ion-icon class="collection__tags__item__close" name="close-outline"></ion-icon>
                  </a>
            </div>

            <!-- <div class="collection__content-empty-product">
                  <div class="empty-product-text">No products</div>
                  <a href="" class="empty-product-link">필터 초기화</a>
            </div> -->

            <div class="collection__content-product" id="collection__content-product-wapper">
            </div>

            <div id="card__product-loading-wapper" class="under-active">
                  <div class="card__product-loading">
                        <?php for ($i = 0; $i < 8; $i++) : ?>
                              <div class="card-product">
                                    <div class="card-product__skeleton card-product__img"></div>
                                    <div class="card-product__skeleton card-product__title"></div>
                                    <div class="card-product__skeleton card-product__description"></div>
                              </div>
                        <?php endfor; ?>
                  </div>
            </div>

            <div class="collection__content-pagination">
                  <div class="collection__content-pagination-action">
                        <a href="" class="collection__content-pagination-action-icon">
                              <div class="collection__content-pagination-action-icon-child">
                                    <ion-icon name="arrow-back-outline"></ion-icon>
                              </div>
                        </a>

                        <a href="" class="collection__content-pagination-action-icon">
                              <div class="collection__content-pagination-action-icon-child">
                                    <ion-icon name="arrow-forward-outline"></ion-icon>
                              </div>
                        </a>
                  </div>

                  <div class="collection__content-pagination-number-list">
                        <a href=""
                              class="collection__content-pagination-number collection__content-pagination-number--active">1</a>
                        <a href="" class="collection__content-pagination-number">2</a>
                        <a href="" class="collection__content-pagination-number">3</a>
                  </div>
            </div>
      </div>
</div>

<?php get_footer();
