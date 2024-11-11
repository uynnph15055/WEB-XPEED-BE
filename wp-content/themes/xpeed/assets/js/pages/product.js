// Import APIHandler
import APIHandler from "../apiHandler.js";
import {BASE_URL} from "../variable.js";
import {formatVND} from "../common.js";

$(document).ready(function () {
    var productType = $(".product-detail__title").data("product-type"); //simple || variable

    if (productType == 'variable') {
        var selectedVariation = [];
        // Bắt sự kiện khi người dùng thay đổi thuộc tính sản phẩm (size, color, etc.)
        $(".product-detail__size-option").on("change", function () {
            const product = $(this).data("attribute");
            loadProductPrice(product);
        });

        setupQuantityControls(".product-detail__quantity-controls");

        // Hàm để gọi API và lấy giá sản phẩm
        function loadProductPrice(product) {
            // Lấy giá trị size đã chọn
            const attributeKey = $(".product-detail__size-options").data("attribute-key");
            selectedVariation = product;
            // Cập nhật giá sản phẩm lên giao diện
            $(".product-detail__price").text(
                `${(selectedVariation.display_price ?? 0)
                    .toLocaleString("vi-VN")
                    .replace(/\./g, ",")} đ`
            );
        }

        function setupQuantityControls(containerSelector) {
            var container = $(containerSelector);

            // Xử lý khi nhấn nút giảm
            container
                .find(".product-detail__quantity-decrease")
                .on("click", function (e) {
                    e.preventDefault();

                    // Kiểm tra nếu selectedVariation hợp lệ và có max_qty và min_qty
                    if (!selectedVariation || !selectedVariation.max_qty || !selectedVariation.min_qty) {
                        console.warn("selectedVariation không hợp lệ.");
                        return;
                    }

                    var input = $(this).siblings(".product-detail__quantity-input");
                    var currentValue = parseInt(input.val());

                    // Kiểm tra giới hạn số lượng tối thiểu
                    if (currentValue > 1) {
                        input.val(currentValue - 1);
                    }
                });

            // Xử lý khi nhấn nút tăng
            container
                .find(".product-detail__quantity-increase")
                .on("click", function (e) {
                    e.preventDefault();

                    // Kiểm tra nếu selectedVariation hợp lệ và có max_qty và min_qty
                    if (!selectedVariation || !selectedVariation.max_qty || !selectedVariation.min_qty) {
                        console.warn("selectedVariation không hợp lệ.");
                        return;
                    }

                    var input = $(this).siblings(".product-detail__quantity-input");
                    var currentValue = parseInt(input.val());

                    // Kiểm tra giới hạn số lượng tối đa
                    if (currentValue < selectedVariation.max_qty) {
                        input.val(currentValue + 1);
                    }
                });

            // Đảm bảo rằng giá trị không nhỏ hơn min_qty khi người dùng nhập thủ công
            container.find(".product-detail__quantity-input").on("change", function () {
                // Kiểm tra nếu selectedVariation hợp lệ và có max_qty và min_qty
                if (!selectedVariation || !selectedVariation.max_qty || !selectedVariation.min_qty) {
                    console.warn("selectedVariation không hợp lệ.");
                    return;
                }

                var value = parseInt($(this).val());

                // Giới hạn trong khoảng từ min_qty đến max_qty
                if (isNaN(value) || value < selectedVariation.min_qty) {
                    $(this).val(selectedVariation.min_qty);
                } else if (value > selectedVariation.max_qty) {
                    $(this).val(selectedVariation.max_qty);
                }
            });
        }

        $(".product-detail__add-to-cart").on("click", function () {
            // Lấy ID sản phẩm
            const productId = $(".product-detail__size").data("product-id");

            // Lấy số lượng
            const quantity = parseInt($(".product-detail__quantity-input").val());

            // Lấy thuộc tính đã chọn (ví dụ: size)
            const selectedAttributes = {};
            $(".product-detail__size-options").each(function () {
                const attributeKey = $(this).data("attribute-key");
                const selectedValue = $(this).find("input:checked").val();
                if (selectedValue) {
                    selectedAttributes[attributeKey] = selectedValue;
                }
            });

            // Kiểm tra nếu không có thuộc tính nào được chọn
            if (Object.keys(selectedAttributes).length === 0) {
                Swal.fire({
                    icon: "error",
                    title: "Vui lòng chọn sản phẩm!",
                    showConfirmButton: false,
                    timer: 3000,
                });
                return;
            }

            // Tạo đối tượng dữ liệu để gửi tới server
            const data = [
                {
                    productId: selectedVariation.variation_id,
                    quantity: quantity,
                    variation: selectedAttributes,
                }
            ];
            // Gọi API để thêm sản phẩm vào giỏ hàng
            APIHandler.post("/wp-json/custom-api/v1/add-to-cart", data)
                .done(function (response) {
                    Swal.fire({
                        icon: "success",
                        title: "Sản phẩm đã được thêm vào giỏ hàng",
                        showConfirmButton: false,
                        timer: 1500,
                    }).then(()=>{
                        $("#product-count").text(Object.keys(response.data.session_cart).length);
                    });
                })
                .fail(function (err) {

                    Swal.fire({
                        icon: "error",
                        title: err.responseJSON.message ?? "Không thể thêm sản phẩm vào giỏ hàng. Vui lòng thử lại sau.",
                        showConfirmButton: false,
                        timer: 3000,
                    });
                });
        });
    } else if (productType == 'simple') {

        var dataProductSimple = $(".product-detail__title").data("product");

        setupQuantityControls(".product-detail__quantity-controls");

        $(".product-detail__add-to-cart").on("click", function () {
            // Lấy ID sản phẩm
            const productId = dataProductSimple.id;

            // Lấy số lượng
            const quantity = parseInt($(".product-detail__quantity-input").val());

            // Kiểm tra số lượng tồn kho
            if (quantity > dataProductSimple.stock_quantity) {
                Swal.fire({
                    icon: "error",
                    title: "Số lượng yêu cầu vượt quá tồn kho!",
                    showConfirmButton: false,
                    timer: 3000,
                });
                return;
            }

            // Tạo đối tượng dữ liệu để gửi tới server
            const data = [
                {
                    productId: productId,
                    quantity: quantity,
                }
            ];

            // Gọi API để thêm sản phẩm vào giỏ hàng
            APIHandler.post("/wp-json/custom-api/v1/add-to-cart", data)
                .done(function (response) {
                    Swal.fire({
                        icon: "success",
                        title: "Sản phẩm đã được thêm vào giỏ hàng",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                })
                .fail(function (err) {
                    Swal.fire({
                        icon: "error",
                        title: err.responseJSON.message ?? "Không thể thêm sản phẩm vào giỏ hàng. Vui lòng thử lại sau.",
                        showConfirmButton: false,
                        timer: 3000,
                    });
                });
        });

    }

    function setupQuantityControls(containerSelector) {
        var container = $(containerSelector);

        container.find(".product-detail__quantity-decrease").on("click", function (e) {
            e.preventDefault();

            var input = $(this).siblings(".product-detail__quantity-input");
            var currentValue = parseInt(input.val());

            // Kiểm tra giới hạn số lượng tối thiểu
            if (currentValue > 1) {
                input.val(currentValue - 1);
            }
        });

        container.find(".product-detail__quantity-increase").on("click", function (e) {
            e.preventDefault();

            var input = $(this).siblings(".product-detail__quantity-input");
            var currentValue = parseInt(input.val());

            // Kiểm tra số lượng tối đa dựa trên tồn kho của sản phẩm đơn giản
            if (productType == 'simple' && currentValue < dataProductSimple.stock_quantity) {
                input.val(currentValue + 1);
            } else if (productType == 'variable' && selectedVariation && currentValue < selectedVariation.max_qty) {
                input.val(currentValue + 1);
            }
        });

        container.find(".product-detail__quantity-input").on("change", function () {
            var value = parseInt($(this).val());

            if (productType == 'simple') {
                // Giới hạn trong khoảng từ 1 đến số lượng tồn kho
                if (isNaN(value) || value < 1) {
                    $(this).val(1);
                } else if (value > dataProductSimple.stock_quantity) {
                    $(this).val(dataProductSimple.stock_quantity);
                }
            } else if (productType == 'variable' && selectedVariation) {
                // Giới hạn trong khoảng từ min_qty đến max_qty
                if (isNaN(value) || value < selectedVariation.min_qty) {
                    $(this).val(selectedVariation.min_qty);
                } else if (value > selectedVariation.max_qty) {
                    $(this).val(selectedVariation.max_qty);
                }
            }
        });
    }

    //--------------------------------------PRODUCT LIST----------------------------------
    let currentUrl = window.location.href;

    $("#card__product-loading-wapper").removeClass("under-active");

    $.ajax({
        url: `${BASE_URL}/wp-json/custom-api/v1/products`,
        method: "GET",
        success: function (response) {
            if (response.products) {
                const dataProduct = response.products;
                dataProduct.forEach(function (product) {
                    var productHtml = `
                <div class="shopify__product">
                  <a href="${
                        product.url
                    }" class="shopify__product-image-wrapper">
                    <span class="shopify__product-badge shopify__product-badge--new">${
                        product.first_tag
                    }</span>
                    <img src="${product.image}" alt="${
                        product.title
                    }" class="shopify__product-image" />
                  </a>
          
                  <div class="shopify__product-details">
                    <h3 class="shopify__product-title">
                      <a href="${product.url}" class="shopify__product-link">${
                        product.title
                    }</a>
                    </h3>
          
                    <p class="shopify__product-cate">${
                        product.first_category
                    }</p>
          
                    <span class="shopify__product-price">${formatVND(
                        product.price
                    )}</span>
                  </div>
                </div>
              `;

                    $("#collection__content-product-wapper").append(productHtml);
                    $("#card__product-loading-wapper").addClass("under-active");
                });
            }
        },
    });

    $.ajax({
        url: `${BASE_URL}/wp-json/custom-api/v1/categories`,
        method: "GET",
        success: function (response) {
            if (response.categories) {
                const categories = response.categories;
                categories.forEach(function (category) {
                    var categoryHtml = `
              <label for="${category.slug}" class="custom-select__option">
                  <input type="checkbox" name="category" id="${category.slug}" value="${category.slug}" />
                  <span class="custom-select__option-label">${category.name}</span>
              </label>
              `;

                    $("#filter-category").append(categoryHtml);
                });
            }
        },
    });

    $.ajax({
        url: `${BASE_URL}/wp-json/custom-api/v1/attributes`,
        method: "GET",
        success: function (response) {
            if (response.attributes) {
                const attributes = response.attributes;
                console.log(attributes);

                attributes.forEach(function (attribute) {
                    var attributeHtml = `
              <label for="${attribute.slug}" class="custom-select__option">
                  <input type="checkbox" name="category" id="${attribute.slug}" value="${attribute.slug}" />
                  <span class="custom-select__option-label">${attribute.name}</span>
              </label>
              `;

                    $("#filter-attribute").append(attributeHtml);
                });
            }
        },
    });
});
