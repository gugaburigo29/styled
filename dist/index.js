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

/***/ "./src/helpers/camel-to-dashed.js":
/*!****************************************!*\
  !*** ./src/helpers/camel-to-dashed.js ***!
  \****************************************/
/*! exports provided: camelCaseToDashed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"camelCaseToDashed\", function() { return camelCaseToDashed; });\n/**\r\n * @description Receive the string camel case and return dashed\r\n * @param {string} camel\r\n * @return {string}\r\n */\r\nfunction camelCaseToDashed(camel) {\r\n    return camel.replace(/[A-Z]/g, '-$&').toLowerCase()\r\n}\r\n\n\n//# sourceURL=webpack:///./src/helpers/camel-to-dashed.js?");

/***/ }),

/***/ "./src/helpers/concat-strings.js":
/*!***************************************!*\
  !*** ./src/helpers/concat-strings.js ***!
  \***************************************/
/*! exports provided: concatStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"concatStrings\", function() { return concatStrings; });\n/**\r\n * @description concat all strings pass in parameter\r\n * @param {string} strings\r\n */\r\nfunction concatStrings(...strings) {\r\n    return strings.join('');\r\n}\n\n//# sourceURL=webpack:///./src/helpers/concat-strings.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tag */ \"./src/modules/tag/index.js\");\n/* harmony import */ var _modules_CSScript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/CSScript */ \"./src/modules/CSScript/index.js\");\n\r\n\r\n\r\nwindow.tag = _modules_tag__WEBPACK_IMPORTED_MODULE_0__[\"tag\"];\r\nwindow.CSScript = _modules_CSScript__WEBPACK_IMPORTED_MODULE_1__[\"CSScript\"];\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/CSScript/convert-object-to-string.js":
/*!**********************************************************!*\
  !*** ./src/modules/CSScript/convert-object-to-string.js ***!
  \**********************************************************/
/*! exports provided: convertObjectToString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertObjectToString\", function() { return convertObjectToString; });\n/* harmony import */ var _helpers_camel_to_dashed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/camel-to-dashed */ \"./src/helpers/camel-to-dashed.js\");\n\r\n\r\nconst KEYS_NO_VALIDATE = ['element', 'selector'];\r\n\r\n/**\r\n * @description conver the object to string\r\n * @param {Object} object\r\n * @return string\r\n */\r\nfunction convertObjectToString(object){\r\n    let string = '';\r\n\r\n    for (const key in object) {\r\n        if (object.hasOwnProperty(key) && noValidate(KEYS_NO_VALIDATE, key)) {\r\n            const value = object[key];\r\n            string += `${Object(_helpers_camel_to_dashed__WEBPACK_IMPORTED_MODULE_0__[\"camelCaseToDashed\"])(key)}: ${value};`;\r\n        }\r\n    }\r\n\r\n    return string;\r\n}\r\n\r\n/**\r\n * @description Validate values\r\n * @param {Array} validates\r\n * @param {string|number} value\r\n * @return boolean\r\n */\r\nfunction noValidate(validates, value){\r\n    return !validates.includes(value);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/modules/CSScript/convert-object-to-string.js?");

/***/ }),

/***/ "./src/modules/CSScript/create-element.js":
/*!************************************************!*\
  !*** ./src/modules/CSScript/create-element.js ***!
  \************************************************/
/*! exports provided: createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tag */ \"./src/modules/tag/index.js\");\n/**\r\n * @description create element and insert className\r\n * @param {string} element\r\n * @param {string} className\r\n * @return\r\n */\r\n\r\n\r\nfunction createElement(element, className){\r\n    const $el = document.createElement(element);\r\n    $el.classList.add(className);\r\n\r\n    return returnTypeElement($el);\r\n}\r\n\r\n/**\r\n * @param $el\r\n * @return {{getElement: HTMLElement, appendElement: (function(*=): {getElement: *, appendElement})}}\r\n */\r\nfunction returnTypeElement($el) {\r\n    return {\r\n        appendStyle: appendStyle($el),\r\n        appendElement: appendElement($el),\r\n        getElement: $el\r\n    }\r\n}\r\n\r\n/**\r\n * @description Receive a Array of HTMLElements and return types for Element\r\n * @param {HTMLElement} $el\r\n * @return {Function}\r\n */\r\nfunction appendElement($el) {\r\n    return (...$arrElement) => {\r\n        $arrElement.forEach( $newElement => $el.appendChild($newElement));\r\n        return returnTypeElement($el);\r\n    }\r\n}\r\n\r\nfunction appendStyle($el) {\r\n    return (...style) => {\r\n        const className = Object(_tag__WEBPACK_IMPORTED_MODULE_0__[\"tag\"])(style);\r\n        $el.classList.add(className);\r\n        return returnTypeElement($el);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/modules/CSScript/create-element.js?");

