/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkxpeed"] = self["webpackChunkxpeed"] || []).push([["assets_js_pages_home_js"],{

/***/ "./assets/js/pages/home.js":
/*!*********************************!*\
  !*** ./assets/js/pages/home.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/* provided dependency */ var $ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n$(document).ready(function () {\n  var urlParams = new URLSearchParams(window.location.search);\n\n  // Kiểm tra nếu tham số 'paymentsuccess' tồn tại\n  if (urlParams.has('paymentsuccess')) {\n    var isSuccess = urlParams.get('paymentsuccess') === 'true';\n\n    // Hiển thị thông báo\n    Swal.fire({\n      icon: isSuccess ? \"success\" : \"error\",\n      title: isSuccess ? translate(\"Mua hàng thành công!\", \"Purchase successful!\") : translate(\"Mua hàng thất bại!\", \"Purchase failed!\"),\n      showConfirmButton: false,\n      timer: isSuccess ? 3000 : 1500\n    }).then(function () {\n      // Sau khi hiển thị thông báo xong, xóa tham số 'paymentsuccess' khỏi URL\n      urlParams[\"delete\"]('paymentsuccess');\n      var newUrl = \"\".concat(window.location.pathname, \"?\").concat(urlParams.toString());\n\n      // Cập nhật URL mà không reload trang\n      window.history.replaceState(null, '', newUrl);\n    });\n  }\n\n  // Kiểm tra nếu tham số 'status' và 'message' tồn tại\n  if (urlParams.has('status') && urlParams.has('message')) {\n    var status = urlParams.get('status');\n    var message = decodeURIComponent(urlParams.get('message')); // Giải mã thông điệp\n\n    // Hiển thị thông báo dựa trên giá trị 'status'\n    Swal.fire({\n      icon: status === 'error' ? \"error\" : \"success\",\n      title: translate(message, message),\n      // Dùng hàm translate để thay đổi ngôn ngữ\n      showConfirmButton: false,\n      timer: 3000\n    }).then(function () {\n      // Sau khi hiển thị thông báo, xóa các tham số 'status' và 'message' khỏi URL\n      urlParams[\"delete\"]('status');\n      urlParams[\"delete\"]('message');\n      var newUrl = \"\".concat(window.location.pathname, \"?\").concat(urlParams.toString());\n\n      // Cập nhật URL mà không reload trang\n      window.history.replaceState(null, '', newUrl);\n    });\n  }\n});\n\n// Hàm translate giữa tiếng Việt và tiếng Anh\nfunction translate() {\n  var stringVi = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var stringEn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  var language = current_locale !== 'vi' ? 'en' : 'vi';\n  return language === 'vi' ? stringVi : stringEn;\n}\n\n//# sourceURL=webpack://xpeed/./assets/js/pages/home.js?");

/***/ })

}]);