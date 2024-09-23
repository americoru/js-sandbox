const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo('.js-name-input-2');
    renderTodoList();
  })

function addTodo(inputClass) {
  const inputElement = document.querySelector(inputClass);
  const name = inputElement.value;
  // console.log(name)

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  // console.log(dueDate)

  todoList.push({name, dueDate});
  // console.log(todoList);

  inputElement.value = '';
}

function renderTodoList() {
  let divElement = document.querySelector('.js-todo-list');
  let todoListHTML = '';
  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    todoListHTML += `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button">Delete</button>
    `;
  });
  divElement.innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
      })
    });
}

renderTodoList();