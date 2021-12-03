/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_check_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/check.js */ \"./src/scripts/check.js\");\n\r\n\r\nconst todoList = localStorage.getItem('todoList')\r\n? JSON.parse(localStorage.getItem('todoList'))\r\n: [];\r\nconst list = document.getElementById('todo-list');\r\nconst btn = document.querySelector('#arrow');\r\nconst input = document.querySelector('.input');\r\nbtn.addEventListener('click', () => {\r\n  todoList.push({\r\n    value: input.value.trim(),\r\n    done: false,\r\n  });\r\n  input.value = '';\r\n  localStorage.setItem('todoList', JSON.stringify(todoList));\r\n  render ();\r\n});\r\n\r\nfunction render () {\r\n  list.innerHTML = '';\r\n  todoList.forEach((data, i) => {\r\n    list.innerHTML += `\r\n    <hr>\r\n    <div class=\"list-info\" id=${i}>\r\n    <div class='${data.done ? 'checked' : \"\"}'>\r\n    <input type=\"checkbox\" class=\"checkbox\" ${data.done ? 'checked' : ''}>\r\n    <li class='text'>${data.value}</li>\r\n    </div>\r\n    <span>\r\n    <i class=\"fas fa-ellipsis-v\"></i>\r\n    <i class=\"far fa-trash-alt\" id='rm'></i>\r\n    </span>\r\n    </div>\r\n    `;\r\n  (0,_scripts_check_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todoList);\r\n  });\r\n}\r\n render ();\r\n\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/scripts/check.js":
/*!******************************!*\
  !*** ./src/scripts/check.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkListener)\n/* harmony export */ });\nfunction checkListener (todoList) {\r\n    const elems = document.querySelectorAll('.checkbox');\r\n    elems.forEach(v => v.addEventListener('change', () => {\r\n    v.parentNode.classList.toggle('checked');\r\n    todoList[v.parentElement.parentElement.id].done = v.checked;\r\n    localStorage.setItem('todoList', JSON.stringify(todoList));\r\n    }));\r\n}\r\n\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/scripts/check.js?");

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