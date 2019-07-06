const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
const toDos = [];
function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
function paintToDo(text) {
  const li = document.createElement("li"); // html에서 element 생성
  const delBtn = document.createElement("button");
  const newId = toDos.length + 1; // 0번째부터 시작하므로 (처음 것은 toDos array의 1번째)
  delBtn.innerText = "❌";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(delBtn); // li 안에 delBtn을 자식으로 넣음.
  li.appendChild(span); // li 안에 span을 자식으로 넣음.
  li.id = newId;
  toDoList.appendChild(li); // ul 안에 li를 자식으로 넣음.
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj); // toDos array에 집어넣기
  saveToDos();
}
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS); // localStorage 조회
  if (loadedToDos !== null) {
    // 만약 localStorage에 값이 있다면 각각에 대해서 paintToDo..
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  }
}
function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
