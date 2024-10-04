/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/common.js":
/*!*****************************!*\
  !*** ./assets/js/common.js ***!
  \*****************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://xpeed/./assets/js/common.js?");

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ \"./assets/js/common.js\");\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home.js */ \"./assets/js/pages/home.js\");\n/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_home_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_auth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/auth.js */ \"./assets/js/pages/auth.js\");\n/* harmony import */ var _pages_auth_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pages_auth_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack://xpeed/./assets/js/main.js?");

/***/ }),

/***/ "./assets/js/pages/auth.js":
/*!*********************************!*\
  !*** ./assets/js/pages/auth.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/* provided dependency */ var $ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n$(document).ready(function () {\n  var login = function login() {\n    $('#auth-wrapper-login__form').on('submit', function (event) {\n      event.preventDefault(); // Ngăn chặn hành động mặc định của form\n\n      var formData = new FormData(this);\n      var username = formData.get('username');\n      var password = formData.get('password');\n      var messageElement = $('#auth-wrapper-login__message'); // Lấy phần tử hiển thị thông báo\n      var messageUsername = $('#auth-wrapper-username__message');\n      var messagePassword = $('#auth-wrapper-password__message');\n      // Xóa thông báo trước khi gửi yêu cầu mới\n      messageElement.html('');\n      messageUsername.html('');\n      messagePassword.html('');\n      $.ajax({\n        url: baseUrl + '/wp-json/custom-api/v1/login',\n        method: 'POST',\n        contentType: 'application/json',\n        data: JSON.stringify({\n          username: username,\n          password: password\n        }),\n        success: function success(data) {\n          messageElement.html('<p class=\"success-message\">Đăng nhập thành công!</p>');\n          // Xử lý sau khi đăng nhập thành công (chuyển hướng hoặc lưu thông tin)\n          window.location.href = baseUrl; // Ví dụ: chuyển hướng về trang chính\n        },\n        error: function error(xhr) {\n          if (xhr.responseJSON.data.username || xhr.responseJSON.data.password) {\n            var _xhr$responseJSON$dat, _xhr$responseJSON$dat2;\n            messageUsername.html(\"<p class=\\\"error-message\\\">\".concat((_xhr$responseJSON$dat = xhr.responseJSON.data.username) !== null && _xhr$responseJSON$dat !== void 0 ? _xhr$responseJSON$dat : \"\", \"</p>\"));\n            messagePassword.html(\"<p class=\\\"error-message\\\">\".concat((_xhr$responseJSON$dat2 = xhr.responseJSON.data.password) !== null && _xhr$responseJSON$dat2 !== void 0 ? _xhr$responseJSON$dat2 : \"\", \"</p>\"));\n          } else if (xhr.responseJSON.message) {\n            var errorMessage = xhr.responseJSON ? xhr.responseJSON.message : 'Đăng nhập thất bại.';\n            messageElement.html(\"<p class=\\\"error-message\\\">\".concat(errorMessage, \"</p>\")); // Hiển thị thông báo lỗi\n          }\n        }\n      }).fail(function () {});\n    });\n  };\n  login();\n  var register = function register() {\n    $('#auth-wrapper-register__form').on('submit', function (event) {\n      event.preventDefault(); // Ngăn chặn hành động mặc định của form\n\n      var formData = new FormData(this);\n      var data = {\n        username: formData.get('username'),\n        email: formData.get('email'),\n        password: formData.get('password'),\n        address: formData.get('address')\n      };\n      var messageElement = $('#auth-wrapper-login__message'); // Lấy phần tử hiển thị thông báo\n      var messageUsername = $('#auth-wrapper-username__message');\n      var messageEmail = $('#auth-wrapper-email__message');\n      var messagePassword = $('#auth-wrapper-password__message');\n      var messageAddress = $('#auth-wrapper-address__message');\n      // Xóa thông báo trước khi gửi yêu cầu mới\n      messageElement.html('');\n      messageEmail.html('');\n      messagePassword.html('');\n      messageUsername.html('');\n      messageAddress.html('');\n      $.ajax({\n        url: baseUrl + '/wp-json/custom-api/v1/register',\n        method: 'POST',\n        contentType: 'application/json',\n        data: JSON.stringify(data),\n        success: function success(data) {\n          messageElement.html('<p class=\"success-message\">Đăng ký thành công!</p>');\n          window.location.href = baseUrl + \"/login\";\n        },\n        error: function error(xhr) {\n          if (xhr.responseJSON && xhr.responseJSON.data) {\n            var _data = xhr.responseJSON.data;\n            messageUsername.html(\"<p class=\\\"error-message\\\">\".concat(Array.isArray(_data.username) && _data.username.length > 0 ? _data.username[0] : \"\", \"</p>\"));\n            messagePassword.html(\"<p class=\\\"error-message\\\">\".concat(Array.isArray(_data.password) && _data.password.length > 0 ? _data.password[0] : \"\", \"</p>\"));\n            messageEmail.html(\"<p class=\\\"error-message\\\">\".concat(Array.isArray(_data.email) && _data.email.length > 0 ? _data.email[0] : \"\", \"</p>\"));\n            messageAddress.html(\"<p class=\\\"error-message\\\">\".concat(Array.isArray(_data.address) && _data.address.length > 0 ? _data.address[0] : \"\", \"</p>\"));\n          } else if (xhr.responseJSON.message) {\n            var errorMessage = xhr.responseJSON ? xhr.responseJSON.message : 'Đăng ký thất bại.';\n            messageElement.html(\"<p class=\\\"error-message\\\">\".concat(errorMessage, \"</p>\")); // Hiển thị thông báo lỗi\n          }\n        }\n      }).fail(function () {});\n    });\n  };\n  register();\n  var logout = function logout() {\n    $('#profile-logout__action').on('click', function (event) {\n      $.ajax({\n        url: baseUrl + '/wp-json/custom-api/v1/logout',\n        method: 'POST',\n        contentType: 'application/json',\n        data: JSON.stringify({}),\n        success: function success(data) {\n          window.location.href = baseUrl;\n        },\n        error: function error(xhr) {}\n      }).fail(function () {});\n    });\n  };\n  logout();\n});\n\n//# sourceURL=webpack://xpeed/./assets/js/pages/auth.js?");

/***/ }),

/***/ "./assets/js/pages/home.js":
/*!*********************************!*\
  !*** ./assets/js/pages/home.js ***!
  \*********************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://xpeed/./assets/js/pages/home.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/main.js");
/******/ 	
/******/ })()
;