/***/ }),

/***/ "./src/modules/CSScript/index.js":
/*!***************************************!*\
  !*** ./src/modules/CSScript/index.js ***!
  \***************************************/
/*! exports provided: CSScript */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CSScript\", function() { return CSScript; });\n/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tag */ \"./src/modules/tag/index.js\");\n/* harmony import */ var _modules_CSScript_convert_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/CSScript/convert-object-to-string */ \"./src/modules/CSScript/convert-object-to-string.js\");\n/* harmony import */ var _modules_CSScript_create_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/CSScript/create-element */ \"./src/modules/CSScript/create-element.js\");\n/* harmony import */ var _tag_Colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tag/Colors */ \"./src/modules/tag/Colors.js\");\n\r\n\r\n\r\n\r\n\r\nconst tagsHTML = ['div', 'section', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'p', 'header', 'footer', 'main'];\r\n\r\n/**\r\n * Type Style\r\n * @typedef {Object<string>} Style\r\n * @property {'div'|'span'|'h1'} element The element HTML create.\r\n */\r\n/**\r\n * @description Generate CSS, add style in DOM and create Element\r\n * @param {string|Object|Style} styles\r\n * @return string | HTMLElement\r\n */\r\nfunction CSScript(styles) {\r\n    if (typeof styles === 'object' && Array.isArray(styles)) {\r\n        return Object(_tag__WEBPACK_IMPORTED_MODULE_0__[\"tag\"])(styles);\r\n    } else if (typeof styles === 'object') {\r\n        const styleConverted = Object(_modules_CSScript_convert_object_to_string__WEBPACK_IMPORTED_MODULE_1__[\"convertObjectToString\"])(styles);\r\n        const className = Object(_tag__WEBPACK_IMPORTED_MODULE_0__[\"tag\"])([styleConverted]);\r\n        return verifyIfCreateElement(styles, className);\r\n    } else if (typeof styles === 'string') {\r\n        return Object(_tag__WEBPACK_IMPORTED_MODULE_0__[\"tag\"])([styles]);\r\n    }\r\n}\r\n\r\n/**\r\n * Static property to get all colors\r\n */\r\nCSScript.colors = _tag_Colors__WEBPACK_IMPORTED_MODULE_3__[\"colors\"];\r\n\r\n/**\r\n * Create function execute all tags HTML\r\n */\r\ntagsHTML.forEach(tag => {\r\n    CSScript[tag] = executeCSScriptWithTagHTML(tag);\r\n});\r\n\r\n\r\n\r\nfunction executeCSScriptWithTagHTML(tag) {\r\n    return (style) => {\r\n        if (typeof style === 'object' && Array.isArray(style)) {\r\n            const classname = CSScript(style);\r\n            return Object(_modules_CSScript_create_element__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])(tag, classname);\r\n        } else if (typeof style === 'object') {\r\n            style.element = tag;\r\n            return CSScript(style);\r\n        }\r\n    }\r\n}\r\n\r\n/**\r\n * @description verify if create element or return the classname\r\n * @param {Object} styles\r\n * @param {string} className\r\n * @return HTMLElement | string\r\n */\r\nfunction verifyIfCreateElement(styles, className) {\r\n    if (styles.selector && !styles.element) {\r\n        throw new Error('Ao informar a propiedade target a selector element deve ser obrigatoria');\r\n    } else if (styles.element && !styles.selector) {\r\n        return Object(_modules_CSScript_create_element__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])(styles.element, className);\r\n    } else if (styles.element && styles.selector) {\r\n        const $node = Object(_modules_CSScript_create_element__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])(styles.element, className);\r\n        insertNodeInTarget($node, styles.selector);\r\n        return $node;\r\n    }\r\n\r\n    return className;\r\n}\r\n\r\n/**\r\n * @description Insert node in DOM\r\n * @param {HTMLElement} node\r\n * @param {string} selector\r\n */\r\nfunction insertNodeInTarget(node, selector) {\r\n    const $target = document.querySelector(selector);\r\n    $target.appendChild(node.getElement);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/modules/CSScript/index.js?");

