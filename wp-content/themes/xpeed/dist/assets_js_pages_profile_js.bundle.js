/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkxpeed"] = self["webpackChunkxpeed"] || []).push([["assets_js_pages_profile_js"],{

/***/ "./assets/js/pages/profile.js":
/*!************************************!*\
  !*** ./assets/js/pages/profile.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/* provided dependency */ var $ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n$(document).ready(function () {\n  var $button = $(\".menu__tablet-more\");\n  var $sidebar = $(\".account__sidebar\");\n  var $sidebarClose = $(\".sidebar__close-icon\");\n  if ($button.length) {\n    $button.click(function () {\n      $sidebar.addClass(\"active\");\n    });\n  }\n  if ($sidebarClose.length) {\n    $sidebarClose.click(function () {\n      $sidebar.removeClass(\"active\");\n    });\n  }\n});\n\n//# sourceURL=webpack://xpeed/./assets/js/pages/profile.js?");

/***/ })

}]);