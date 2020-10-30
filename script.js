var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");
var count = 0;

var todos = [];

function render(array) {
  todoList.innerHTML = "";
  todoCountSpan.textContent = array.length;
  for (let i = 0; i < array.length; i++) {
    var li = document.createElement("li");
    li.textContent = array[i];
    var liButton = document.createElement("button");
    liButton.textContent = "completed!";
    li.appendChild(liButton);
    todoList.appendChild(li);

    console.log(array[i]);
  }
}

function add(event) {
  event.preventDefault();

  if (todoInput.value === "") {
    return;
  }
  todos.push(todoInput.value);

  render(todos);
  todoInput.value = "";
  console.log(todos);
  console.log("adder function");
}

document.addEventListener("submit", add);
