/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const todoList = [
  {
    index: 1,
    description: 'Dancing',
    completed: false
  },
  {
    index: 2,
    description: 'singimng',
    completed: false
  },
  {
    index: 3,
    description: 'coding',
    completed: false
  },
  {
    index: 4,
    description: 'driving',
    completed: false
  },
  {
    index: 5,
    description: 'cooking',
    completed: false
  },
];
const list = document.getElementById('todo-list');
todoList.forEach((data) => {
  list.innerHTML += `
  <hr>
  <div class="list-info">
  <div>
  <input type="checkbox" >
  <li>${data.description}</li>
  </div>
  <i class="fas fa-ellipsis-v"></i>
  </div>
  `;
});


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpQkFBaUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdG9kb0xpc3QgPSBbXHJcbiAge1xyXG4gICAgaW5kZXg6IDEsXHJcbiAgICBkZXNjcmlwdGlvbjogJ0RhbmNpbmcnLFxyXG4gICAgY29tcGxldGVkOiBmYWxzZVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW5kZXg6IDIsXHJcbiAgICBkZXNjcmlwdGlvbjogJ3NpbmdpbW5nJyxcclxuICAgIGNvbXBsZXRlZDogZmFsc2VcclxuICB9LFxyXG4gIHtcclxuICAgIGluZGV4OiAzLFxyXG4gICAgZGVzY3JpcHRpb246ICdjb2RpbmcnLFxyXG4gICAgY29tcGxldGVkOiBmYWxzZVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW5kZXg6IDQsXHJcbiAgICBkZXNjcmlwdGlvbjogJ2RyaXZpbmcnLFxyXG4gICAgY29tcGxldGVkOiBmYWxzZVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW5kZXg6IDUsXHJcbiAgICBkZXNjcmlwdGlvbjogJ2Nvb2tpbmcnLFxyXG4gICAgY29tcGxldGVkOiBmYWxzZVxyXG4gIH0sXHJcbl07XHJcbmNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1saXN0Jyk7XHJcbnRvZG9MaXN0LmZvckVhY2goKGRhdGEpID0+IHtcclxuICBsaXN0LmlubmVySFRNTCArPSBgXHJcbiAgPGhyPlxyXG4gIDxkaXYgY2xhc3M9XCJsaXN0LWluZm9cIj5cclxuICA8ZGl2PlxyXG4gIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiA+XHJcbiAgPGxpPiR7ZGF0YS5kZXNjcmlwdGlvbn08L2xpPlxyXG4gIDwvZGl2PlxyXG4gIDxpIGNsYXNzPVwiZmFzIGZhLWVsbGlwc2lzLXZcIj48L2k+XHJcbiAgPC9kaXY+XHJcbiAgYDtcclxufSk7XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=