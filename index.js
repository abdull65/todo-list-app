// declaring a constant variable to represent the input element, Input button
// error message and ul container.
const inputEl = document.querySelector(".input_box"),
  inputBtnEl = document.querySelector(".input_btn"),
  errorMsgEl = document.querySelector(".error_msg"),
  unorderedListEl = document.querySelector(".unordered_list");

// declare and assign a local storage for the to-do
const storedValue = localStorage.getItem("todoValues");

//using let variable declare and assign an empty array for the to-do list
let todoItems = [];
if (storedValue) {
  todoItems = JSON.parse(storedValue);

  todoItems.forEach((item) => {
    createTodoItem(item);
  });
}

inputBtnEl.addEventListener("click", () => {
  const todoValue = inputEl.value;
  // check if the todo list is empty or has white space
  if (todoValue.trim() === "") {
    // if todo value or input is empty
    errorMsgEl.innerHTML = "please input a valid to-do!";
    errorMsgEl.classList.add("error_msg");
    // set a timeout after 3000 milliseconds for the error message to disapear
    setTimeout(() => {
      errorMsgEl.style.display = "none";
    }, 3000);
    // set the error message back to display block
    errorMsgEl.style.display = "block";
  } else {
    //call a function named createTodoItem and pass the todoValue variable as an argument
    createTodoItem(todoValue);
    // set the inputEl value to empty
    inputEl.value = "";
    // push the todo value to the todoItems array
    todoItems.push(todoValue);
    // store the todoitems array to the browser local storage
    localStorage.setItem("todoValues", JSON.stringify(todoItems));
  }
});
function createTodoItem(item) {
  const todoListItem = document.createElement("li");
  todoListItem.classList.add("list_style");

  const todoTextEl = document.createElement("span");
  todoTextEl.innerHTML = item;
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
