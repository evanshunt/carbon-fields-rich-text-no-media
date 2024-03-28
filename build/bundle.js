/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n  return self;\n}\nmodule.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/assertThisInitialized.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\nmodule.exports = _classCallCheck, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/toPropertyKey.js\");\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);\n  }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  Object.defineProperty(Constructor, \"prototype\", {\n    writable: false\n  });\n  return Constructor;\n}\nmodule.exports = _createClass, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/toPropertyKey.js\");\nfunction _defineProperty(obj, key, value) {\n  key = toPropertyKey(key);\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n  return obj;\n}\nmodule.exports = _defineProperty, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _extends() {\n  module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n    return target;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n  return _extends.apply(this, arguments);\n}\nmodule.exports = _extends, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/extends.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _getPrototypeOf(o) {\n  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n  return _getPrototypeOf(o);\n}\nmodule.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/getPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ \"./node_modules/@babel/runtime/helpers/setPrototypeOf.js\");\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  Object.defineProperty(subClass, \"prototype\", {\n    writable: false\n  });\n  if (superClass) setPrototypeOf(subClass, superClass);\n}\nmodule.exports = _inherits, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/inherits.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"];\nvar assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  } else if (call !== void 0) {\n    throw new TypeError(\"Derived constructors may only return object or undefined\");\n  }\n  return assertThisInitialized(self);\n}\nmodule.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _setPrototypeOf(o, p) {\n  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n  return _setPrototypeOf(o, p);\n}\nmodule.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/setPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPrimitive.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"];\nfunction toPrimitive(t, r) {\n  if (\"object\" != _typeof(t) || !t) return t;\n  var e = t[Symbol.toPrimitive];\n  if (void 0 !== e) {\n    var i = e.call(t, r || \"default\");\n    if (\"object\" != _typeof(i)) return i;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (\"string\" === r ? String : Number)(t);\n}\nmodule.exports = toPrimitive, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/toPrimitive.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPropertyKey.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"];\nvar toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ \"./node_modules/@babel/runtime/helpers/toPrimitive.js\");\nfunction toPropertyKey(t) {\n  var i = toPrimitive(t, \"string\");\n  return \"symbol\" == _typeof(i) ? i : i + \"\";\n}\nmodule.exports = toPropertyKey, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/toPropertyKey.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(o) {\n  \"@babel/helpers - typeof\";\n\n  return (module.exports = _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) {\n    return typeof o;\n  } : function (o) {\n    return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports), _typeof(o);\n}\nmodule.exports = _typeof, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/* harmony import */ var _carbon_fields_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ \"./src/main.js\");\n/**\n * External dependencies.\n */\n\n\n/**\n * Internal dependencies.\n */\n\n\nObject(_carbon_fields_core__WEBPACK_IMPORTED_MODULE_0__[\"registerFieldType\"])('rich_text_no_media', _main__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__webpack_provided_wp_dot_element) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(t).constructor) : o.apply(t, e)); }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\n/**\n * External dependencies.\n */\n\n\n\n\nvar RichTextNoMediaField = /*#__PURE__*/function (_Component) {\n  /**\n   * Define the project base properties\n   *\n   * @return {void}\n   */\n  function RichTextNoMediaField() {\n    var _this;\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, RichTextNoMediaField);\n    _this = _callSuper(this, RichTextNoMediaField);\n    /**\n     * Handles the change of the input.\n     *\n     * @param  {Object|string} eventOrValue\n     * @return {void}\n     */\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_this, \"handleChange\", function (eventOrValue) {\n      var _this$props = _this.props,\n        id = _this$props.id,\n        onChange = _this$props.onChange;\n      onChange(id, Object(lodash__WEBPACK_IMPORTED_MODULE_9__[\"isString\"])(eventOrValue) ? eventOrValue : eventOrValue.target.value);\n    });\n    /**\n     * Initialize the WYSIWYG editor.\n     *\n     * @return {void}\n     */\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_this, \"initEditor\", function () {\n      var _this$props2 = _this.props,\n        id = _this$props2.id,\n        field = _this$props2.field;\n      if (field.rich_editing) {\n        var editorSetup = function editorSetup(editor) {\n          _this.editor = editor;\n          editor.on('blur Change', function () {\n            editor.save();\n            _this.handleChange(editor.getContent());\n          });\n        };\n        var editorOptions = _objectSpread(_objectSpread({}, window.tinyMCEPreInit.mceInit.carbon_settings), {}, {\n          selector: \"#\".concat(id),\n          setup: editorSetup\n        });\n        window.tinymce.init(editorOptions);\n      }\n      var quickTagsOptions = _objectSpread(_objectSpread({}, window.tinyMCEPreInit), {}, {\n        id: id\n      });\n      window.quicktags(quickTagsOptions);\n\n      // Force the initialization of the quick tags.\n      window.QTags._buttonsInit();\n    });\n    _this.node = null;\n    _this.editor = null;\n    _this.cancelResizeObserver = null;\n    return _this;\n  }\n\n  /**\n   * Lifecycle hook.\n   *\n   * @return {void}\n   */\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(RichTextNoMediaField, _Component);\n  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(RichTextNoMediaField, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      if (this.props.visible) {\n        this.timer = setTimeout(this.initEditor, 250);\n      }\n    }\n\n    /**\n     * Lifecycle hook.\n     *\n     * @return {void}\n     */\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      clearTimeout(this.timer);\n      this.destroyEditor();\n    }\n  }, {\n    key: \"render\",\n    value:\n    /**\n     * Renders the component.\n     *\n     * @return {Object}\n     */\n    function render() {\n      var _this2 = this;\n      var _this$props3 = this.props,\n        id = _this$props3.id,\n        name = _this$props3.name,\n        value = _this$props3.value,\n        field = _this$props3.field;\n      var classes = ['carbon-wysiwyg', 'wp-editor-wrap', {\n        'tmce-active': field.rich_editing\n      }, {\n        'html-active': !field.rich_editing\n      }];\n      var mediaButtonsHTML = field.media_buttons ? Object(lodash__WEBPACK_IMPORTED_MODULE_9__[\"template\"])(field.media_buttons)({\n        id: id\n      }) : null;\n      return __webpack_provided_wp_dot_element.createElement(\"div\", {\n        id: \"wp-\".concat(id, \"-wrap\"),\n        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(classes),\n        ref: function ref(node) {\n          return _this2.editorNode = node;\n        }\n      }, field.media_buttons && __webpack_provided_wp_dot_element.createElement(\"div\", {\n        id: \"wp-\".concat(id, \"-media-buttons\"),\n        className: \"hide-if-no-js wp-media-buttons\"\n      }, __webpack_provided_wp_dot_element.createElement(\"span\", {\n        dangerouslySetInnerHTML: {\n          __html: mediaButtonsHTML\n        }\n      })), field.rich_editing && __webpack_provided_wp_dot_element.createElement(\"div\", {\n        className: \"wp-editor-tabs\"\n      }, __webpack_provided_wp_dot_element.createElement(\"button\", {\n        type: \"button\",\n        id: \"\".concat(id, \"-tmce\"),\n        className: \"wp-switch-editor switch-tmce\",\n        \"data-wp-editor-id\": id\n      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__[\"__\"])('Visual', 'carbon-fields-ui')), __webpack_provided_wp_dot_element.createElement(\"button\", {\n        type: \"button\",\n        id: \"\".concat(id, \"-html\"),\n        className: \"wp-switch-editor switch-html\",\n        \"data-wp-editor-id\": id\n      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__[\"__\"])('Text', 'carbon-fields-ui'))), __webpack_provided_wp_dot_element.createElement(\"div\", {\n        id: \"wp-\".concat(id, \"-editor-container\"),\n        className: \"wp-editor-container\"\n      }, __webpack_provided_wp_dot_element.createElement(\"textarea\", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n        style: {\n          width: '100%'\n        },\n        className: \"regular-text\",\n        id: id,\n        name: name,\n        value: value,\n        onChange: this.handleChange\n      }, field.attributes))));\n    }\n  }, {\n    key: \"destroyEditor\",\n    value:\n    /**\n     * Destroy the instance of the WYSIWYG editor.\n     *\n     * @return {void}\n     */\n    function destroyEditor() {\n      if (this.editor) {\n        this.editor.remove();\n        this.node = null;\n        this.editor = null;\n      }\n      delete window.QTags.instances[this.props.id];\n    }\n  }]);\n}(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (RichTextNoMediaField);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\")))\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ }),

/***/ "@carbon-fields/core":
/*!**************************!*\
  !*** external "cf.core" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = cf.core;\n\n//# sourceURL=webpack:///external_%22cf.core%22?");

/***/ }),

/***/ "@wordpress/element":
/*!**************************************************!*\
  !*** external "cf.vendor['@wordpress/element']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = cf.vendor['@wordpress/element'];\n\n//# sourceURL=webpack:///external_%22cf.vendor%5B'@wordpress/element'%5D%22?");

/***/ }),

/***/ "@wordpress/i18n":
/*!***********************************************!*\
  !*** external "cf.vendor['@wordpress/i18n']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = cf.vendor['@wordpress/i18n'];\n\n//# sourceURL=webpack:///external_%22cf.vendor%5B'@wordpress/i18n'%5D%22?");

/***/ }),

/***/ "classnames":
/*!******************************************!*\
  !*** external "cf.vendor['classnames']" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = cf.vendor['classnames'];\n\n//# sourceURL=webpack:///external_%22cf.vendor%5B'classnames'%5D%22?");

/***/ }),

/***/ "lodash":
/*!**************************************!*\
  !*** external "cf.vendor['lodash']" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = cf.vendor['lodash'];\n\n//# sourceURL=webpack:///external_%22cf.vendor%5B'lodash'%5D%22?");

/***/ })

/******/ });