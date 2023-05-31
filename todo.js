//input에 enter를 누르면 새로고침됨 -> 막고 싶음b -> solved.
//메모를 적음 -> 엔터 누름 -> 값이 저장되고 인풋 칸은 비워짐. -> solved.
// add li with value newToDo
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");

function toDoEvent(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  console.log("This is " + newToDo);

  var newLi = document.createElement("li");
  var newText = document.createTextNode(newToDo);
  newLi.appendChild(newText);
  var currentUl = document.getElementById("todo-list");
  currentUl.insertAdjacentElement("afterbegin", newLi);
}

toDoForm.addEventListener("submit", toDoEvent);
