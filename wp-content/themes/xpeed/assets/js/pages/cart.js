import APIHandler from '../apiHandler.js';

$(document).ready(function () {
    var isPayment = true;
    // Hàm tính tổng tiền cho sản phẩm
    function calculateTotalForItem($itemRow) {
        const price = parseInt($itemRow.find('.cart__item-details-price').text().replace(/\D/g, ''));
        const quantity = parseInt($itemRow.find('.cart__item-quantity-input').val());
        const total = price * quantity;

        $itemRow.find('.cart__item-price').text(total.toLocaleString() + ' đ');

        return total;
    }

    // Hàm tính tổng tiền toàn bộ giỏ hàng
    function calculateTotalCart() {
        let totalCarts = 0;
        $('.cart__item').each(function () {
            const totalItem = calculateTotalForItem($(this));
            totalCarts += totalItem;
        });
        $('.cart__actions-total').text(totalCarts.toLocaleString() + ' đ');
    }

    // Sự kiện click nút giảm số lượng
    $('.cart__item-quantity-decrease').on('click', function () {
        const $quantityInput = $(this).closest('.cart__item').find('.cart__item-quantity-input');
        let quantity = parseInt($quantityInput.val());
        if (quantity > 1) {
            quantity--;
            $quantityInput.val(quantity);
            isPayment = false;
            calculateTotalCart(); // Cập nhật tổng tiền giỏ hàng
        }
    });

    // Sự kiện click nút tăng số lượng
    $('.cart__item-quantity-increase').on('click', function () {
        const $itemRow = $(this).closest('.cart__item');
        const $quantityInput = $itemRow.find('.cart__item-quantity-input');
        const stockQuantity = parseInt($itemRow.find('.cart__item-stock-quantity').text()); // Lấy số lượng tồn kho
        let quantity = parseInt($quantityInput.val());

        // Kiểm tra số lượng hiện tại với số lượng tồn kho
        if (quantity < stockQuantity) {
            quantity++;
            $quantityInput.val(quantity);
            isPayment = false;
            calculateTotalCart(); // Cập nhật tổng tiền giỏ hàng
        } else {
            Swal.fire({
                icon: "error",
                title: "Không thể thêm quá số lượng tồn kho.",
                showConfirmButton: false,
                timer: 1500
            });
        }
    });

    // Sự kiện khi thay đổi trực tiếp số lượng trong input
    $('.cart__item-quantity-input').on('input', function () {
        const $itemRow = $(this).closest('.cart__item');
        const stockQuantity = parseInt($itemRow.find('.cart__item-stock-quantity').text());
        const quantity = parseInt($(this).val());

        if (quantity && quantity > 0 && quantity <= stockQuantity) {
            isPayment = false;
            calculateTotalCart(); // Cập nhật tổng tiền giỏ hàng
        } else {
            // Nếu số lượng nhập vào lớn hơn tồn kho, đặt lại giá trị bằng tồn kho
            $(this).val(stockQuantity);
            calculateTotalCart();
            Swal.fire({
                icon: "error",
                title: "Số lượng không được vượt quá tồn kho.",
                showConfirmButton: false,
                timer: 1500
            });
        }
    });

    // Cập nhật lại giỏ hàng ngay khi trang load
    calculateTotalCart();

    $('.button--primary-cart').on('click', function () {
        const products = [];
        $('.cart__item').each(function () {
            const productId = $(this).data('product-id');
            const quantity = $(this).find('.cart__item-quantity-input').val();
            const variation = {
                pa_size: $(this).find('.cart__item-size').data('variation-size') // Lấy kích thước từ data-attribute
            };

            products.push({
                productId: productId,
                quantity: quantity,
                variation: variation
            });
        });
        if (products) {
            APIHandler.post('/wp-json/custom-api/v1/update-cart', products)
                .done(function (response) {
                    isPayment = true;
                    Swal.fire({
                        icon: "success",
                        title: "Giỏ hàng đã được cập nhật!",
                        showConfirmButton: false,
                        timer: 1500
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
        }
    });

    $('.cart__item-action-delete').on('click', function () {

        const productId = $(this).closest('.cart__item').data('product-id');
        const variationSize = $(this).closest('.cart__item').find('.cart__item-size').data('variation-size');
        const $itemRow = $(this).closest('.cart__item'); // Dòng sản phẩm cần xóa
        const variation = variationSize ? { pa_size: variationSize} : null;

        const data = {
            productId: productId,
            variation
        };
        APIHandler.post('/wp-json/custom-api/v1/remove-cart-item', data)
            .done(function (response) {

                $itemRow.remove();
                calculateTotalCart();
            })
            .fail(function () {
                Swal.fire({
                    icon: "error",
                    title: "Xóa sản phẩm không thành công. Vui lòng thử lại.",
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    });

    $('#paymentBtn').on('click', function () {

            if (!isPayment) {
                Swal.fire({
                    icon: "error",
                    title:"Cập nhật giỏ hàng trước khi thanh toán.",
                    showConfirmButton: false,
                    timer: 3000,
                });
            }else{
                APIHandler.get('/wp-json/custom-api/v1/order/create')
                    .done(function (response) {
                           window.location.href= baseUrl+'/payment?token='+response.data.orderId ?? '';
                    })
                    .fail(function (error) {
                        Swal.fire({
                            icon: "error",
                            title: error.responseJSON.message ?? "Thanh toán thất bại. Vui lòng thử lại.",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    });




            }

    });

    showAlertFromUrlParam('errorPayment');
    function showAlertFromUrlParam(paramName) {
        const urlParams = new URLSearchParams(window.location.search);
        const message = urlParams.get(paramName);

        if (message) {
            Swal.fire({
                icon: "error",
                title: decodeURIComponent(message),
                showConfirmButton: false,
                timer: 1500
            });

        }
    }
});
