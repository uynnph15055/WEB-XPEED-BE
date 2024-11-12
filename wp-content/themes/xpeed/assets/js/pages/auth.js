// apiHandler.js
import APIHandler from '../apiHandler.js';
import Validator from '../validation.js';

// main.js
$(document).ready(function () {
    const redirectAfterLogin = getCookie('redirect_after_login');
    const redirectUrl = (redirectAfterLogin && redirectAfterLogin.trim() !== '') ? redirectAfterLogin : baseUrl;
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }
    const clearErrors = () => {
        $('.error-message').html(''); // Xóa hết các phần tử có class "error-message"
    };
    
    const handleErrors = (respons) => {
        if(respons?.message){ alert(respons?.message); }
        const errors = respons?.data ?? {};
        Object.entries(errors).forEach(([f, e]) => {
            $(`#auth-wrapper-${f}__message`).html(`<p class="error-message">${e}</p>`);
        });
    };
    
    const submitForm = (form, url, rules, successRedirect) => {
        form.on('submit', function (event) {
            event.preventDefault();
            clearErrors(); // Xóa thông báo lỗi trước khi validate và xử lý form
            const data = Object.fromEntries(new FormData(this).entries());
            const errors = Validator.validate(data, rules);
            if (Object.keys(errors).length) return handleErrors(errors);
            APIHandler.post(`/wp-json/custom-api/v1/${url}`, data)
                .done(() => {
                    Swal.fire({
                        icon: "success",
                        title: "Yêu cầu của bạn đã thực hiện thành công",
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => {
                        window.location.href = successRedirect
                    });
                })
                .fail(xhr => handleErrors(xhr.responseJSON || {}));
        });
    };

    submitForm(
        $('#auth-wrapper-login__form'),
        'login',
        {
            username: 'required',
            password: ''
        },
        redirectUrl);

    submitForm(
        $('#auth-wrapper-register__form'),
        'register',
        {
            username: 'required',
            email: 'required|email',
            password: 'required|min:10',
            address: ''
        },
        baseUrl + "/login"
    );

    $('#profile-logout__action').on('click', () => APIHandler.post(`/wp-json/custom-api/v1/logout`, {}).done(() => window.location.href = baseUrl));
});
