// Import APIHandler
import APIHandler from '../apiHandler.js';

$(document).ready(function () {
    // Bắt sự kiện khi người dùng thay đổi thuộc tính sản phẩm (size, color, etc.)
    $('.product-detail__size-option').on('change', function () {
        loadProductPrice(); // Gọi hàm để load giá khi có sự thay đổi
    });

    // Hàm để gọi API và lấy giá sản phẩm
    function loadProductPrice() {
        // Lấy giá trị size đã chọn
        const selectedSize = $('input[name="size"]:checked').val();

        // Kiểm tra nếu chưa chọn đủ các thuộc tính (size hoặc color)
        if (!selectedSize) {
            console.log('Vui lòng chọn đầy đủ các thuộc tính.');
            return;
        }

        // Tạo đối tượng dữ liệu để gửi tới API
        const data = {
            product_id: $('.product-detail').data('productId'), // Lấy ID sản phẩm từ thuộc tính data-product-id trong HTML
            attributes: {
                "size": selectedSize
            }
        };

        // Gọi API để lấy giá sản phẩm
        APIHandler.post('/wp-json/custom-api/v1/get-product-price', data)
            .done(function (response) {
                if (response.success) {
                    // Cập nhật giá sản phẩm lên giao diện
                    $('.product-detail__price').text(`${response.data.price} VND`);
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
});

