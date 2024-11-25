import "./common.js";
import "./pages/home.js";
import "./pages/auth.js";
import "./pages/cart.js";
import "./pages/payment.js";
import "./pages/profile.js";

import("./pages/product.js");
//
// function isProductPage(path) {
//     const currentUrl = window.location.href;
//     return currentUrl.includes(path);
// }
//
// if (isProductPage(baseUrl+"/product/")) {
//     import "./pages/product.js";
// }
// Hàm kiểm tra URL hiện tại và import module tương ứng
//
// async function loadPageModule() {
//     const currentUrl = window.location.href; // Lấy đường dẫn hiện tại (không bao gồm domain)
//
//     if (currentUrl.includes("/home")) {
//         await import("./pages/home.js");
//         console.log("Đã tải module: home.js");
//     } else if (currentUrl.includes("/auth")) {
//         await import("./pages/auth.js");
//         console.log("Đã tải module: auth.js");
//     } else if (currentUrl.includes(baseUrl+"/product/")) {
//         // await import("./pages/product.js");
//         console.log("Đã tải module: product.js");
//     } else if (currentUrl.includes("/cart")) {
//         await import("./pages/cart.js");
//         console.log("Đã tải module: cart.js");
//     } else if (currentUrl.includes("/payment")) {
//         await import("./pages/payment.js");
//         console.log("Đã tải module: payment.js");
//     } else if (currentUrl.includes("/profile")) {
//         await import("./pages/profile.js");
//         console.log("Đã tải module: profile.js");
//     } else {
//         console.log("Không tìm thấy module phù hợp với URL.");
//     }
// }
//
// // Gọi hàm khi trang được tải
// loadPageModule().catch((err) => {
//     console.error("Lỗi khi tải module:", err);
// });