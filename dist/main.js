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
/***/ (() => {

eval("const todoList = [\r\n  {\r\n    index: 1,\r\n    description: 'Dancing',\r\n    completed: false,\r\n  },\r\n  {\r\n    index: 2,\r\n    description: 'singimng',\r\n    completed: false,\r\n  },\r\n  {\r\n    index: 3,\r\n    description: 'coding',\r\n    completed: false,\r\n  },\r\n  {\r\n    index: 4,\r\n    description: 'driving',\r\n    completed: false,\r\n  },\r\n  {\r\n    index: 5,\r\n    description: 'cooking',\r\n    completed: false,\r\n  },\r\n];\r\nconst list = document.getElementById('todo-list');\r\ntodoList.forEach((data) => {\r\n  list.innerHTML += `\r\n  <hr>\r\n  <div class=\"list-info\">\r\n  <div>\r\n  <input type=\"checkbox\" >\r\n  <li>${data.description}</li>\r\n  </div>\r\n  <i class=\"fas fa-ellipsis-v\"></i>\r\n  </div>\r\n  `;\r\n});\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;