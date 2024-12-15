// Import APIHandler
import APIHandler from "../apiHandler.js";
import {BASE_URL} from "../variable.js";
import {formatVND} from "../common.js";

$(document).ready(function () {
    //--------------------------------------PRODUCT LIST----------------------------------
    // các dữ liệu param
    var categories = '';
    var minPrice = 0;
    var maxPrice = 0;
    var selectedAttributes = {};
    var page = 1
    var currentUrl = window.location.origin + window.location.pathname;
    var currentParams = new URLSearchParams(window.location.search); // Phân tích query string hiện tại
    $("#card__product-loading-wapper").removeClass("under-active");

    $('#categories-select').on('change', function () {
        var category = $(this).val() ?? '';

        if (category && category != '') {
            window.location.href = category;
        }
    });

    $('input[name="filter.v.price.gte"], input[name="filter.v.price.lte"]').on('change', function () {
        // Lấy giá trị của input MIN và MAX
        minPrice = parseFloat($('input[name="filter.v.price.gte"]').val()) || 0;
        maxPrice = parseFloat($('input[name="filter.v.price.lte"]').val()) || 0;

        // Kiểm tra nếu Min Price lớn hơn Max Price
        if (minPrice > maxPrice) {
            // Hiển thị cảnh báo
            alert('Min Price không được lớn hơn Max Price. Đặt lại giá trị về 0.');

            // Đặt lại giá trị về 0
            $('input[name="filter.v.price.gte"]').val(0);
            $('input[name="filter.v.price.lte"]').val(0);
            minPrice = maxPrice = 0;
        } else {
            minPrice = minPrice <= 0 ? 1 : minPrice;
            createUrl();
        }
    });

    // Xử lý khi checkbox được thay đổi
    $('.attribute-checkbox').on('change', function () {
        const groupName = $(this).attr('name'); // Nhóm thuộc tính (ví dụ: mau-sac, size)
        const value = $(this).val();            // Giá trị của thuộc tính (ví dụ: do, l)
        const isChecked = $(this).is(':checked'); // Trạng thái checkbox

        // Nếu nhóm chưa tồn tại, khởi tạo là một mảng
        if (!selectedAttributes[groupName]) {
            selectedAttributes[groupName] = [];
        }

        if (isChecked) {
            // Nếu được chọn, thêm giá trị vào nhóm
            if (!selectedAttributes[groupName].includes(value)) {
                selectedAttributes[groupName].push(value);
            }
        } else {
            // Nếu bỏ chọn, xóa giá trị khỏi nhóm
            selectedAttributes[groupName] = selectedAttributes[groupName].filter(attr => attr !== value);
        }
        createUrl()
    });

    function createUrl() {
        // 1. Lấy URL hiện tại và phân tích các tham số query


        // 2. Tạo danh sách các tham số (params)
        var params = new URLSearchParams();

        // Thêm tham số `page`
        params.set('page', page);

        // Thêm `minPrice` và `maxPrice` nếu có giá trị
        if (minPrice > 0) {
            params.set('minPrice', minPrice);
        }
        if (maxPrice > 0) {
            params.set('maxPrice', maxPrice);
        }

        // Thêm các thuộc tính đã chọn (selectedAttributes)
        for (var key in selectedAttributes) {
            if (selectedAttributes[key]) {
                params.set(key, selectedAttributes[key]);
            }
        }

        // 3. Cập nhật lại các tham số trong URL hiện tại với các tham số mới
        currentParams.forEach((value, key) => {
            // Nếu tham số không có trong `params`, giữ nguyên giá trị cũ
            if (!params.has(key)) {
                params.set(key, value);
            }
        });

        // 4. Ghép URL với query string đã cập nhật
        var finalUrl = currentUrl + '?' + params.toString();

        // 5. Cập nhật URL mà không tải lại trang
        history.pushState(null, '', finalUrl);
        callApiProductList(params)
        return finalUrl;
    }

    function callApiProductList(params) {
        APIHandler.get(`/wp-json/custom-api/v1/products-filter?mainCategory=${mainCategory}&${params}`)
            .done(function (response) {
                $("#collection__content-product-wapper").html("");
                if (response.products && response.products.length > 0) {
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
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Không tìm được sản phẩm.",
                        showConfirmButton: false,
                        timer: 3000,
                    }).then(()=>{
                        $("#collection__content-product-wapper").html("Không tìm được sản phẩm");
                    });
                }
            })
            .fail(function (err) {

                Swal.fire({
                    icon: "error",
                    title: err.responseJSON.message ?? "Không tìm được sản phẩm.",
                    showConfirmButton: false,
                    timer: 3000,
                }).then(()=>{
                    $("#collection__content-product-wapper").html("Không tìm được sản phẩm");
                });
            });








    }
});