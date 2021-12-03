import checkListener from './scripts/check.js';

const todoList = localStorage.getItem('todoList')
  ? JSON.parse(localStorage.getItem('todoList'))
  : [];
const list = document.getElementById('todo-list');
const btn = document.querySelector('#arrow');
const input = document.querySelector('.input');
function render() {
  list.innerHTML = '';
  todoList.forEach((data, i) => {
    list.innerHTML += `
    <hr>
    <div class="list-info" id=${i}>
    <div class='${data.done ? 'checked' : ''}'>
    <input type="checkbox" class="checkbox" ${data.done ? 'checked' : ''}>
    <li class='text'>${data.value}</li>
    </div>
    <span>
    <i class="fas fa-ellipsis-v"></i>
    <i class="far fa-trash-alt" id='rm'></i>
    </span>
    </div>
    `;
    checkListener(todoList);
  });
}
render();
btn.addEventListener('click', () => {
  todoList.push({
    value: input.value.trim(),
    done: false,
  });
  input.value = '';
  localStorage.setItem('todoList', JSON.stringify(todoList));
  render();
});
