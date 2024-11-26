import "./common.js";
// Hàm kiểm tra URL hiện tại và import module tương ứng
//
async function loadPageModule() {
    const currentUrl = window.location.href; // Lấy đường dẫn hiện tại (không bao gồm domain)

    if (currentUrl.includes("/home")) {
        await import("./pages/home.js");
        console.log("Đã tải module: home.js");
    }
    else if (currentUrl.includes(baseUrl + "/login") || currentUrl.includes(baseUrl + "/register")) {
        await import("./pages/auth.js");
        console.log("Đã tải module: auth.js");
    }
    else if (currentUrl.includes(baseUrl + "/product/")) {
        // await import("./pages/product.js");
        console.log("Đã tải module: product.js");
    }
    else if (currentUrl.includes("/cart")) {
        await import("./pages/cart.js");
        console.log("Đã tải module: cart.js");
    }
    else if (currentUrl.includes("/payment")) {
        await import("./pages/payment.js");
        console.log("Đã tải module: payment.js");
    }
    else if (currentUrl.includes("/profile")) {
        await import("./pages/profile.js");
        console.log("Đã tải module: profile.js");
    }
    else {
        await import("./pages/home.js");
    }
}

// Gọi hàm khi trang được tải
loadPageModule().catch((err) => {
    console.error("Lỗi khi tải module:", err);
});