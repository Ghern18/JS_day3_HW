const taskInput = document.getElementById("taskInput");
const listContainer = document.getElementById("listContainer");
const AddTask = document.getElementById("AddTask");

AddTask.addEventListener("click", AddTask);

function AddTask() { //button won't work? Not sure what to do....
  if (taskInput.value.trim() === '') {
    alert("Write your Task.");
  } else {
    let li = document.createElement("li");
    li.textContent = taskInput.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.textContent = "\u00d7";
    li.appendChild(span);
  }
  taskInput.value = "";
  saveData();
}

function saveData() {
  // save the tasks to local storage
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      if (confirm("Are you sure you want to delete this task?")) {
        e.target.parentElement.remove();
        console.log("Task deleted");
        saveData();
      }
    }
  }, false);

  function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
  }
  function showTask() {
    listContainer.innerHTML=localStorage.getItem("data");
  }
  showTask();