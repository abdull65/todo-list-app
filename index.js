const inputEl = document.querySelector(".input_box"),
  inputBtnEl = document.querySelector(".input_btn"),
  errorMsgEl = document.querySelector(".error_msg"),
  unorderedListEl = document.querySelector(".unordered_list");

const storedValue = localStorage.getItem("todoValues");
let todoItems = [];

if (storedValue) {
  todoItems = JSON.parse(storedValue);

  todoItems.forEach((item) => {
    createTodoItem(item);
  });
}

inputBtnEl.addEventListener("click", () => {
  const todoValue = inputEl.value;
  const inputFormat = /[A-Z a-z]$/;

  if (todoValue.trim() === "") {
    errorMsgEl.innerHTML = "Please input your to-do!";
    errorMsgEl.classList.add("error_msg");
    setTimeout(() => {
      errorMsgEl.style.display = "none";
    }, 3000);
    errorMsgEl.style.display = "block";
  } else {
    createTodoItem(todoValue);
    inputEl.value = "";
    todoItems.push(todoValue);
    localStorage.setItem("todoValues", JSON.stringify(todoItems));
  }
});

function createTodoItem(item) {
  const todoListItem = document.createElement("li");
  todoListItem.classList.add("list_style");

  const todoTextEl = document.createElement("span");
  todoTextEl.innerText = item;
  todoListItem.appendChild(todoTextEl);
  todoListItem.addEventListener("click", () => {
    todoListItem.classList.add("complete_task");
  });
  const trashCanEl = document.createElement("button");
  trashCanEl.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>`;
  trashCanEl.classList.add("trash_can_style");
  todoListItem.appendChild(trashCanEl);

  unorderedListEl.appendChild(todoListItem);

  trashCanEl.addEventListener("click", () => {
    todoItems = todoItems.filter((value) => value !== item);
    localStorage.setItem("todoValues", JSON.stringify(todoItems));
    todoListItem.remove();
  });
}
