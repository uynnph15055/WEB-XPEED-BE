<?php

/**
 * Template Name: Branch store
 * Author: Phuongdd
 */
get_header();

use app\Controllers\BranchStoreController;

$branchStoreController = new BranchStoreController;
?>
    <div class="address__header">
        <img
                class="address__header-img"
                src="https://rt6moto.co.kr/cdn/shop/files/MAIN-full_face.jpg"
                alt=""
        />
        <h1 id="address-title" class="address__heading">Đại lý - địa chỉ</h1>
    </div>

    <main class="address-wrapper">
        <div class="address-wrapper__content">
            <div class="address-list">
                <?php foreach ($branchStoreController->getAll() as $branchStore) { ?>
                    <div class="address-item">
                        <a href="<?php echo $branchStore['link'] ?>" target="_blank" class="address-item__img-wrap">
                            <img
                                    class="address-item__img"
                                    src="<?php echo $branchStore['image'] ?>"
                                    alt=""
                            />
                            <div class="address-item__img-overlay">
                                <ion-icon
                                        class="address-item__img-overlay-icon"
                                        name="location"

                                ></ion-icon>
                            </div>
                        </a>
                        <div class="address-item__description">
                            <h3 class="address-item__description-title">
                                <a href="<?php echo $branchStore['link'] ?>" target="_blank"
                                   class="address-item__description-title-link">
                                    <?php echo $branchStore['title'] ?>
                                </a>
                            </h3>
                            <p class="address-item__description-subtitle">
                                <?php echo $branchStore['content'] ?>
                            </p>
                        </div>
                    </div>
                <?php } ?>
            </div>
        </div>
    </main>


<?php
get_footer();
?>