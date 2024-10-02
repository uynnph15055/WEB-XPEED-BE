$(document).ready(function () {
    const getDomain = () => {
        const domain = window.location.hostname;
        return domain;
    };
    const login = () => {
        $('#auth-wrapper-login__form').on('submit', function (event) {
            event.preventDefault(); // Ngăn chặn hành động mặc định của form

            const formData = new FormData(this);
            const username = formData.get('username');
            const password = formData.get('password');
            const messageElement = $('#auth-wrapper-login__message'); // Lấy phần tử hiển thị thông báo
            const messageUsername = $('#auth-wrapper-username__message');
            const messagePassword = $('#auth-wrapper-password__message');
            // Xóa thông báo trước khi gửi yêu cầu mới
            messageElement.html('');
            messageUsername.html('');
            messagePassword.html('');

            $.ajax({
                url: 'http://localhost/WEB-XPEED-BE/wp-json/custom-api/v1/login',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({ username: username, password: password }),
                success: function (data) {
                    messageElement.html('<p class="success-message">Đăng nhập thành công!</p>');
                    // Xử lý sau khi đăng nhập thành công (chuyển hướng hoặc lưu thông tin)
                    window.location.href = ""; // Ví dụ: chuyển hướng về trang chính
                },
                error: function (xhr) {
                    if(xhr.responseJSON.data.username || xhr.responseJSON.data.password){
                        messageUsername.html(`<p class="error-message">${xhr.responseJSON.data.username ?? ""}</p>`);
                        messagePassword.html(`<p class="error-message">${xhr.responseJSON.data.password ?? ""}</p>`);
                    }
                    else if(xhr.responseJSON.message){
                        const errorMessage = xhr.responseJSON ? xhr.responseJSON.message : 'Đăng nhập thất bại.';
                        messageElement.html(`<p class="error-message">${errorMessage}</p>`); // Hiển thị thông báo lỗi
                    }
                }
            }).fail(function () {
            });
        });
    };
    login();
});
