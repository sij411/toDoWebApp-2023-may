/*
How to create a to do list
https://groundtutorial.com/todo-list-javascript/#:~:text=How%20to%20Make%20a%20JavaScript%20Todo%20List%201,6%206.%20Activate%20the%20JavaScript%20Todo%20List%20
해당 웹사이트를 참고하여  todo list를 구현해보았습니다. 
*/

document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#tasks").innerHTML +=
      '<div class="task"><span id="taskname"> ${document.querySelector("#newtask input").value} </span><button class="delete">X</button></div>';

    var current_tasks = document.querySelectorAll(".delete"); //이 부분은 뭐지?
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};
