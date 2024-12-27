import userLoading from './loading.js';
import { BASE_URL } from './variable.js';

class APIHandler {
    static post(url, data = {}, isLoading = true) {
        if (isLoading) userLoading.show(); // Hiển thị loading nếu isLoading là true
        // Thêm tham số lang vào data
        data.lang = data.lang || current_locale;

        return $.ajax({
            url: this.buildUrl(url),
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
        }).always(() => {
            if (isLoading) userLoading.hide(); // Ẩn loading sau khi hoàn thành call API
        });
    }

    static get(url, data = {}, isLoading = true) {
        if (isLoading) userLoading.show(); // Hiển thị loading nếu isLoading là true
        // Thêm tham số lang vào data
        data.lang = data.lang || current_locale;

        return $.ajax({
            url: this.buildUrl(url),
            method: 'GET',
            contentType: 'application/json',
            data: JSON.stringify(data),
        }).always(() => {
            if (isLoading) userLoading.hide(); // Ẩn loading sau khi hoàn thành call API
        });
    }

    static buildUrl(url) {
        url = BASE_URL + url; // Thay thế baseUrl bằng URL cơ bản của bạn
        return url;
    }
}

export default APIHandler;
