import userLoading from './loading.js';

class APIHandler {
    static post(url, data, isLoading = true) {
       userLoading.show(); // Hiển thị loading nếu isLoading là true
       console.log('isLoading',isLoading)
        return $.ajax({
            url: this.buildUrl(url),
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
        }).always(() => {
            if (isLoading) userLoading.hide(); // Ẩn loading sau khi hoàn thành call API
        });
    }

    static get(url, data, isLoading = true) {
        if (isLoading) userLoading.show(); // Hiển thị loading nếu isLoading là true
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
        url = baseUrl + url; // Thay thế baseUrl bằng URL cơ bản của bạn
        console.log('url', url);
        return url;
    }
}

export default APIHandler;
