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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ \"./src/main.js\");\n/**\n * External dependencies.\n */\n\n\n/**\n * Internal dependencies.\n */\n\n\n(0,_carbon_fields_core__WEBPACK_IMPORTED_MODULE_0__.registerFieldType)('rich_text_no_media', _main__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n//# sourceURL=webpack://carbon-field-rich-text-no-media/./src/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);\n/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n\n\n\n\n\n\n\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(t).constructor) : o.apply(t, e)); }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\n/**\n * External dependencies.\n */\n\n\n\n\nvar RichTextNoMediaField = /*#__PURE__*/function (_Component) {\n  /**\n   * Define the project base properties\n   *\n   * @return {void}\n   */\n  function RichTextNoMediaField() {\n    var _this;\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, RichTextNoMediaField);\n    _this = _callSuper(this, RichTextNoMediaField);\n    /**\n     * Handles the change of the input.\n     *\n     * @param  {Object|string} eventOrValue\n     * @return {void}\n     */\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_this, \"handleChange\", function (eventOrValue) {\n      var _this$props = _this.props,\n        id = _this$props.id,\n        onChange = _this$props.onChange;\n      onChange(id, (0,lodash__WEBPACK_IMPORTED_MODULE_9__.isString)(eventOrValue) ? eventOrValue : eventOrValue.target.value);\n    });\n    /**\n     * Initialize the WYSIWYG editor.\n     *\n     * @return {void}\n     */\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_this, \"initEditor\", function () {\n      var _this$props2 = _this.props,\n        id = _this$props2.id,\n        field = _this$props2.field;\n      if (field.rich_editing) {\n        var editorSetup = function editorSetup(editor) {\n          _this.editor = editor;\n          editor.on('blur Change', function () {\n            editor.save();\n            _this.handleChange(editor.getContent());\n          });\n        };\n        var editorOptions = _objectSpread(_objectSpread({}, window.tinyMCEPreInit.mceInit.carbon_settings), {}, {\n          selector: \"#\".concat(id),\n          setup: editorSetup\n        });\n        window.tinymce.init(editorOptions);\n      }\n      var quickTagsOptions = _objectSpread(_objectSpread({}, window.tinyMCEPreInit), {}, {\n        id: id\n      });\n      window.quicktags(quickTagsOptions);\n\n      // Force the initialization of the quick tags.\n      window.QTags._buttonsInit();\n    });\n    _this.node = null;\n    _this.editor = null;\n    _this.cancelResizeObserver = null;\n    return _this;\n  }\n\n  /**\n   * Lifecycle hook.\n   *\n   * @return {void}\n   */\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(RichTextNoMediaField, _Component);\n  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(RichTextNoMediaField, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      if (this.props.visible) {\n        this.timer = setTimeout(this.initEditor, 250);\n      }\n    }\n\n    /**\n     * Lifecycle hook.\n     *\n     * @return {void}\n     */\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      clearTimeout(this.timer);\n      this.destroyEditor();\n    }\n  }, {\n    key: \"render\",\n    value:\n    /**\n     * Renders the component.\n     *\n     * @return {Object}\n     */\n    function render() {\n      var _this2 = this;\n      var _this$props3 = this.props,\n        id = _this$props3.id,\n        name = _this$props3.name,\n        value = _this$props3.value,\n        field = _this$props3.field;\n      var classes = ['carbon-wysiwyg', 'wp-editor-wrap', {\n        'tmce-active': field.rich_editing\n      }, {\n        'html-active': !field.rich_editing\n      }];\n      var mediaButtonsHTML = field.media_buttons ? (0,lodash__WEBPACK_IMPORTED_MODULE_9__.template)(field.media_buttons)({\n        id: id\n      }) : null;\n      return __webpack_provided_wp_dot_element.createElement(\"div\", {\n        id: \"wp-\".concat(id, \"-wrap\"),\n        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(classes),\n        ref: function ref(node) {\n          return _this2.editorNode = node;\n        }\n      }, field.media_buttons && __webpack_provided_wp_dot_element.createElement(\"div\", {\n        id: \"wp-\".concat(id, \"-media-buttons\"),\n        className: \"hide-if-no-js wp-media-buttons\"\n      }, __webpack_provided_wp_dot_element.createElement(\"span\", {\n        dangerouslySetInnerHTML: {\n          __html: mediaButtonsHTML\n        }\n      })), field.rich_editing && __webpack_provided_wp_dot_element.createElement(\"div\", {\n        className: \"wp-editor-tabs\"\n      }, __webpack_provided_wp_dot_element.createElement(\"button\", {\n        type: \"button\",\n        id: \"\".concat(id, \"-tmce\"),\n        className: \"wp-switch-editor switch-tmce\",\n        \"data-wp-editor-id\": id\n      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Visual', 'carbon-fields-ui')), __webpack_provided_wp_dot_element.createElement(\"button\", {\n        type: \"button\",\n        id: \"\".concat(id, \"-html\"),\n        className: \"wp-switch-editor switch-html\",\n        \"data-wp-editor-id\": id\n      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Text', 'carbon-fields-ui'))), __webpack_provided_wp_dot_element.createElement(\"div\", {\n        id: \"wp-\".concat(id, \"-editor-container\"),\n        className: \"wp-editor-container\"\n      }, __webpack_provided_wp_dot_element.createElement(\"textarea\", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        style: {\n          width: '100%'\n        },\n        className: \"regular-text\",\n        id: id,\n        name: name,\n        value: value,\n        onChange: this.handleChange\n      }, field.attributes))));\n    }\n  }, {\n    key: \"destroyEditor\",\n    value:\n    /**\n     * Destroy the instance of the WYSIWYG editor.\n     *\n     * @return {void}\n     */\n    function destroyEditor() {\n      if (this.editor) {\n        this.editor.remove();\n        this.node = null;\n        this.editor = null;\n      }\n      delete window.QTags.instances[this.props.id];\n    }\n  }]);\n}(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.Component);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RichTextNoMediaField);\n\n//# sourceURL=webpack://carbon-field-rich-text-no-media/./src/main.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (() => {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://carbon-field-rich-text-no-media/./src/style.scss?");

