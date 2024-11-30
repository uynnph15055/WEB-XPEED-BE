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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _loading_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.js */ \"./assets/js/loading.js\");\n/* provided dependency */ var $ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar APIHandler = /*#__PURE__*/function () {\n  function APIHandler() {\n    _classCallCheck(this, APIHandler);\n  }\n  return _createClass(APIHandler, null, [{\n    key: \"post\",\n    value: function post(url, data) {\n      var isLoading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n      _loading_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].show(); // Hiển thị loading nếu isLoading là true\n      console.log('isLoading', isLoading);\n      return $.ajax({\n        url: this.buildUrl(url),\n        method: 'POST',\n        contentType: 'application/json',\n        data: JSON.stringify(data)\n      }).always(function () {\n        if (isLoading) _loading_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hide(); // Ẩn loading sau khi hoàn thành call API\n      });\n    }\n  }, {\n    key: \"get\",\n    value: function get(url, data) {\n      var isLoading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n      if (isLoading) _loading_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].show(); // Hiển thị loading nếu isLoading là true\n      return $.ajax({\n        url: this.buildUrl(url),\n        method: 'GET',\n        contentType: 'application/json',\n        data: JSON.stringify(data)\n      }).always(function () {\n        if (isLoading) _loading_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hide(); // Ẩn loading sau khi hoàn thành call API\n      });\n    }\n  }, {\n    key: \"buildUrl\",\n    value: function buildUrl(url) {\n      url = baseUrl + url; // Thay thế baseUrl bằng URL cơ bản của bạn\n      console.log('url', url);\n      return url;\n    }\n  }]);\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (APIHandler);\n\n//# sourceURL=webpack://xpeed/./assets/js/apiHandler.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apiHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apiHandler.js */ \"./assets/js/apiHandler.js\");\n/* harmony import */ var _variable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variable.js */ \"./assets/js/variable.js\");\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common.js */ \"./assets/js/common.js\");\n/* provided dependency */ var $ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n// Import APIHandler\n\n\n\n$(document).ready(function () {\n  //--------------------------------------PRODUCT IMAGE----------------------------------\n  $(\".thumbnail-item__img\").on(\"click\", function () {\n    var src = $(this).attr(\"src\");\n    changeMainImage(src);\n    $(this).parent().addClass(\"active-thumbnail\");\n  });\n  function changeMainImage(src) {\n    var $mainImage = $(\"#mainImage\");\n    // Kiểm tra và thay đổi ảnh chính\n    if ($mainImage.attr(\"src\") !== src) {\n      $mainImage.attr(\"src\", src);\n    }\n\n    // Xóa class 'active-thumbnail' khỏi các thumbnail khác\n    $(\".thumbnail-item__wrapper\").removeClass(\"active-thumbnail\");\n  }\n\n  //--------------------------------------PRODUCT ADD CART----------------------------------\n  var productType = $(\".product-detail__title\").data(\"product-type\"); //simple || variable\n\n  if (productType == \"variable\") {\n    // Hàm để gọi API và lấy giá sản phẩm\n    var loadProductPrice = function loadProductPrice(product) {\n      var _product$image$src, _selectedVariation$di;\n      // Lấy giá trị size đã chọn\n      console.log('product', product.image.src);\n      changeMainImage((_product$image$src = product.image.src) !== null && _product$image$src !== void 0 ? _product$image$src : '');\n      var attributeKey = $(\".product-detail__size-options\").data(\"attribute-key\");\n      selectedVariation = product;\n      // Cập nhật giá sản phẩm lên giao diện\n      $(\".product-detail__price\").text(\"\".concat(((_selectedVariation$di = selectedVariation.display_price) !== null && _selectedVariation$di !== void 0 ? _selectedVariation$di : 0).toLocaleString(\"vi-VN\").replace(/\\./g, \",\"), \" \\u0111\"));\n    };\n    var _setupQuantityControls = function _setupQuantityControls(containerSelector) {\n      var container = $(containerSelector);\n\n      // Xử lý khi nhấn nút giảm\n      container.find(\".product-detail__quantity-decrease\").on(\"click\", function (e) {\n        e.preventDefault();\n\n        // Kiểm tra nếu selectedVariation hợp lệ và có max_qty và min_qty\n        if (!selectedVariation || !selectedVariation.max_qty || !selectedVariation.min_qty) {\n          console.warn(\"selectedVariation không hợp lệ.\");\n          return;\n        }\n        var input = $(this).siblings(\".product-detail__quantity-input\");\n        var currentValue = parseInt(input.val());\n\n        // Kiểm tra giới hạn số lượng tối thiểu\n        if (currentValue > 1) {\n          input.val(currentValue - 1);\n        }\n      });\n\n      // Xử lý khi nhấn nút tăng\n      container.find(\".product-detail__quantity-increase\").on(\"click\", function (e) {\n        e.preventDefault();\n\n        // Kiểm tra nếu selectedVariation hợp lệ và có max_qty và min_qty\n        if (!selectedVariation || !selectedVariation.max_qty || !selectedVariation.min_qty) {\n          console.warn(\"selectedVariation không hợp lệ.\");\n          return;\n        }\n        var input = $(this).siblings(\".product-detail__quantity-input\");\n        var currentValue = parseInt(input.val());\n\n        // Kiểm tra giới hạn số lượng tối đa\n        if (currentValue < selectedVariation.max_qty) {\n          input.val(currentValue + 1);\n        }\n      });\n\n      // Đảm bảo rằng giá trị không nhỏ hơn min_qty khi người dùng nhập thủ công\n      container.find(\".product-detail__quantity-input\").on(\"change\", function () {\n        // Kiểm tra nếu selectedVariation hợp lệ và có max_qty và min_qty\n        if (!selectedVariation || !selectedVariation.max_qty || !selectedVariation.min_qty) {\n          console.warn(\"selectedVariation không hợp lệ.\");\n          return;\n        }\n        var value = parseInt($(this).val());\n\n        // Giới hạn trong khoảng từ min_qty đến max_qty\n        if (isNaN(value) || value < selectedVariation.min_qty) {\n          $(this).val(selectedVariation.min_qty);\n        } else if (value > selectedVariation.max_qty) {\n          $(this).val(selectedVariation.max_qty);\n        }\n      });\n    };\n    var selectedVariation = [];\n    // Bắt sự kiện khi người dùng thay đổi thuộc tính sản phẩm (size, color, etc.)\n    $(\".product-detail__size-option\").on(\"change\", function () {\n      var product = $(this).data(\"attribute\");\n      loadProductPrice(product);\n    });\n    _setupQuantityControls(\".product-detail__quantity-controls\");\n    $(\".product-detail__add-to-cart\").on(\"click\", function () {\n      var userId = parseInt($(this).data('userid'), 10);\n      if (userId < 1) {\n        Swal.fire({\n          icon: \"error\",\n          title: \"Vui đăng nhập trước khi mua!\",\n          showConfirmButton: false,\n          timer: 3000\n        });\n        return;\n      }\n      // Lấy ID sản phẩm\n      var productId = $(\".product-detail__size\").data(\"product-id\");\n\n      // Lấy số lượng\n      var quantity = parseInt($(\".product-detail__quantity-input\").val());\n\n      // Lấy thuộc tính đã chọn (ví dụ: size)\n      var selectedAttributes = {};\n      $(\".product-detail__size-options\").each(function () {\n        var attributeKey = $(this).data(\"attribute-key\");\n        var selectedValue = $(this).find(\"input:checked\").val();\n        if (selectedValue) {\n          selectedAttributes[attributeKey] = selectedValue;\n        }\n      });\n\n      // Kiểm tra nếu không có thuộc tính nào được chọn\n      if (Object.keys(selectedAttributes).length === 0) {\n        Swal.fire({\n          icon: \"error\",\n          title: \"Vui lòng chọn sản phẩm!\",\n          showConfirmButton: false,\n          timer: 3000\n        });\n        return;\n      }\n\n      // Tạo đối tượng dữ liệu để gửi tới server\n      var data = [{\n        productId: selectedVariation.variation_id,\n        quantity: quantity,\n        variation: selectedAttributes\n      }];\n      // Gọi API để thêm sản phẩm vào giỏ hàng\n      _apiHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"/wp-json/custom-api/v1/add-to-cart\", data).done(function (response) {\n        Swal.fire({\n          icon: \"success\",\n          title: \"Sản phẩm đã được thêm vào giỏ hàng\",\n          showConfirmButton: false,\n          timer: 1500\n        }).then(function () {\n          $(\"#product-count\").text(Object.keys(response.data.session_cart).length);\n        });\n      }).fail(function (err) {\n        var _err$responseJSON$mes;\n        Swal.fire({\n          icon: \"error\",\n          title: (_err$responseJSON$mes = err.responseJSON.message) !== null && _err$responseJSON$mes !== void 0 ? _err$responseJSON$mes : \"Không thể thêm sản phẩm vào giỏ hàng. Vui lòng thử lại sau.\",\n          showConfirmButton: false,\n          timer: 3000\n        });\n      });\n    });\n    $(\".product-detail__buy-now\").on(\"click\", function () {\n      var userId = parseInt($(this).data('userid'), 10);\n      if (userId < 1) {\n        Swal.fire({\n          icon: \"error\",\n          title: \"Vui đăng nhập trước khi mua!\",\n          showConfirmButton: false,\n          timer: 3000\n        });\n        return;\n      }\n      // Lấy ID sản phẩm\n      var productId = $(\".product-detail__size\").data(\"product-id\");\n\n      // Lấy số lượng\n      var quantity = parseInt($(\".product-detail__quantity-input\").val());\n\n      // Lấy thuộc tính đã chọn (ví dụ: size)\n      var selectedAttributes = {};\n      $(\".product-detail__size-options\").each(function () {\n        var attributeKey = $(this).data(\"attribute-key\");\n        var selectedValue = $(this).find(\"input:checked\").val();\n        if (selectedValue) {\n          selectedAttributes[attributeKey] = selectedValue;\n        }\n      });\n\n      // Kiểm tra nếu không có thuộc tính nào được chọn\n      if (Object.keys(selectedAttributes).length === 0) {\n        Swal.fire({\n          icon: \"error\",\n          title: \"Vui lòng chọn sản phẩm!\",\n          showConfirmButton: false,\n          timer: 3000\n        });\n        return;\n      }\n\n      // Tạo đối tượng dữ liệu để gửi tới server\n      var data = [{\n        productId: selectedVariation.variation_id,\n        quantity: quantity,\n        variation: selectedAttributes\n      }];\n      // Gọi API để thêm sản phẩm vào giỏ hàng\n      _apiHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"/wp-json/custom-api/v1/add-order?userId=\" + userId, data).done(function (response) {\n        if (response.data.paymentUrl) {\n          window.location.href = response.data.paymentUrl;\n        }\n      }).fail(function (err) {\n        var _err$responseJSON$mes2;\n        Swal.fire({\n          icon: \"error\",\n          title: (_err$responseJSON$mes2 = err.responseJSON.message) !== null && _err$responseJSON$mes2 !== void 0 ? _err$responseJSON$mes2 : \"Không thể mua sản phẩm. Vui lòng thử lại sau.\",\n          showConfirmButton: false,\n          timer: 3000\n        });\n      });\n    });\n  } else if (productType == 'simple') {\n    // Hàm để gọi API và lấy giá sản phẩm\n    var _loadProductPrice = function _loadProductPrice(product) {\n      var _selectedVariation$di2;\n      // Lấy giá trị size đã chọn\n      var attributeKey = $(\".product-detail__size-options\").data(\"attribute-key\");\n      selectedVariation = product;\n      // Cập nhật giá sản phẩm lên giao diện\n      $(\".product-detail__price\").text(\"\".concat(((_selectedVariation$di2 = selectedVariation.display_price) !== null && _selectedVariation$di2 !== void 0 ? _selectedVariation$di2 : 0).toLocaleString(\"vi-VN\").replace(/\\./g, \",\"), \" \\u0111\"));\n    };\n    var _setupQuantityControls2 = function _setupQuantityControls2(containerSelector) {\n      var container = $(containerSelector);\n\n      // Xử lý khi nhấn nút giảm\n      container.find(\".product-detail__quantity-decrease\").on(\"click\", function (e) {\n        e.preventDefault();\n\n        // Kiểm tra nếu selectedVariation hợp lệ và có max_qty và min_qty\n        if (!selectedVariation || !selectedVariation.max_qty || !selectedVariation.min_qty) {\n          console.warn(\"selectedVariation không hợp lệ.\");\n          return;\n        }\n        var input = $(this).siblings(\".product-detail__quantity-input\");\n        var currentValue = parseInt(input.val());\n\n        // Kiểm tra giới hạn số lượng tối thiểu\n        if (currentValue > 1) {\n          input.val(currentValue - 1);\n        }\n      });\n\n      // Xử lý khi nhấn nút tăng\n      container.find(\".product-detail__quantity-increase\").on(\"click\", function (e) {\n        e.preventDefault();\n\n        // Kiểm tra nếu selectedVariation hợp lệ và có max_qty và min_qty\n        if (!selectedVariation || !selectedVariation.max_qty || !selectedVariation.min_qty) {\n          console.warn(\"selectedVariation không hợp lệ.\");\n          return;\n        }\n        var input = $(this).siblings(\".product-detail__quantity-input\");\n        var currentValue = parseInt(input.val());\n\n        // Kiểm tra giới hạn số lượng tối đa\n        if (currentValue < selectedVariation.max_qty) {\n          input.val(currentValue + 1);\n        }\n      });\n\n      // Đảm bảo rằng giá trị không nhỏ hơn min_qty khi người dùng nhập thủ công\n      container.find(\".product-detail__quantity-input\").on(\"change\", function () {\n        // Kiểm tra nếu selectedVariation hợp lệ và có max_qty và min_qty\n        if (!selectedVariation || !selectedVariation.max_qty || !selectedVariation.min_qty) {\n          console.warn(\"selectedVariation không hợp lệ.\");\n          return;\n        }\n        var value = parseInt($(this).val());\n\n        // Giới hạn trong khoảng từ min_qty đến max_qty\n        if (isNaN(value) || value < selectedVariation.min_qty) {\n          $(this).val(selectedVariation.min_qty);\n        } else if (value > selectedVariation.max_qty) {\n          $(this).val(selectedVariation.max_qty);\n        }\n      });\n    };\n    var dataProductSimple = $(\".product-detail__title\").data(\"product\");\n    _setupQuantityControls2(\".product-detail__quantity-controls\");\n    $(\".product-detail__add-to-cart\").on(\"click\", function () {\n      var userId = parseInt($(this).data('userid'), 10);\n      if (userId < 1) {\n        Swal.fire({\n          icon: \"error\",\n          title: \"Vui đăng nhập trước khi mua!\",\n          showConfirmButton: false,\n          timer: 3000\n        });\n        return;\n      }\n      // Lấy ID sản phẩm\n      var productId = dataProductSimple.id;\n\n      // Lấy số lượng\n      var quantity = parseInt($(\".product-detail__quantity-input\").val());\n\n      // Kiểm tra số lượng tồn kho\n      if (quantity > dataProductSimple.stock_quantity) {\n        Swal.fire({\n          icon: \"error\",\n          title: \"Số lượng yêu cầu vượt quá tồn kho!\",\n          showConfirmButton: false,\n          timer: 3000\n        });\n        return;\n      }\n\n      // Tạo đối tượng dữ liệu để gửi tới server\n      var data = [{\n        productId: productId,\n        quantity: quantity\n      }];\n\n      // Gọi API để thêm sản phẩm vào giỏ hàng\n      _apiHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"/wp-json/custom-api/v1/add-to-cart\", data).done(function (response) {\n        Swal.fire({\n          icon: \"success\",\n          title: \"Sản phẩm đã được thêm vào giỏ hàng\",\n          showConfirmButton: false,\n          timer: 1500\n        }).then(function () {\n          $(\"#product-count\").text(Object.keys(response.data.session_cart).length);\n        });\n      }).fail(function (err) {\n        var _err$responseJSON$mes3;\n        Swal.fire({\n          icon: \"error\",\n          title: (_err$responseJSON$mes3 = err.responseJSON.message) !== null && _err$responseJSON$mes3 !== void 0 ? _err$responseJSON$mes3 : \"Không thể thêm sản phẩm vào giỏ hàng. Vui lòng thử lại sau.\",\n          showConfirmButton: false,\n          timer: 3000\n        });\n      });\n    });\n    $(\".product-detail__buy-now\").on(\"click\", function () {\n      var userId = parseInt($(this).data('userid'), 10);\n      if (userId < 1) {\n        Swal.fire({\n          icon: \"error\",\n          title: \"Vui đăng nhập trước khi mua!\",\n          showConfirmButton: false,\n          timer: 3000\n        });\n        return;\n      }\n      // Lấy ID sản phẩm\n      var productId = dataProductSimple.id;\n\n      // Lấy số lượng\n      var quantity = parseInt($(\".product-detail__quantity-input\").val());\n\n      // Kiểm tra số lượng tồn kho\n      if (quantity > dataProductSimple.stock_quantity) {\n        Swal.fire({\n          icon: \"error\",\n          title: \"Số lượng yêu cầu vượt quá tồn kho!\",\n          showConfirmButton: false,\n          timer: 3000\n        });\n        return;\n      }\n\n      // Tạo đối tượng dữ liệu để gửi tới server\n      var data = [{\n        productId: productId,\n        quantity: quantity\n      }];\n\n      // Gọi API để thêm sản phẩm vào giỏ hàng\n      _apiHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"/wp-json/custom-api/v1/add-order?userId=\" + userId, data).done(function (response) {\n        if (response.data.paymentUrl) {\n          window.location.href = response.data.paymentUrl;\n        }\n      }).fail(function (err) {\n        var _err$responseJSON$mes4;\n        Swal.fire({\n          icon: \"error\",\n          title: (_err$responseJSON$mes4 = err.responseJSON.message) !== null && _err$responseJSON$mes4 !== void 0 ? _err$responseJSON$mes4 : \"Không thể thêm sản phẩm vào giỏ hàng. Vui lòng thử lại sau.\",\n          showConfirmButton: false,\n          timer: 3000\n        });\n      });\n    });\n    $(\".product-detail__add-to-cart\").on(\"click\", function () {\n      // Lấy ID sản phẩm\n      var productId = $(\".product-detail__size\").data(\"product-id\");\n\n      // Lấy số lượng\n      var quantity = parseInt($(\".product-detail__quantity-input\").val());\n\n      // Lấy thuộc tính đã chọn (ví dụ: size)\n      var selectedAttributes = {};\n      $(\".product-detail__size-options\").each(function () {\n        var attributeKey = $(this).data(\"attribute-key\");\n        var selectedValue = $(this).find(\"input:checked\").val();\n        if (selectedValue) {\n          selectedAttributes[attributeKey] = selectedValue;\n        }\n      });\n\n      // Kiểm tra nếu không có thuộc tính nào được chọn\n      if (Object.keys(selectedAttributes).length === 0) {\n        Swal.fire({\n          icon: \"error\",\n          title: \"Vui lòng chọn sản phẩm!\",\n          showConfirmButton: false,\n          timer: 3000\n        });\n        return;\n      }\n\n      // Tạo đối tượng dữ liệu để gửi tới server\n      var data = [{\n        productId: selectedVariation.variation_id,\n        quantity: quantity,\n        variation: selectedAttributes\n      }];\n      // Gọi API để thêm sản phẩm vào giỏ hàng\n      _apiHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(_variable_js__WEBPACK_IMPORTED_MODULE_1__.BASE_URL + \"/wp-json/custom-api/v1/add-to-cart\", data).done(function (response) {\n        Swal.fire({\n          icon: \"success\",\n          title: \"Sản phẩm đã được thêm vào giỏ hàng\",\n          showConfirmButton: false,\n          timer: 1500\n        }).then(function () {\n          $(\"#product-count\").text(Object.keys(response.data.session_cart).length);\n        });\n      }).fail(function (err) {\n        var _err$responseJSON$mes5;\n        Swal.fire({\n          icon: \"error\",\n          title: (_err$responseJSON$mes5 = err.responseJSON.message) !== null && _err$responseJSON$mes5 !== void 0 ? _err$responseJSON$mes5 : \"Không thể thêm sản phẩm vào giỏ hàng. Vui lòng thử lại sau.\",\n          showConfirmButton: false,\n          timer: 3000\n        });\n      });\n    });\n  }\n  function setupQuantityControls(containerSelector) {\n    var container = $(containerSelector);\n    container.find(\".product-detail__quantity-decrease\").on(\"click\", function (e) {\n      e.preventDefault();\n      var input = $(this).siblings(\".product-detail__quantity-input\");\n      var currentValue = parseInt(input.val());\n\n      // Kiểm tra giới hạn số lượng tối thiểu\n      if (currentValue > 1) {\n        input.val(currentValue - 1);\n      }\n    });\n    container.find(\".product-detail__quantity-increase\").on(\"click\", function (e) {\n      e.preventDefault();\n      var input = $(this).siblings(\".product-detail__quantity-input\");\n      var currentValue = parseInt(input.val());\n\n      // Kiểm tra số lượng tối đa dựa trên tồn kho của sản phẩm đơn giản\n      if (productType == \"simple\" && currentValue < dataProductSimple.stock_quantity) {\n        input.val(currentValue + 1);\n      } else if (productType == \"variable\" && selectedVariation && currentValue < selectedVariation.max_qty) {\n        input.val(currentValue + 1);\n      }\n    });\n    container.find(\".product-detail__quantity-input\").on(\"change\", function () {\n      var value = parseInt($(this).val());\n      if (productType == \"simple\") {\n        // Giới hạn trong khoảng từ 1 đến số lượng tồn kho\n        if (isNaN(value) || value < 1) {\n          $(this).val(1);\n        } else if (value > dataProductSimple.stock_quantity) {\n          $(this).val(dataProductSimple.stock_quantity);\n        }\n      } else if (productType == \"variable\" && selectedVariation) {\n        // Giới hạn trong khoảng từ min_qty đến max_qty\n        if (isNaN(value) || value < selectedVariation.min_qty) {\n          $(this).val(selectedVariation.min_qty);\n        } else if (value > selectedVariation.max_qty) {\n          $(this).val(selectedVariation.max_qty);\n        }\n      }\n    });\n  }\n\n  //--------------------------------------PRODUCT LIST----------------------------------\n\n  $(\"#card__product-loading-wapper\").removeClass(\"under-active\");\n  $.ajax({\n    url: \"\".concat(_variable_js__WEBPACK_IMPORTED_MODULE_1__.BASE_URL, \"/wp-json/custom-api/v1/products\"),\n    method: \"GET\",\n    success: function success(response) {\n      if (response.products) {\n        var dataProduct = response.products;\n        dataProduct.forEach(function (product) {\n          var productHtml = \"\\n                <div class=\\\"shopify__product\\\">\\n                  <a href=\\\"\".concat(product.url, \"\\\" class=\\\"shopify__product-image-wrapper\\\">\\n                    <span class=\\\"shopify__product-badge shopify__product-badge--new\\\">\").concat(product.first_tag, \"</span>\\n                    <img src=\\\"\").concat(product.image, \"\\\" alt=\\\"\").concat(product.title, \"\\\" class=\\\"shopify__product-image\\\" />\\n                  </a>\\n          \\n                  <div class=\\\"shopify__product-details\\\">\\n                    <h3 class=\\\"shopify__product-title\\\">\\n                      <a href=\\\"\").concat(product.url, \"\\\" class=\\\"shopify__product-link\\\">\").concat(product.title, \"</a>\\n                    </h3>\\n          \\n                    <p class=\\\"shopify__product-cate\\\">\").concat(product.first_category, \"</p>\\n          \\n                    <span class=\\\"shopify__product-price\\\">\").concat((0,_common_js__WEBPACK_IMPORTED_MODULE_2__.formatVND)(product.price), \"</span>\\n                  </div>\\n                </div>\\n              \");\n          $(\"#collection__content-product-wapper\").append(productHtml);\n          $(\"#card__product-loading-wapper\").addClass(\"under-active\");\n        });\n      }\n    }\n  });\n  $.ajax({\n    url: \"\".concat(_variable_js__WEBPACK_IMPORTED_MODULE_1__.BASE_URL, \"/wp-json/custom-api/v1/categories\"),\n    method: \"GET\",\n    success: function success(response) {\n      if (response.categories) {\n        var categories = response.categories;\n        categories.forEach(function (category) {\n          var categoryHtml = \"\\n              <label for=\\\"\".concat(category.slug, \"\\\" class=\\\"custom-select__option\\\">\\n                  <input type=\\\"checkbox\\\" name=\\\"category\\\" id=\\\"\").concat(category.slug, \"\\\" value=\\\"\").concat(category.slug, \"\\\" />\\n                  <span class=\\\"custom-select__option-label\\\">\").concat(category.name, \"</span>\\n              </label>\\n              \");\n          $(\"#filter-category\").append(categoryHtml);\n        });\n      }\n    }\n  });\n  $.ajax({\n    url: \"\".concat(_variable_js__WEBPACK_IMPORTED_MODULE_1__.BASE_URL, \"/wp-json/custom-api/v1/attributes\"),\n    method: \"GET\",\n    success: function success(response) {\n      if (response.attributes) {\n        var attributes = response.attributes;\n        console.log(attributes);\n        attributes.forEach(function (attribute) {\n          var attributeHtml = \"\\n              <label for=\\\"\".concat(attribute.slug, \"\\\" class=\\\"custom-select__option\\\">\\n                  <input type=\\\"checkbox\\\" name=\\\"category\\\" id=\\\"\").concat(attribute.slug, \"\\\" value=\\\"\").concat(attribute.slug, \"\\\" />\\n                  <span class=\\\"custom-select__option-label\\\">\").concat(attribute.name, \"</span>\\n              </label>\\n              \");\n          $(\"#filter-attribute\").append(attributeHtml);\n        });\n      }\n    }\n  });\n});\n\n//# sourceURL=webpack://xpeed/./assets/js/pages/product.js?");

/***/ }),

/***/ "./assets/js/variable.js":
/*!*******************************!*\
  !*** ./assets/js/variable.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BASE_URL: () => (/* binding */ BASE_URL)\n/* harmony export */ });\nvar BASE_URL = \"https://xpeed-helmets.com\";\n\n//# sourceURL=webpack://xpeed/./assets/js/variable.js?");

/***/ })

}]);