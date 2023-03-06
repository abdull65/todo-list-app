const todoArray = [];
const containerEl = document.getElementById("container");
const headerEl = document.querySelector("header");
const todoContentEl = document.querySelector(".todo_content");
const inputContainerEl = document.querySelector(".input_container");
const inputEl = document.querySelector(".input_box");
const inputBtnEl = document.querySelector(".input_btn");
const listContainerEl = document.querySelector(".todo_list_container");
const unorderedListEl = document.querySelector(".unordered_list");
const errorMsgEl = document.querySelector(".error_msg");
        const todoListEl = document.createElement("li");
const trashCanEl = document.createElement("p");
inputBtnEl.addEventListener("click", () => {
	if(inputEl.value === "") {
		errorMsgEl.innerHTML = "Please enter your To-Do!";
		setTimeout( () => {
errorMsgEl.style.display="none";
		}, 3000);
	}else {
const todoTextEl = document.createElement("p");
	trashCanEl.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>';trashCanEl.classList.add("trash_can_style");
	todoTextEl.textContent = inputEl.value;
	todoListEl.append(todoTextEl);
	unorderedListEl.append(todoListEl);
	inputEl.value = "";
	todoListEl.append(trashCanEl);
	}
})

trashCanEl.addEventListener("click", () => {

});
