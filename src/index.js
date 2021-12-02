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

