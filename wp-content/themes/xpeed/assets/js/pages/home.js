$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);

    // Kiểm tra nếu tham số 'paymentsuccess' tồn tại
    if (urlParams.has('paymentsuccess')) {
        const isSuccess = urlParams.get('paymentsuccess') === 'true';

        // Hiển thị thông báo
        Swal.fire({
            icon: isSuccess ? "success" : "error",
            title: isSuccess ? translate("Mua hàng thành công!", "Purchase successful!") : translate("Mua hàng thất bại!", "Purchase failed!"),
            showConfirmButton: false,
            timer: isSuccess ? 3000 : 1500
        }).then(() => {
            // Sau khi hiển thị thông báo xong, xóa tham số 'paymentsuccess' khỏi URL
            urlParams.delete('paymentsuccess');
            const newUrl = `${window.location.pathname}?${urlParams.toString()}`;

            // Cập nhật URL mà không reload trang
            window.history.replaceState(null, '', newUrl);
        });
    }

    // Kiểm tra nếu tham số 'status' và 'message' tồn tại
    if (urlParams.has('status') && urlParams.has('message')) {
        const status = urlParams.get('status');
        const message = decodeURIComponent(urlParams.get('message')); // Giải mã thông điệp

        // Hiển thị thông báo dựa trên giá trị 'status'
        Swal.fire({
            icon: status === 'error' ? "error" : "success",
            title: translate(message, message), // Dùng hàm translate để thay đổi ngôn ngữ
            showConfirmButton: false,
            timer: 3000
        }).then(() => {
            // Sau khi hiển thị thông báo, xóa các tham số 'status' và 'message' khỏi URL
            urlParams.delete('status');
            urlParams.delete('message');
            const newUrl = `${window.location.pathname}?${urlParams.toString()}`;

            // Cập nhật URL mà không reload trang
            window.history.replaceState(null, '', newUrl);
        });
    }
});

// Hàm translate giữa tiếng Việt và tiếng Anh
function translate(stringVi = '', stringEn = '') {
    const language = current_locale !== 'vi' ? 'en' : 'vi';
    return language === 'vi' ? stringVi : stringEn;
}
