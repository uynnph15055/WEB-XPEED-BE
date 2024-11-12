$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);

    // Check if 'paymentsuccess' parameter exists
    if (urlParams.has('paymentsuccess')) {
        // If 'paymentsuccess' exists, check if it's 'true' or not
        if (urlParams.get('paymentsuccess') === 'true') {
            Swal.fire({
                icon: "success",
                title: "Mua hàng thành công!",
                showConfirmButton: false,
                timer: 3000
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Mua hàng thất bại!",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
});
