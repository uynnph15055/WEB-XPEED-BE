"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkxpeed"] = self["webpackChunkxpeed"] || []).push([["assets_js_pages_product_js"],{

/***/ "./assets/js/apiHandler.js":
/*!*********************************!*\
  !*** ./assets/js/apiHandler.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _loading_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.js */ \"./assets/js/loading.js\");\n/* harmony import */ var _variable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variable.js */ \"./assets/js/variable.js\");\n/* provided dependency */ var $ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\nvar APIHandler = /*#__PURE__*/function () {\n  function APIHandler() {\n    _classCallCheck(this, APIHandler);\n  }\n  return _createClass(APIHandler, null, [{\n    key: \"post\",\n    value: function post(url, data) {\n      var isLoading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n      _loading_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].show(); // Hiển thị loading nếu isLoading là true\n      console.log('isLoading', isLoading);\n      return $.ajax({\n        url: this.buildUrl(url),\n        method: 'POST',\n        contentType: 'application/json',\n        data: JSON.stringify(data)\n      }).always(function () {\n        if (isLoading) _loading_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hide(); // Ẩn loading sau khi hoàn thành call API\n      });\n    }\n  }, {\n    key: \"get\",\n    value: function get(url, data) {\n      var isLoading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n      if (isLoading) _loading_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].show(); // Hiển thị loading nếu isLoading là true\n      return $.ajax({\n        url: this.buildUrl(url),\n        method: 'GET',\n        contentType: 'application/json',\n        data: JSON.stringify(data)\n      }).always(function () {\n        if (isLoading) _loading_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hide(); // Ẩn loading sau khi hoàn thành call API\n      });\n    }\n  }, {\n    key: \"buildUrl\",\n    value: function buildUrl(url) {\n      url = _variable_js__WEBPACK_IMPORTED_MODULE_1__.BASE_URL + url; // Thay thế baseUrl bằng URL cơ bản của bạn\n\n      return url;\n    }\n  }]);\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (APIHandler);\n\n//# sourceURL=webpack://xpeed/./assets/js/apiHandler.js?");

/***/ }),

