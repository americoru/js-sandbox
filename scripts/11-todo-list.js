const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];

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
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject['name'];
    // const dueDate = todoObject['dueDate'];
    const { name, dueDate } = todoObject;
    todoListHTML += `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      " class="delete-todo-button">Delete</button>
    `;
  }
  divElement.innerHTML = todoListHTML;
}

renderTodoList();