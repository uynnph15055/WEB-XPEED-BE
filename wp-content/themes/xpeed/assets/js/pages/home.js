$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);

    // Check if 'paymentsuccess' parameter exists
    if (urlParams.has('paymentsuccess')) {
        const isSuccess = urlParams.get('paymentsuccess') === 'true';

        // Hiển thị thông báo
        Swal.fire({
            icon: isSuccess ? "success" : "error",
            title: isSuccess ? "Mua hàng thành công!" : "Mua hàng thất bại!",
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
});