/***/ "./assets/js/loading.js":
/*!******************************!*\
  !*** ./assets/js/loading.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* provided dependency */ var $ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar userLoading = /*#__PURE__*/function () {\n  function userLoading() {\n    _classCallCheck(this, userLoading);\n  }\n  return _createClass(userLoading, null, [{\n    key: \"show\",\n    value: function show() {\n      var loader = $('.wp-loading-overlay');\n      if (loader.length) {\n        loader.css('display', 'flex');\n      }\n      return true;\n    }\n  }, {\n    key: \"hide\",\n    value: function hide(url, data) {\n      var loader = $('.wp-loading-overlay');\n      if (loader.length) {\n        loader.css('display', 'none');\n      }\n      return false;\n    }\n  }]);\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userLoading);\n\n//# sourceURL=webpack://xpeed/./assets/js/loading.js?");

/***/ }),

/***/ "./assets/js/pages/product.js":
/*!************************************!*\
  !*** ./assets/js/pages/product.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apiHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apiHandler.js */ \"./assets/js/apiHandler.js\");\n/* harmony import */ var _variable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variable.js */ \"./assets/js/variable.js\");\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common.js */ \"./assets/js/common.js\");\n/* provided dependency */ var $ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n// Import APIHandler\n\n\n\n$(document).ready(function () {\n  var language = current_locale != 'vi' ? 'en' : '';\n  //--------------------------------------PRODUCT IMAGE----------------------------------\n  $(\".thumbnail-item__img\").on(\"click\", function () {\n    var src = $(this).attr(\"src\");\n    changeMainImage(src);\n    $(this).parent().addClass(\"active-thumbnail\");\n  });\n  toggleQuantityControls();\n  var selectedAttributes = {}; // Chuyển thành object\n  var selectedProduct = {};\n\n  // Hàm chuyển text thành không dấu\n  function toSlug(input) {\n    return input.toLowerCase() // Chuyển thành chữ thường\n    .normalize('NFD') // Chuẩn hóa chuỗi để tách dấu\n    .replace(/[\\u0300-\\u036f]/g, '') // Loại bỏ dấu\n    .replace(/đ/g, 'd') // Thay 'đ' bằng 'd'\n    .replace(/[^a-z0-9\\s-]/g, '') // Loại bỏ ký tự đặc biệt\n    .replace(/\\s+/g, '-') // Thay khoảng trắng bằng dấu gạch ngang\n    .replace(/-+/g, '-') // Loại bỏ gạch ngang thừa\n    .trim(); // Xóa khoảng trắng ở đầu và cuối\n  }\n  $('.product-detail__size-options input[type=\"radio\"]').on('change', function () {\n    var attributeKey = $(this).closest('.product-detail__size-options').data('attribute-key');\n    var selectedValue = $(this).val();\n    // Chuyển attributeKey thành slug và thêm tiền tố\n    var slugAttributeKey = \"pa_\" + toSlug(attributeKey);\n    selectedAttributes[slugAttributeKey] = toSlug(selectedValue);\n    if (Object.keys(selectedAttributes).length === Object.keys(productData.attributes).length) {\n      selectedProduct = productData.variations.find(function (product) {\n        return Object.keys(selectedAttributes).every(function (key) {\n          return selectedAttributes[key] + '-' + language === product.attributes[\"attribute_\" + key];\n        });\n      });\n      if (selectedProduct) {\n        var _selectedProduct$max_;\n        $(\".product-detail__quantity-inventory\").text(((_selectedProduct$max_ = selectedProduct.max_qty) !== null && _selectedProduct$max_ !== void 0 ? _selectedProduct$max_ : 0) + ' sản phẩm có sẵn');\n        $(\".product-detail__quantity-input\").val(0);\n        if (selectedProduct.max_qty >= 1) {\n          $(\".product-detail__quantity-input\").val(1);\n        }\n        setPrice(selectedProduct);\n        toggleQuantityControls(false);\n        changeMainImage(selectedProduct.image.src);\n      }\n    } else {\n      toggleQuantityControls(true);\n    }\n  });\n  function setPrice(selectedProduct) {\n    var _selectedProduct$disp;\n    $(\".product-detail__price\").text(\"\".concat(((_selectedProduct$disp = selectedProduct.display_price) !== null && _selectedProduct$disp !== void 0 ? _selectedProduct$disp : 0).toLocaleString(\"vi-VN\").replace(/\\./g, \",\"), \" \\u0111\"));\n  }\n  function changeMainImage(src) {\n    var $mainImage = $(\"#mainImage\");\n    // Kiểm tra và thay đổi ảnh chính\n    if ($mainImage.attr(\"src\") !== src) {\n      $mainImage.attr(\"src\", src);\n    }\n\n    // Xóa class 'active-thumbnail' khỏi các thumbnail khác\n    $(\".thumbnail-item__wrapper\").removeClass(\"active-thumbnail\");\n  }\n\n  //--------------------------------------Tăng giảm số lượng sản phẩm----------------------------------\n\n  $('.product-detail__quantity-controls').on('click', '.product-detail__quantity-decrease, .product-detail__quantity-increase', function (e) {\n    e.preventDefault();\n\n    // Tìm input trong cùng container\n    var $input = $(this).closest('.product-detail__quantity-controls').find('.product-detail__quantity-input');\n    var currentValue = parseInt($input.val(), 10) || 1; // Lấy giá trị hiện tại, mặc định là 1 nếu không hợp lệ\n    var minValue = parseInt($input.attr('min'), 10) || 1; // Giá trị min\n    var maxValue = selectedProduct.max_qty; // Đặt giá trị tối đa\n    if ($(this).hasClass('product-detail__quantity-increase')) {\n      // Tăng giá trị nếu nhỏ hơn max\n      if (currentValue < maxValue) {\n        currentValue++;\n      }\n    } else if ($(this).hasClass('product-detail__quantity-decrease')) {\n      // Giảm giá trị nếu lớn hơn min\n      if (currentValue > minValue) {\n        currentValue--;\n      }\n    }\n\n    // Cập nhật giá trị vào input\n    $input.val(currentValue);\n  });\n  $('.product-detail__quantity-input').on('change', function () {\n    var minValue = parseInt($(this).attr('min'), 10) || 1; // Giá trị min\n    var maxValue = selectedProduct.max_qty; // Giá trị tối đa\n    var currentValue = parseInt($(this).val(), 10) || minValue; // Giá trị hiện tại hoặc mặc định là min nếu không hợp lệ\n\n    // Ràng buộc giá trị trong khoảng min và max\n    if (currentValue < minValue) {\n      currentValue = minValue;\n    } else if (currentValue > maxValue) {\n      currentValue = maxValue;\n    }\n    $(this).val(currentValue); // Cập nhật giá trị\n  });\n  function toggleQuantityControls() {\n    var isHidden = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n    var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.product-detail__quantity';\n    $(selector).each(function () {\n      var $section = $(this);\n\n      // Hiển thị hoặc ẩn toàn bộ đoạn\n      if (isHidden) {\n        $section.hide(); // Ẩn đoạn\n      } else {\n        $section.show(); // Hiển thị đoạn\n      }\n    });\n  }\n\n  //--------------------------------------ADD TO CART----------------------------------\n\n  $(\".product-detail__add-to-cart\").on(\"click\", function () {\n    if (Object.keys(selectedProduct).length === 0) {\n      Swal.fire({\n        icon: \"error\",\n        title: \"Vui lòng chọn sản phẩm!\",\n        showConfirmButton: false,\n        timer: 3000\n      });\n      return false;\n    } else {\n      var userId = parseInt($(this).data('userid'), 10);\n      if (userId < 1) {\n        Swal.fire({\n          icon: \"error\",\n          title: \"Vui đăng nhập trước khi mua!\",\n          showConfirmButton: false,\n          timer: 3000\n        });\n        return;\n      }\n\n      // Lấy ID sản phẩm\n      var productId = selectedProduct.variation_id;\n\n      // Lấy số lượng\n      var quantity = parseInt($(\".product-detail__quantity-input\").val());\n\n      // Tạo đối tượng dữ liệu để gửi tới server\n      var data = [{\n        productId: productId,\n        quantity: quantity,\n        variation: selectedAttributes\n      }];\n      // Gọi API để thêm sản phẩm vào giỏ hàng\n      _apiHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"/wp-json/custom-api/v1/add-to-cart\", data).done(function (response) {\n        Swal.fire({\n          icon: \"success\",\n          title: \"Sản phẩm đã được thêm vào giỏ hàng\",\n          showConfirmButton: false,\n          timer: 1500\n        }).then(function () {\n          $(\"#icon-cart\").append(\"<div class=\\\"header_main-cart-count\\\" id=\\\"product-count\\\">\".concat(Object.keys(response.data.session_cart).length, \"</div>\"));\n        });\n      }).fail(function (err) {\n        var _err$responseJSON$mes;\n        Swal.fire({\n          icon: \"error\",\n          title: (_err$responseJSON$mes = err.responseJSON.message) !== null && _err$responseJSON$mes !== void 0 ? _err$responseJSON$mes : \"Không thể thêm sản phẩm vào giỏ hàng. Vui lòng thử lại sau.\",\n          showConfirmButton: false,\n          timer: 3000\n        });\n      });\n    }\n  });\n  $(\".product-detail__buy-now\").on(\"click\", function () {\n    if (Object.keys(selectedProduct).length === 0) {\n      Swal.fire({\n        icon: \"error\",\n        title: \"Vui lòng chọn sản phẩm!\",\n        showConfirmButton: false,\n        timer: 3000\n      });\n      return;\n    } else {\n      var userId = parseInt($(this).data('userid'), 10);\n      if (userId < 1) {\n        Swal.fire({\n          icon: \"error\",\n          title: \"Vui đăng nhập trước khi mua!\",\n          showConfirmButton: false,\n          timer: 3000\n        });\n        return;\n      }\n\n      // Lấy ID sản phẩm\n      var productId = selectedProduct.variation_id;\n\n      // Lấy số lượng\n      var quantity = parseInt($(\".product-detail__quantity-input\").val());\n\n      // Lấy thuộc tính đã chọn (ví dụ: size)\n      var data = [{\n        productId: productId,\n        quantity: quantity,\n        variation: selectedAttributes\n      }];\n\n      // Gọi API để thêm sản phẩm vào giỏ hàng\n      _apiHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"/wp-json/custom-api/v1/add-order?userId=\" + userId, data).done(function (response) {\n        if (response.data.paymentUrl) {\n          window.location.href = response.data.paymentUrl;\n        }\n      }).fail(function (err) {\n        var _err$responseJSON$mes2;\n        Swal.fire({\n          icon: \"error\",\n          title: (_err$responseJSON$mes2 = err.responseJSON.message) !== null && _err$responseJSON$mes2 !== void 0 ? _err$responseJSON$mes2 : \"Không thể mua sản phẩm. Vui lòng thử lại sau.\",\n          showConfirmButton: false,\n          timer: 3000\n        });\n      });\n    }\n  });\n\n  //--------------------------------------PRODUCT LIST----------------------------------\n\n  $(\"#card__product-loading-wapper\").removeClass(\"under-active\");\n\n  // $.ajax({\n  //     url: `${BASE_URL}/wp-json/custom-api/v1/products`,\n  //     method: \"GET\",\n  //     success: function (response) {\n  //         if (response.products) {\n  //             const dataProduct = response.products;\n  //             dataProduct.forEach(function (product) {\n  //                 var productHtml = `\n  //             <div class=\"shopify__product\">\n  //               <a href=\"${\n  //                     product.url\n  //                 }\" class=\"shopify__product-image-wrapper\">\n  //                 <span class=\"shopify__product-badge shopify__product-badge--new\">${\n  //                     product.first_tag\n  //                 }</span>\n  //                 <img src=\"${product.image}\" alt=\"${\n  //                     product.title\n  //                 }\" class=\"shopify__product-image\" />\n  //               </a>\n  //\n  //               <div class=\"shopify__product-details\">\n  //                 <h3 class=\"shopify__product-title\">\n  //                   <a href=\"${product.url}\" class=\"shopify__product-link\">${\n  //                     product.title\n  //                 }</a>\n  //                 </h3>\n  //\n  //                 <p class=\"shopify__product-cate\">${\n  //                     product.first_category\n  //                 }</p>\n  //\n  //                 <span class=\"shopify__product-price\">${formatVND(\n  //                     product.price\n  //                 )}</span>\n  //               </div>\n  //             </div>\n  //           `;\n  //\n  //                 $(\"#collection__content-product-wapper\").append(productHtml);\n  //                 $(\"#card__product-loading-wapper\").addClass(\"under-active\");\n  //             });\n  //         }\n  //     },\n  // });\n\n  // $.ajax({\n  //     url: `${BASE_URL}/wp-json/custom-api/v1/categories`,\n  //     method: \"GET\",\n  //     success: function (response) {\n  //         if (response.categories) {\n  //             const categories = response.categories;\n  //             categories.forEach(function (category) {\n  //                 var categoryHtml = `\n  //           <label for=\"${category.slug}\" class=\"custom-select__option\">\n  //               <input type=\"checkbox\" name=\"category\" id=\"${category.slug}\" value=\"${category.slug}\" />\n  //               <span class=\"custom-select__option-label\">${category.name}</span>\n  //           </label>\n  //           `;\n  //\n  //                 $(\"#filter-category\").append(categoryHtml);\n  //             });\n  //         }\n  //     },\n  // });\n\n  //     $.ajax({\n  //         url: `${BASE_URL}/wp-json/custom-api/v1/attributes`,\n  //         method: \"GET\",\n  //         success: function (response) {\n  //             if (response.attributes) {\n  //                 const attributes = response.attributes;\n  //\n  //\n  //                 attributes.forEach(function (attribute) {\n  //                     var attributeHtml = `\n  //               <label for=\"${attribute.slug}\" class=\"custom-select__option\">\n  //                   <input type=\"checkbox\" name=\"category\" id=\"${attribute.slug}\" value=\"${attribute.slug}\" />\n  //                   <span class=\"custom-select__option-label\">${attribute.name}</span>\n  //               </label>\n  //               `;\n  //\n  //                     $(\"#filter-attribute\").append(attributeHtml);\n  //                 });\n  //             }\n  //         },\n  //     });\n});\n\n//# sourceURL=webpack://xpeed/./assets/js/pages/product.js?");

/***/ }),

/***/ "./assets/js/variable.js":
/*!*******************************!*\
  !*** ./assets/js/variable.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BASE_URL: () => (/* binding */ BASE_URL)\n/* harmony export */ });\nvar BASE_URL = \"http://localhost/WEB-XPEED-BE\";\n\n//# sourceURL=webpack://xpeed/./assets/js/variable.js?");

/***/ })

}]);