document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-button");
  const newTodoInput = document.getElementById("new-todo");
  const todoList = document.getElementById("todo-list");

  addButton.addEventListener("click", function () {
    const todoText = newTodoInput.value.trim();
    if (todoText !== "") {
      const newTodoItem = document.createElement("li");
      newTodoItem.innerHTML = `
          <input type="checkbox">
          <input type="text" value="${todoText}" disabled>
          <button class="delete-button">Delete</button>
        `;
      todoList.appendChild(newTodoItem);
      newTodoInput.value = "";
    }
  });

  todoList.addEventListener("change", function (event) {
    if (event.target.type === "checkbox") {
      const todoInput = event.target.nextElementSibling;
      if (event.target.checked) {
        todoInput.style.textDecoration = "line-through";
      } else {
        todoInput.style.textDecoration = "none";
      }
    }
  });

  todoList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-button")) {
      const listItem = event.target.parentElement;
      listItem.remove();
    }
  });
});
