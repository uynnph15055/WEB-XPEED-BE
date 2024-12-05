// Import APIHandler
import APIHandler from "../apiHandler.js";
import {BASE_URL} from "../variable.js";
import {formatVND} from "../common.js";

$(document).ready(function () {
    //--------------------------------------PRODUCT LIST----------------------------------

    $("#card__product-loading-wapper").removeClass("under-active");


    console.log('attributes', attributes)
    // các dữ liệu param
    var categories = '';
    var minPrice = 0;
    var maxPrice = 0;
    var selectedAttributes = {};
    var page = 1


    $('input[name="category"]').change(function () {
        // Lấy tất cả giá trị của các checkbox được chọn
        var selectedCategories = $('input[name="category"]:checked').map(function () {
            return this.value;
        }).get();

        categories = selectedCategories.join(',');
        console.log('Selected categories:', categories);
        createUrl();
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
        }else{
            createUrl();
        }
    });

    $('.attributes input[type="checkbox"]').on('change', function () {
        // Duyệt qua tất cả các checkbox đã chọn trong phần tử có class attributes
        $('.attributes input[type="checkbox"]:checked').each(function () {
            var groupName = $(this).attr('name'); // Lấy tên nhóm (mau-sac, size)
            var value = $(this).val(); // Lấy giá trị (slug) của checkbox được chọn

            // Nếu nhóm chưa tồn tại, khởi tạo là một mảng (nếu chưa có)
            if (!selectedAttributes[groupName]) {
                selectedAttributes[groupName] = [];
            }

            // Kiểm tra nếu selectedAttributes[groupName] không phải là mảng, khởi tạo lại
            if (!Array.isArray(selectedAttributes[groupName])) {
                selectedAttributes[groupName] = [];
            }

            // Thêm giá trị vào nhóm tương ứng
            selectedAttributes[groupName].push(value);
        });

        // Chuyển mảng các giá trị thành chuỗi, phân tách bằng dấu phẩy
        for (var key in selectedAttributes) {
            selectedAttributes[key] = selectedAttributes[key].join(',');
        }

        // Tạo URL với các thuộc tính đã chọn
        createUrl();

        // Hiển thị kết quả
        console.log('Thuộc tính được chọn:', selectedAttributes);
    });

    function createUrl() {
        // 1. Lấy URL hiện tại và phân tích các tham số query
        var currentUrl = window.location.origin + window.location.pathname;
        var currentParams = new URLSearchParams(window.location.search); // Phân tích query string hiện tại

        // 2. Tạo danh sách các tham số (params)
        var params = new URLSearchParams();

        // Thêm tham số `page`
        params.set('page', page);

        // Thêm `categories` nếu có giá trị
        if (categories) {
            params.set('categories', categories);
        }

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
        console.log()

        // 5. Cập nhật URL mà không tải lại trang
        history.pushState(null, '', finalUrl);
        callApiProductList(params.toString())
        return finalUrl;
    }

    function callApiProductList(params){
        $.ajax({
            url: `${BASE_URL}/wp-json/custom-api/v1/products?mainCategory=${mainCategory}&${params}`,
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
    }
});