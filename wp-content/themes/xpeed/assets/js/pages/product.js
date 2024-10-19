// Import APIHandler
import APIHandler from '../apiHandler.js';

$(document).ready(function () {
    var selectedVariation = [];
    // Bắt sự kiện khi người dùng thay đổi thuộc tính sản phẩm (size, color, etc.)
    $('.product-detail__size-option').on('change', function () {
        loadProductPrice();
    });
    setupQuantityControls('.product-detail__quantity-controls');

    // Hàm để gọi API và lấy giá sản phẩm
    function loadProductPrice() {
        // Lấy giá trị size đã chọn
        const attributeKey = $('.product-detail__size-options').data('attribute-key');
        const selectedSize = $('input[name="' + attributeKey + '"]:checked').val();

        // Kiểm tra nếu chưa chọn đủ các thuộc tính (size hoặc color)
        if (!selectedSize) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Vui lòng chọn đầy đủ các thuộc tính !",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
            return false;
        }

        // Tạo đối tượng dữ liệu để gửi tới API
        const data = {
            product_id: $('.product-detail__size').data('product-id'), // Lấy ID sản phẩm từ thuộc tính data-product-id trong HTML
            attributes: {
                "size": selectedSize
            },
            attributeKey: attributeKey
        };

        // Gọi API để lấy giá sản phẩm
        APIHandler.post(`/wp-json/custom-api/v1/get-product-price`, data)
            .done(function (response) {
                if (response.data) {
                    selectedVariation = response.data;
                    // Cập nhật giá sản phẩm lên giao diện
                    $('.product-detail__price').text(`${(response.data.display_price ?? 0).toLocaleString('vi-VN').replace(/\./g, ',')} đ`);

                } else {
                    // Hiển thị thông báo nếu không có giá
                    $('.product-detail__price').text('Không tìm thấy giá cho sản phẩm này.');
                }
            })
            .fail(function () {
                // Xử lý lỗi kết nối
                $('.product-detail__price').text('Có lỗi xảy ra. Vui lòng thử lại sau.');
            });
    }

    function setupQuantityControls(containerSelector) {
        var container = $(containerSelector);

        // Xử lý khi nhấn nút giảm
        container.find('.product-detail__quantity-decrease').on('click', function (e) {
            e.preventDefault();
            var input = $(this).siblings('.product-detail__quantity-input');
            var currentValue = parseInt(input.val());

            if (currentValue > 1) {
                input.val(currentValue - 1);
            }
        });

        // Xử lý khi nhấn nút tăng
        container.find('.product-detail__quantity-increase').on('click', function (e) {
            e.preventDefault();
            var input = $(this).siblings('.product-detail__quantity-input');
            var currentValue = parseInt(input.val());

            input.val(currentValue + 1);
        });

        // Đảm bảo rằng giá trị không nhỏ hơn 1 khi người dùng nhập thủ công
        container.find('.product-detail__quantity-input').on('change', function () {
            var value = parseInt($(this).val());
            if (isNaN(value) || value < 1) {
                $(this).val(1);
            }
        });
    }

    $('.product-detail__add-to-cart').on('click', function () {
        // Lấy ID sản phẩm
        const productId = $('.product-detail__size').data('product-id');

        // Lấy số lượng
        const quantity = parseInt($('.product-detail__quantity-input').val());

        // Lấy thuộc tính đã chọn (ví dụ: size)
        const selectedAttributes = {};
        $('.product-detail__size-options').each(function () {
            const attributeKey = $(this).data('attribute-key');
            const selectedValue = $(this).find('input:checked').val();
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
                timer: 3000
            });
            return;
        }

        // Tạo đối tượng dữ liệu để gửi tới server
        const data= ["data"][
            {
                productId: productId,
                quantity: quantity,
                variation: selectedAttributes,
            }
        ];

        // Gọi API để thêm sản phẩm vào giỏ hàng
        APIHandler.post('/wp-json/custom-api/v1/add-to-cart', data)
            .done(function (response) {
                Swal.fire({
                    icon: "success",
                    title: "Sản phẩm đã được thêm vào giỏ hàng",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .fail(function () {
                Swal.fire({
                    icon: "error",
                    title: "Không thể thêm sản phẩm vào giỏ hàng. Vui lòng thử lại sau.",
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    });
});

