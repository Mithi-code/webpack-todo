export default function checkListener(todoList) {
  const elems = document.querySelectorAll('.checkbox');
  elems.forEach(v => v.addEventListener('change', () => {
    v.parentNode.classList.toggle('checked');
    todoList[v.parentElement.parentElement.id].done = v.checked;
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }));
};
