export default function edit(currentId, todoList) {
  const currentInp = document.querySelector(`#${currentId} .text`);
  currentInp.readOnly = false;
  currentInp.focus();
  currentInp.setSelectionRange(currentInp.value.length, currentInp.value.length);
  currentInp.addEventListener('focusout', () => {
    setTimeout(() => {
      currentInp.readOnly = true;
      document.querySelector(
        `#${currentId} #rm`,
      ).style.display = 'none';
      document.querySelector(
        `#${currentId} #more`,
      ).style.display = 'block';
    }, 100);
  });
  currentInp.addEventListener('keyup', (e) => {
    if (e.key !== 'Enter') return;

    todoList[currentId.split('-')[1]].value = currentInp.value.trim();
    localStorage.setItem('todoList', JSON.stringify(todoList));
    currentInp.readOnly = true;
    document.querySelector(
      `#${currentId} #rm`,
    ).style.display = 'none';
    document.querySelector(
      `#${currentId} #more`,
    ).style.display = 'block';
  });
}
