<?php

use app\Controllers\BlogController;
use app\Controllers\ProductController;

$product = new ProductController();
$blog = new BlogController();

$products = $product->getNewProducts();
$blogs = $blog->getBlogMoreView();

?>
<div class="blogs__sidebar">
      <form class="blogs__sidebar-form" action="">
            <input class="blogs__sidebar-input" type="text" placeholder="Tìm kiếm..." />
            <button class="blogs__sidebar-btn">
                  <ion-icon name="search-outline"></ion-icon>
            </button>
      </form>
      <div class="blogs__popular">
            <h2 class="blogs__sidebar-title">Bài viết nổi bật</h2>
            <div class="blogs__popular-list">
                  <?php foreach ($blogs as $blog) : ?>
                  <div class="blogs__popular-item">
                        <div class="blogs__popular-item-img-wrap">
                              <a class="blogs__popular-item-link" href=<?= $blog['url'] ?>>
                                    <img class="blogs__popular-item__img" src="<?= $blog['image'] ?>"
                                          alt="<?= $blog['title'] ?>" />
                              </a>
                        </div>
                        <div class="">
                              <h3 class="blogs__popular-item__title">
                                    <a class="blogs__popular-item-link"
                                          href="<?= $blog['url'] ?>"><?= $blog['title'] ?></a>
                              </h3>
                              <p class="blogs__popular-item__desc">
                                    <?= $blog['excerpt'] ?>
                              </p>
                        </div>
                  </div>
                  <?php endforeach; ?>
            </div>
      </div>

      <div class="blogs__popular-products">
            <h2 class="blogs__sidebar-title">Sản phẩm nổi bật</h2>
            <div class="blogs__popular-products-list">
                  <?php foreach ($products as $product) : ?>
                  <div class="blogs__popular-products-item">
                        <div class="blogs__popular-products-item-img-wrap">
                              <a class="blogs__popular-products-item-link" href="<?= $product['url'] ?>">
                                    <img class="blogs__popular-products-item__img" src="<?= $product['image'] ?>"
                                          alt="<?= $product['title'] ?>" />
                                    <span
                                          class="blogs__popular-products--badge blogs__popular-products--badge-new">NEW</span>
                              </a>
                        </div>
                        <div class="">
                              <h3 class="blogs__popular-products-item__title">
                                    <a class="blogs__popular-products-item-link"
                                          href="<?= $product['url'] ?>"><?= $product['title'] ?></a>
                              </h3>
                              <p class="blogs__popular-products-item__desc-price">
                                    <?= $product['price'] ?>
                              </p>
                              <p class="blogs__popular-products-item__desc"><?= $product['first_category'] ?></p>
                        </div>
                  </div>
                  <?php endforeach; ?>
            </div>
      </div>
</div>