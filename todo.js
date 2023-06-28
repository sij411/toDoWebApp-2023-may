//input에 enter를 누르면 새로고침됨 -> 막고 싶음b -> solved.
//메모를 적음 -> 엔터 누름 -> 값이 저장되고 인풋 칸은 비워짐. -> solved.
// add li with value newToDo
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");

const myStorage = window.localStorage;
var idx = 1;

function $(id) {
  return document.getElementById(id);
} // id를 반환

function toDoEvent(event) {
  event.preventDefault();
  var newToDo = toDoInput.value;
  toDoInput.value = "";
  console.log("This is " + newToDo);
  // local storage
  myStorage.setItem(idx, newToDo);

  var newMemo = myStorage.getItem(idx);
  console.log("This is the new memo: ", newMemo);
  display(newMemo);
  //var newLi = document.createElement("li");
  //var newText = document.createTextNode(newMemo);
  //newLi.appendChild(newText);
  //var currentUl = document.getElementById("todo-list");
  //currentUl.insertAdjacentElement("afterbegin", newLi);

  //idx = idx + 1;
}

toDoForm.addEventListener("submit", toDoEvent);

// 새로고침해도 남아있게 하고 싶은데 어떻게 해야하는거지?

function display(n) {
  var box = document.getElementById(item1);
  box.innerText = n;
}
