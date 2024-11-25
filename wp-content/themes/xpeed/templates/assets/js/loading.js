class userLoading {
    static show() {
        const loader = $('.wp-loading-overlay');
        if (loader.length) {
            loader.css('display', 'flex');
        }
        return true;
    }

    static hide(url, data) {
        const loader = $('.wp-loading-overlay');
        if (loader.length) {
            loader.css('display', 'none');
        }
        return false;
    }
}
export default userLoading;