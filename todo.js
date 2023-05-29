//input에 enter를 누르면 새로고침됨 -> 막고 싶음
//메모를 적음 -> 엔터 누름 -> 값이 저장되고 인풋 칸은 비워짐.

const toDoForm = document.getElementById("todo-form");
const toDoInput = document.getElementById("b");

function toDoEvent(event) {
  event.preventDefault();
  console.log("working?");
}

toDoForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

// event default 값이 안변함.