/***/ }),

/***/ "@carbon-fields/core":
/*!**************************!*\
  !*** external "cf.core" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = cf.core;

/***/ }),

/***/ "@wordpress/element":
/*!**************************************************!*\
  !*** external "cf.vendor['@wordpress/element']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = cf.vendor['@wordpress/element'];

/***/ }),

/***/ "@wordpress/i18n":
/*!***********************************************!*\
  !*** external "cf.vendor['@wordpress/i18n']" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = cf.vendor['@wordpress/i18n'];

/***/ }),

/***/ "classnames":
/*!******************************************!*\
  !*** external "cf.vendor['classnames']" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = cf.vendor['classnames'];

/***/ }),

/***/ "lodash":
/*!**************************************!*\
  !*** external "cf.vendor['lodash']" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = cf.vendor['lodash'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _assertThisInitialized)\n/* harmony export */ });\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n  return self;\n}\n\n//# sourceURL=webpack://carbon-field-rich-text-no-media/./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://carbon-field-rich-text-no-media/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\n/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js\");\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(descriptor.key), descriptor);\n  }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  Object.defineProperty(Constructor, \"prototype\", {\n    writable: false\n  });\n  return Constructor;\n}\n\n//# sourceURL=webpack://carbon-field-rich-text-no-media/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _defineProperty)\n/* harmony export */ });\n/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js\");\n\nfunction _defineProperty(obj, key, value) {\n  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(key);\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n  return obj;\n}\n\n//# sourceURL=webpack://carbon-field-rich-text-no-media/./node_modules/@babel/runtime/helpers/esm/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _extends)\n/* harmony export */ });\nfunction _extends() {\n  _extends = Object.assign ? Object.assign.bind() : function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n    return target;\n  };\n  return _extends.apply(this, arguments);\n}\n\n//# sourceURL=webpack://carbon-field-rich-text-no-media/./node_modules/@babel/runtime/helpers/esm/extends.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _getPrototypeOf)\n/* harmony export */ });\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\n//# sourceURL=webpack://carbon-field-rich-text-no-media/./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _inherits)\n/* harmony export */ });\n/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ \"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js\");\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  Object.defineProperty(subClass, \"prototype\", {\n    writable: false\n  });\n  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subClass, superClass);\n}\n\n//# sourceURL=webpack://carbon-field-rich-text-no-media/./node_modules/@babel/runtime/helpers/esm/inherits.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _possibleConstructorReturn)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  } else if (call !== void 0) {\n    throw new TypeError(\"Derived constructors may only return object or undefined\");\n  }\n  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(self);\n}\n\n//# sourceURL=webpack://carbon-field-rich-text-no-media/./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _setPrototypeOf)\n/* harmony export */ });\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n  return _setPrototypeOf(o, p);\n}\n\n//# sourceURL=webpack://carbon-field-rich-text-no-media/./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toPrimitive)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n\nfunction toPrimitive(t, r) {\n  if (\"object\" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(t) || !t) return t;\n  var e = t[Symbol.toPrimitive];\n  if (void 0 !== e) {\n    var i = e.call(t, r || \"default\");\n    if (\"object\" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i)) return i;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (\"string\" === r ? String : Number)(t);\n}\n\n//# sourceURL=webpack://carbon-field-rich-text-no-media/./node_modules/@babel/runtime/helpers/esm/toPrimitive.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toPropertyKey)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ \"./node_modules/@babel/runtime/helpers/esm/toPrimitive.js\");\n\n\nfunction toPropertyKey(t) {\n  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(t, \"string\");\n  return \"symbol\" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i) ? i : i + \"\";\n}\n\n//# sourceURL=webpack://carbon-field-rich-text-no-media/./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(o) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) {\n    return typeof o;\n  } : function (o) {\n    return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o;\n  }, _typeof(o);\n}\n\n//# sourceURL=webpack://carbon-field-rich-text-no-media/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;