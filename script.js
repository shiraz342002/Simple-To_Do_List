document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-button");
  const newTodoInput = document.getElementById("new-todo");
  const todoList = document.getElementById("todo-list");

  
  addButton.addEventListener("click", function () {
      const todoText = newTodoInput.value.trim();
      if (todoText !== "") {
          const priority = document.getElementById("priority").value; 
          const newTodoItem = document.createElement("li");
          newTodoItem.innerHTML = `
              <input type="checkbox">
              <input type="text" value="${todoText}" disabled data-priority="${priority}">
              <button class="edit-button">Edit</button>
              <button class="delete-button">Delete</button>
            `;
          todoList.appendChild(newTodoItem);
          newTodoInput.value = "";
          updatePriorityIndicators(); 
      }
  });

  function updatePriorityIndicators() {
      const todoItems = document.querySelectorAll("#todo-list li");
      todoItems.forEach(function (item) {
          const priority = item.querySelector("input[type='text']").getAttribute("data-priority");
          switch (priority) {
              case "low":
                  item.style.backgroundColor = "#ffffcc"; 
                  break;
              case "medium":
                  item.style.backgroundColor = "#ffcc99"; 
                  break;
              case "high":
                  item.style.backgroundColor = "#ff9999"; 
                  break;
              default:
                  item.style.backgroundColor = "transparent"; 
          }
      });
  }

 
  updatePriorityIndicators();

 
  todoList.addEventListener("click", function (event) {
      const target = event.target;
      if (target.type === "checkbox") {
          const todoInput = target.nextElementSibling;
          if (target.checked) {
              todoInput.style.textDecoration = "line-through";
          } else {
              todoInput.style.textDecoration = "none";
          }
      } else if (target.classList.contains("delete-button")) {
          const listItem = target.parentElement;
          listItem.remove();
          updatePriorityIndicators();
      } else if (target.classList.contains("edit-button")) {
          const todoInput = target.previousElementSibling;
          enableEditing(todoInput);
      }
  });
});