/***/ }),

/***/ "./src/modules/tag/Colors.js":
/*!***********************************!*\
  !*** ./src/modules/tag/Colors.js ***!
  \***********************************/
/*! exports provided: colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"colors\", function() { return colors; });\n// All colors\r\nconst colors = {\r\n    RED: '#ff0000',\r\n    GREEN: '#00ff00',\r\n    BLUE: '#0000ff',\r\n    YELLOW: '#ffff00',\r\n    ORANGE: '#ff5500'\r\n};\r\n\r\n// Implementar conversão de cores para hexadecimal e rgba\r\n\n\n//# sourceURL=webpack:///./src/modules/tag/Colors.js?");

/***/ }),

/***/ "./src/modules/tag/create-class-name.js":
/*!**********************************************!*\
  !*** ./src/modules/tag/create-class-name.js ***!
  \**********************************************/
/*! exports provided: hasClassInCache, createClassName, randomName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasClassInCache\", function() { return hasClassInCache; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createClassName\", function() { return createClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomName\", function() { return randomName; });\n/**\r\n * @type {Array<string>}\r\n */\r\nconst cache = [];\r\n\r\n/**\r\n * @type {string}\r\n */\r\nconst allLetters = \"ABCDDEFGHIJKLMNOPQRSTUVXZWYabcdefghijklmnopqrsuvxzwy\";\r\n\r\n/**\r\n * @description add clas name in cache\r\n * @param {string} className\r\n * @return {number}\r\n */\r\nconst addClassNameInCache = (className) => cache.push(className);\r\n\r\n/**\r\n * @description return a boolean value if exist class in cache\r\n * @param {string} className\r\n * @return {boolean}\r\n */\r\nconst hasClassInCache = (className) => cache.includes(className);\r\n\r\n/**\r\n * @description create random class name\r\n * @param {number} length\r\n * @return {{name: string, className: string}}\r\n */\r\nfunction createClassName(length) {\r\n    let name = randomName(length);\r\n\r\n    do {\r\n        name = randomName(length);\r\n    } while (hasClassInCache(name));\r\n\r\n    addClassNameInCache(name);\r\n\r\n    return {\r\n        name,\r\n        className: className(name)\r\n    };\r\n}\r\n\r\n/**\r\n * @description generate a random name\r\n * @param {number} length\r\n * @return {string}\r\n */\r\nfunction randomName(length) {\r\n    const lengthLetters = allLetters.length - 1;\r\n    const randomNumber = (length) => Math.round(Math.random() * length);\r\n    let name = '';\r\n\r\n    for (let i = 0; i < length; i++) {\r\n        name += allLetters[randomNumber(lengthLetters)];\r\n    }\r\n\r\n    return name;\r\n}\r\n\r\n/**\r\n * @param {string} className\r\n * @return {string}\r\n */\r\nfunction className(className) {\r\n    return `.${className}`;\r\n}\n\n//# sourceURL=webpack:///./src/modules/tag/create-class-name.js?");

/***/ }),

/***/ "./src/modules/tag/create-style-string.js":
/*!************************************************!*\
  !*** ./src/modules/tag/create-style-string.js ***!
  \************************************************/
