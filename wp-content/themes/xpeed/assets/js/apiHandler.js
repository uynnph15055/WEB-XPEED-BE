// apiHandler.js
class APIHandler {
    static post(url, data) {
        return $.ajax({
            url: url,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
        });
    }

    static get(url, data) {
        return $.ajax({
            url: url,
            method: 'GET',
            contentType: 'application/json',
            data: JSON.stringify(data),
        });
    }
}

export default APIHandler;
