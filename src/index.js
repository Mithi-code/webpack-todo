import checkListener from './scripts/check.js';
import edit from './scripts/update.js';

let todoList = localStorage.getItem('todoList')
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
    <div class="list-info" id='todo-${i}'>
    <div class='${data.done ? 'checked' : ''}'>
    <input type="checkbox" class="checkbox" ${data.done ? 'checked' : ''}>
    <li>
    <input class="text" type="text" readonly value="${data.value}"/>
    </li>
    </div>
    <span>
    <i class="fas fa-ellipsis-v" id='more'></i>
    <i class="far fa-trash-alt" id='rm'></i>
    </span>
    </div>
    `;
    checkListener(todoList);
    document.querySelectorAll('#more').forEach((p) => {
      p.addEventListener('click', () => {
        p.parentElement.querySelector('#rm').style.display = 'block';
        p.style.display = 'none';
        p.parentElement.parentElement.classList.add('edited');
        const currentId = p.parentElement.parentElement.id;
        edit(currentId, todoList);
      });
    });
    document.querySelectorAll('#rm').forEach((p) => {
      p.addEventListener('click', () => {
        const btnId = p.parentElement.parentElement.id.split('-')[1];
        todoList.splice(btnId, 1);
        localStorage.setItem('todoList', JSON.stringify(todoList));
        render();
        p.parentElement.querySelector('#more').style.display = 'block';
        p.style.display = 'none';
      });
    });
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

document.querySelector('.rmBtn').addEventListener('click', () => {
  todoList = todoList.filter((x) => !x.done);
  localStorage.setItem('todoList', JSON.stringify(todoList));
  render();
});
