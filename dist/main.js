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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_check_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/check.js */ \"./src/scripts/check.js\");\n/* harmony import */ var _scripts_update_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/update.js */ \"./src/scripts/update.js\");\n\n\n\nlet todoList = localStorage.getItem('todoList')\n  ? JSON.parse(localStorage.getItem('todoList'))\n  : [];\nconst list = document.getElementById('todo-list');\nconst btn = document.querySelector('#arrow');\nconst input = document.querySelector('.input');\nfunction render() {\n  list.innerHTML = '';\n  todoList.forEach((data, i) => {\n    list.innerHTML += `\n    <hr>\n    <div class=\"list-info\" id='todo-${i}'>\n    <div class='${data.done ? 'checked' : ''}'>\n    <input type=\"checkbox\" class=\"checkbox\" ${data.done ? 'checked' : ''}>\n    <li>\n    <input class=\"text\" type=\"text\" readonly value=\"${data.value}\"/>\n    </li>\n    </div>\n    <span>\n    <i class=\"fas fa-ellipsis-v\" id='more'></i>\n    <i class=\"far fa-trash-alt\" id='rm'></i>\n    </span>\n    </div>\n    `;\n    (0,_scripts_check_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todoList);\n    document.querySelectorAll('#more').forEach((p) => {\n      p.addEventListener('click', () => {\n        p.parentElement.querySelector('#rm').style.display = 'block';\n        p.style.display = 'none';\n        p.parentElement.parentElement.classList.add('edited');\n        const currentId = p.parentElement.parentElement.id;\n        (0,_scripts_update_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(currentId, todoList);\n      });\n    });\n    document.querySelectorAll('#rm').forEach((p) => {\n      p.addEventListener('click', () => {\n        const btnId = p.parentElement.parentElement.id.split('-')[1];\n        todoList.splice(btnId, 1);\n        localStorage.setItem('todoList', JSON.stringify(todoList));\n        render();\n        p.parentElement.querySelector('#more').style.display = 'block';\n        p.style.display = 'none';\n      });\n    });\n  });\n}\nrender();\nbtn.addEventListener('click', () => {\n  todoList.push({\n    value: input.value.trim(),\n    done: false,\n  });\n  input.value = '';\n  localStorage.setItem('todoList', JSON.stringify(todoList));\n  render();\n});\n\ndocument.querySelector('.rmBtn').addEventListener('click', () => {\n  todoList = todoList.filter((x) => !x.done);\n  localStorage.setItem('todoList', JSON.stringify(todoList));\n  render();\n});\n\n\n//# sourceURL=webpack://todolist-list-structure/./src/index.js?");

/***/ }),

/***/ "./src/scripts/check.js":
/*!******************************!*\
  !*** ./src/scripts/check.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkListener)\n/* harmony export */ });\nfunction checkListener(todoList) {\n  const elems = document.querySelectorAll('.checkbox');\n  elems.forEach((v) => {\n    v.addEventListener('change', () => {\n      v.parentNode.classList.toggle('checked');\n      todoList[v.parentElement.parentElement.id.split('-')[1]].done = v.checked;\n      localStorage.setItem('todoList', JSON.stringify(todoList));\n    });\n  });\n}\n\n\n//# sourceURL=webpack://todolist-list-structure/./src/scripts/check.js?");

/***/ }),

/***/ "./src/scripts/update.js":
/*!*******************************!*\
  !*** ./src/scripts/update.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ edit)\n/* harmony export */ });\nfunction edit(currentId, todoList) {\n  const currentInp = document.querySelector(`#${currentId} .text`);\n  currentInp.readOnly = false;\n  currentInp.focus();\n  currentInp.setSelectionRange(currentInp.value.length, currentInp.value.length);\n  currentInp.addEventListener('focusout', () => {\n    setTimeout(() => {\n      currentInp.readOnly = true;\n      document.querySelector(\n        `#${currentId} #rm`,\n      ).style.display = 'none';\n      document.querySelector(\n        `#${currentId} #more`,\n      ).style.display = 'block';\n    }, 100);\n  });\n  currentInp.addEventListener('keyup', (e) => {\n    if (e.key !== 'Enter') return;\n\n    todoList[currentId.split('-')[1]].value = currentInp.value.trim();\n    localStorage.setItem('todoList', JSON.stringify(todoList));\n    currentInp.readOnly = true;\n    document.querySelector(\n      `#${currentId} #rm`,\n    ).style.display = 'none';\n    document.querySelector(\n      `#${currentId} #more`,\n    ).style.display = 'block';\n  });\n}\n\n\n//# sourceURL=webpack://todolist-list-structure/./src/scripts/update.js?");

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