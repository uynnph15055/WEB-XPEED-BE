class APIHandler {
    static post(url, data) {
        return $.ajax({
            url: this.buildUrl(url), // Sử dụng buildUrl để kết hợp baseUrl và url
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
        });
    }

    static get(url, data) {
        return $.ajax({
            url: this.buildUrl(url),
            method: 'GET',
            contentType: 'application/json',
            data: JSON.stringify(data),
        });
    }

    static buildUrl(url) {
        url = baseUrl + url; // Thay thế bằng URL cơ bản của bạn
        console.log('url',url)
        return url; // Kết hợp baseUrl với url truyền vào
    }
}

export default APIHandler;
