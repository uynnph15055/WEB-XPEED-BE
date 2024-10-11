// Import APIHandler
import APIHandler from '../apiHandler.js';

$(document).ready(function () {
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
            console.log('Vui lòng chọn đầy đủ các thuộc tính.');
            return;
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
        APIHandler.post(`${baseUrl}/wp-json/custom-api/v1/get-product-price`, data)
            .done(function (response) {
                if (response.data) {
                    // Cập nhật giá sản phẩm lên giao diện
                    $('.product-detail__price').text(`${response.data.price ?? 0 } VND`);
                } else {
                    // Hiển thị thông báo nếu không có giá
                    $('.product-detail__price').text('Không tìm thấy giá cho biến thể này.');
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
        container.find('.product-detail__quantity-decrease').on('click', function(e) {
            e.preventDefault();
            var input = $(this).siblings('.product-detail__quantity-input');
            var currentValue = parseInt(input.val());

            if (currentValue > 1) {
                input.val(currentValue - 1);
            }
        });

        // Xử lý khi nhấn nút tăng
        container.find('.product-detail__quantity-increase').on('click', function(e) {
            e.preventDefault();
            var input = $(this).siblings('.product-detail__quantity-input');
            var currentValue = parseInt(input.val());

            input.val(currentValue + 1);
        });

        // Đảm bảo rằng giá trị không nhỏ hơn 1 khi người dùng nhập thủ công
        container.find('.product-detail__quantity-input').on('change', function() {
            var value = parseInt($(this).val());
            if (isNaN(value) || value < 1) {
                $(this).val(1);
            }
        });
    }
});