/*! exports provided: createStyleString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createStyleString\", function() { return createStyleString; });\n/* harmony import */ var _Colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Colors */ \"./src/modules/tag/Colors.js\");\n\r\n\r\n/**\r\n * @type {{colors: {red, orange, green, blue, yellow}}}\r\n */\r\nconst parameters = {\r\n  colors: _Colors__WEBPACK_IMPORTED_MODULE_0__[\"colors\"]\r\n};\r\n\r\n/**\r\n * @description Receive a string with styles and return whit all formatters\r\n * @param {Array<string>} styles\r\n * @return string\r\n */\r\nfunction createStyleString(styles) {\r\n    const styleArray = styles.map((css, i, array) => {\r\n        if (typeof css === 'object') {\r\n            return css;\r\n        } else if (typeof css === 'function') {\r\n            return css(parameters);\r\n        }\r\n    });\r\n\r\n    const styleString = styleArray.join('');\r\n    const styleSplitForBreakLines = styleString.split(',');\r\n    const stringReplaced = removeCommaAndReturnString(styleSplitForBreakLines);\r\n\r\n    return addKeysInStyle(stringReplaced);\r\n}\r\n\r\n/**\r\n * @param {Array} array\r\n * @return string\r\n */\r\nfunction removeCommaAndReturnString(array) {\r\n    return array.filter(arr => arr !== ',').join('')\r\n}\r\n\r\n/**\r\n * @param {string} style\r\n * @return {string}\r\n */\r\nfunction addKeysInStyle(style) {\r\n    return `{${style}}\\n`\r\n}\r\n\n\n//# sourceURL=webpack:///./src/modules/tag/create-style-string.js?");

/***/ }),

/***/ "./src/modules/tag/index.js":
/*!**********************************!*\
  !*** ./src/modules/tag/index.js ***!
  \**********************************/
/*! exports provided: tag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tag\", function() { return tag; });\n/* harmony import */ var _create_class_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-class-name */ \"./src/modules/tag/create-class-name.js\");\n/* harmony import */ var _create_style_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-style-string */ \"./src/modules/tag/create-style-string.js\");\n/* harmony import */ var _helpers_concat_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/concat-strings */ \"./src/helpers/concat-strings.js\");\n/* harmony import */ var _style_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style-dom */ \"./src/modules/tag/style-dom.js\");\n\r\n\r\n\r\n\r\n\r\nconst SIZE_CLASSNAME = 10;\r\n\r\n/**\r\n * @description create style, insert in DOM and return the classname\r\n * @param {string} style\r\n * @return string\r\n */\r\nfunction tag(...style) {\r\n    const className = Object(_create_class_name__WEBPACK_IMPORTED_MODULE_0__[\"createClassName\"])(SIZE_CLASSNAME);\r\n    const styleString = Object(_create_style_string__WEBPACK_IMPORTED_MODULE_1__[\"createStyleString\"])(style);\r\n    const styleConcact = Object(_helpers_concat_strings__WEBPACK_IMPORTED_MODULE_2__[\"concatStrings\"])(className.className, styleString);\r\n\r\n    Object(_style_dom__WEBPACK_IMPORTED_MODULE_3__[\"insertInDom\"])(styleConcact);\r\n\r\n    return className.name;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/modules/tag/index.js?");

/***/ }),

/***/ "./src/modules/tag/style-dom.js":
/*!**************************************!*\
  !*** ./src/modules/tag/style-dom.js ***!
  \**************************************/
/*! exports provided: insertInDom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertInDom\", function() { return insertInDom; });\nconst PROPS_NAME = 'csscript';\r\n\r\n/**\r\n * @description Insert style in head whit props\r\n * @param {string} style\r\n */\r\nfunction insertInDom(style) {\r\n    const head = document.querySelector('head');\r\n    let node = getNodeInDom();\r\n\r\n    if (!node) {\r\n        node = createNodeStyle();\r\n        head.appendChild(node);\r\n    }\r\n\r\n    setAttributtesAndStyle(node, style);\r\n}\r\n\r\n/**\r\n * @return {HTMLStyleElement}\r\n */\r\nfunction getNodeInDom() {\r\n    return document.querySelector(`[${PROPS_NAME}]`);\r\n}\r\n\r\n/**\r\n * @return {HTMLStyleElement}\r\n */\r\nfunction createNodeStyle() {\r\n    return document.createElement('style');\r\n}\r\n\r\n/**\r\n * @param {HTMLStyleElement} node\r\n * @param {string} style\r\n */\r\nfunction setAttributtesAndStyle(node, style) {\r\n    node.setAttribute(PROPS_NAME, '');\r\n    node.innerHTML += style;\r\n}\n\n//# sourceURL=webpack:///./src/modules/tag/style-dom.js?");

/***/ })

/******/ });