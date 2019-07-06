const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
function paintToDo(text) {
  const li = document.createElement("li"); // html에서 element 생성
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(delBtn); // li 안에 delBtn을 자식으로 넣음.
  li.appendChild(span); // li 안에 span을 자식으로 넣음.
  toDoList.appendChild(li); // ul 안에 li를 자식으로 넣음.
}
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}
function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
  }
}
function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
