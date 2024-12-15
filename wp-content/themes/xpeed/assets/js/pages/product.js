// Import APIHandler
import APIHandler from "../apiHandler.js";
import {BASE_URL} from "../variable.js";
import {formatVND} from "../common.js";

$(document).ready(function () {

    const language = current_locale != 'vi' ? 'en' : '';
//--------------------------------------PRODUCT IMAGE----------------------------------
    $(".thumbnail-item__img").on("click", function () {
        const src = $(this).attr("src");
        changeMainImage(src);
        $(this).parent().addClass("active-thumbnail");
    });

    toggleQuantityControls();
    let selectedAttributes = {}; // Chuyển thành object
    let selectedProduct = {};

    // Hàm chuyển text thành không dấu
    function toSlug(input) {
        return input
            .toLowerCase() // Chuyển thành chữ thường
            .normalize('NFD') // Chuẩn hóa chuỗi để tách dấu
            .replace(/[\u0300-\u036f]/g, '') // Loại bỏ dấu
            .replace(/đ/g, 'd') // Thay 'đ' bằng 'd'
            .replace(/[^a-z0-9\s-]/g, '') // Loại bỏ ký tự đặc biệt
            .replace(/\s+/g, '-') // Thay khoảng trắng bằng dấu gạch ngang
            .replace(/-+/g, '-') // Loại bỏ gạch ngang thừa
            .trim(); // Xóa khoảng trắng ở đầu và cuối
    }

    $('.product-detail__size-options input[type="radio"]').on('change', function () {
        const attributeKey = $(this).closest('.product-detail__size-options').data('attribute-key');
        const selectedValue = $(this).val();
        // Chuyển attributeKey thành slug và thêm tiền tố
        const slugAttributeKey = "pa_" + toSlug(attributeKey);
        selectedAttributes[slugAttributeKey] = toSlug(selectedValue);


        if (Object.keys(selectedAttributes).length === Object.keys(productData.attributes).length) {
            selectedProduct = productData.variations.find(product => {
                return Object.keys(selectedAttributes).every(key => {

                    return selectedAttributes[key]+'-'+language === product.attributes["attribute_" + key];
                });
            });
            if (selectedProduct) {

                $(".product-detail__quantity-inventory").text((selectedProduct.max_qty ?? 0) + ' sản phẩm có sẵn');
                $(".product-detail__quantity-input").val(0);
                if (selectedProduct.max_qty >= 1) {
                    $(".product-detail__quantity-input").val(1);
                }
                setPrice(selectedProduct);
                toggleQuantityControls(false);
                changeMainImage(selectedProduct.image.src);
            }
        } else {
            toggleQuantityControls(true);
        }
    });

    function setPrice(selectedProduct) {
        $(".product-detail__price").text(
            `${(selectedProduct.display_price ?? 0)
                .toLocaleString("vi-VN")
                .replace(/\./g, ",")} đ`
        );
    }

    function changeMainImage(src) {
        const $mainImage = $("#mainImage");
        // Kiểm tra và thay đổi ảnh chính
        if ($mainImage.attr("src") !== src) {
            $mainImage.attr("src", src);
        }

        // Xóa class 'active-thumbnail' khỏi các thumbnail khác
        $(".thumbnail-item__wrapper").removeClass("active-thumbnail");
    }

    //--------------------------------------Tăng giảm số lượng sản phẩm----------------------------------


    $('.product-detail__quantity-controls').on('click', '.product-detail__quantity-decrease, .product-detail__quantity-increase', function (e) {
        e.preventDefault();

        // Tìm input trong cùng container
        const $input = $(this).closest('.product-detail__quantity-controls').find('.product-detail__quantity-input');
        let currentValue = parseInt($input.val(), 10) || 1; // Lấy giá trị hiện tại, mặc định là 1 nếu không hợp lệ
        const minValue = parseInt($input.attr('min'), 10) || 1; // Giá trị min
        const maxValue = selectedProduct.max_qty; // Đặt giá trị tối đa
        if ($(this).hasClass('product-detail__quantity-increase')) {
            // Tăng giá trị nếu nhỏ hơn max
            if (currentValue < maxValue) {
                currentValue++;
            }
        } else if ($(this).hasClass('product-detail__quantity-decrease')) {
            // Giảm giá trị nếu lớn hơn min
            if (currentValue > minValue) {
                currentValue--;
            }
        }

        // Cập nhật giá trị vào input
        $input.val(currentValue);
    });

    $('.product-detail__quantity-input').on('change', function () {
        const minValue = parseInt($(this).attr('min'), 10) || 1; // Giá trị min
        const maxValue = selectedProduct.max_qty; // Giá trị tối đa
        let currentValue = parseInt($(this).val(), 10) || minValue; // Giá trị hiện tại hoặc mặc định là min nếu không hợp lệ

        // Ràng buộc giá trị trong khoảng min và max
        if (currentValue < minValue) {
            currentValue = minValue;
        } else if (currentValue > maxValue) {
            currentValue = maxValue;
        }

        $(this).val(currentValue); // Cập nhật giá trị
    });

    function toggleQuantityControls(isHidden = true, selector = '.product-detail__quantity') {
        $(selector).each(function () {
            const $section = $(this);

            // Hiển thị hoặc ẩn toàn bộ đoạn
            if (isHidden) {
                $section.hide(); // Ẩn đoạn
            } else {
                $section.show(); // Hiển thị đoạn
            }
        });
    }


    //--------------------------------------ADD TO CART----------------------------------

    $(".product-detail__add-to-cart").on("click", function () {
        if (Object.keys(selectedProduct).length === 0) {
            Swal.fire({
                icon: "error",
                title: "Vui lòng chọn sản phẩm!",
                showConfirmButton: false,
                timer: 3000,
            });
            return false;
        } else {
            const userId = parseInt($(this).data('userid'), 10);
            if (userId < 1) {
                Swal.fire({
                    icon: "error",
                    title: "Vui đăng nhập trước khi mua!",
                    showConfirmButton: false,
                    timer: 3000,
                });
                return;
            }

            // Lấy ID sản phẩm
            const productId = selectedProduct.variation_id;

            // Lấy số lượng
            const quantity = parseInt($(".product-detail__quantity-input").val());

            // Tạo đối tượng dữ liệu để gửi tới server
            const data = [
                {
                    productId: productId,
                    quantity: quantity,
                    variation: selectedAttributes,
                },
            ];
            // Gọi API để thêm sản phẩm vào giỏ hàng
            APIHandler.post("/wp-json/custom-api/v1/add-to-cart", data)
                .done(function (response) {
                    Swal.fire({
                        icon: "success",
                        title: "Sản phẩm đã được thêm vào giỏ hàng",
                        showConfirmButton: false,
                        timer: 1500,
                    }).then(() => {
                        $("#icon-cart").append(`<div class="header_main-cart-count" id="product-count">${Object.keys(response.data.session_cart).length}</div>`);
                    });
                })
                .fail(function (err) {
                    Swal.fire({
                        icon: "error",
                        title:
                            err.responseJSON.message ??
                            "Không thể thêm sản phẩm vào giỏ hàng. Vui lòng thử lại sau.",
                        showConfirmButton: false,
                        timer: 3000,
                    });
                });
        }
    });

    $(".product-detail__buy-now").on("click", function () {
        if (Object.keys(selectedProduct).length === 0) {
            Swal.fire({
                icon: "error",
                title: "Vui lòng chọn sản phẩm!",
                showConfirmButton: false,
                timer: 3000,
            });
            return;
        } else {

            const userId = parseInt($(this).data('userid'), 10);
            if (userId < 1) {
                Swal.fire({
                    icon: "error",
                    title: "Vui đăng nhập trước khi mua!",
                    showConfirmButton: false,
                    timer: 3000,
                });
                return;
            }

            // Lấy ID sản phẩm
            const productId = selectedProduct.variation_id;

            // Lấy số lượng
            const quantity = parseInt($(".product-detail__quantity-input").val());

            // Lấy thuộc tính đã chọn (ví dụ: size)
            const data = [
                {
                    productId: productId,
                    quantity: quantity,
                    variation: selectedAttributes,
                },
            ];

            // Gọi API để thêm sản phẩm vào giỏ hàng
            APIHandler.post("/wp-json/custom-api/v1/add-order?userId=" + userId, data)
                .done(function (response) {
                    if (response.data.paymentUrl) {
                        window.location.href = response.data.paymentUrl;
                    }
                })
                .fail(function (err) {

                    Swal.fire({
                        icon: "error",
                        title: err.responseJSON.message ?? "Không thể mua sản phẩm. Vui lòng thử lại sau.",
                        showConfirmButton: false,
                        timer: 3000,
                    });
                });
        }
    });

    //--------------------------------------PRODUCT LIST----------------------------------

    $("#card__product-loading-wapper").removeClass("under-active");

    // $.ajax({
    //     url: `${BASE_URL}/wp-json/custom-api/v1/products`,
    //     method: "GET",
    //     success: function (response) {
    //         if (response.products) {
    //             const dataProduct = response.products;
    //             dataProduct.forEach(function (product) {
    //                 var productHtml = `
    //             <div class="shopify__product">
    //               <a href="${
    //                     product.url
    //                 }" class="shopify__product-image-wrapper">
    //                 <span class="shopify__product-badge shopify__product-badge--new">${
    //                     product.first_tag
    //                 }</span>
    //                 <img src="${product.image}" alt="${
    //                     product.title
    //                 }" class="shopify__product-image" />
    //               </a>
    //
    //               <div class="shopify__product-details">
    //                 <h3 class="shopify__product-title">
    //                   <a href="${product.url}" class="shopify__product-link">${
    //                     product.title
    //                 }</a>
    //                 </h3>
    //
    //                 <p class="shopify__product-cate">${
    //                     product.first_category
    //                 }</p>
    //
    //                 <span class="shopify__product-price">${formatVND(
    //                     product.price
    //                 )}</span>
    //               </div>
    //             </div>
    //           `;
    //
    //                 $("#collection__content-product-wapper").append(productHtml);
    //                 $("#card__product-loading-wapper").addClass("under-active");
    //             });
    //         }
    //     },
    // });

    // $.ajax({
    //     url: `${BASE_URL}/wp-json/custom-api/v1/categories`,
    //     method: "GET",
    //     success: function (response) {
    //         if (response.categories) {
    //             const categories = response.categories;
    //             categories.forEach(function (category) {
    //                 var categoryHtml = `
    //           <label for="${category.slug}" class="custom-select__option">
    //               <input type="checkbox" name="category" id="${category.slug}" value="${category.slug}" />
    //               <span class="custom-select__option-label">${category.name}</span>
    //           </label>
    //           `;
    //
    //                 $("#filter-category").append(categoryHtml);
    //             });
    //         }
    //     },
    // });

//     $.ajax({
//         url: `${BASE_URL}/wp-json/custom-api/v1/attributes`,
//         method: "GET",
//         success: function (response) {
//             if (response.attributes) {
//                 const attributes = response.attributes;
//
//
//                 attributes.forEach(function (attribute) {
//                     var attributeHtml = `
//               <label for="${attribute.slug}" class="custom-select__option">
//                   <input type="checkbox" name="category" id="${attribute.slug}" value="${attribute.slug}" />
//                   <span class="custom-select__option-label">${attribute.name}</span>
//               </label>
//               `;
//
//                     $("#filter-attribute").append(attributeHtml);
//                 });
//             }
//         },
//     });
});