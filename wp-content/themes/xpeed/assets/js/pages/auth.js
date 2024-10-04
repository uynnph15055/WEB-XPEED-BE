$(document).ready(function () {
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
                url: baseUrl+'/wp-json/custom-api/v1/login',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({ username: username, password: password }),
                success: function (data) {
                    messageElement.html('<p class="success-message">Đăng nhập thành công!</p>');
                    // Xử lý sau khi đăng nhập thành công (chuyển hướng hoặc lưu thông tin)
                    window.location.href = baseUrl; // Ví dụ: chuyển hướng về trang chính
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

    const register = () => {
        $('#auth-wrapper-register__form').on('submit', function (event) {
            event.preventDefault(); // Ngăn chặn hành động mặc định của form

            const formData = new FormData(this);
            const data =
                {
                    username: formData.get('username'),
                    email: formData.get('email'),
                    password: formData.get('password'),
                    address: formData.get('address'),
                };

            const messageElement = $('#auth-wrapper-login__message'); // Lấy phần tử hiển thị thông báo
            const messageUsername = $('#auth-wrapper-username__message');
            const messageEmail= $('#auth-wrapper-email__message');
            const messagePassword = $('#auth-wrapper-password__message');
            const messageAddress = $('#auth-wrapper-address__message');
            // Xóa thông báo trước khi gửi yêu cầu mới
            messageElement.html('');
            messageEmail.html('');
            messagePassword.html('');
            messageUsername.html('');
            messageAddress.html('');

            $.ajax({
                url: baseUrl+'/wp-json/custom-api/v1/register',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(data),
                success: function (data) {
                    messageElement.html('<p class="success-message">Đăng ký thành công!</p>');
                    window.location.href = baseUrl+"/login";
                },
                error: function (xhr) {
                    if (xhr.responseJSON && xhr.responseJSON.data) {
                        const data = xhr.responseJSON.data;
                        messageUsername.html(`<p class="error-message">${Array.isArray(data.username) && data.username.length > 0 ? data.username[0] : ""}</p>`);
                        messagePassword.html(`<p class="error-message">${Array.isArray(data.password) && data.password.length > 0 ? data.password[0] : ""}</p>`);
                        messageEmail.html(`<p class="error-message">${Array.isArray(data.email) && data.email.length > 0 ? data.email[0] : ""}</p>`);
                        messageAddress.html(`<p class="error-message">${Array.isArray(data.address) && data.address.length > 0 ? data.address[0] : ""}</p>`);
                    }

                    else if(xhr.responseJSON.message){
                        const errorMessage = xhr.responseJSON ? xhr.responseJSON.message : 'Đăng ký thất bại.';
                        messageElement.html(`<p class="error-message">${errorMessage}</p>`); // Hiển thị thông báo lỗi
                    }

                }
            }).fail(function () {
            });
        });
    };
    register();

    const logout = () => {
        $('#profile-logout__action').on('click', function (event) {
            $.ajax({
                url: baseUrl+'/wp-json/custom-api/v1/logout',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({}),
                success: function (data) {
                    window.location.href = baseUrl;
                },
                error: function (xhr) {
                }
            }).fail(function () {
            });
        });
    };
    logout();
});
