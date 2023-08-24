document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
  
    addTaskBtn.addEventListener("click", function () {
      const taskText = taskInput.value.trim();
      if (taskText === "") return;
  
      const taskItem = document.createElement("li");
      taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="completeBtn">Complete</button>
        <button class="removeBtn">Remove</button>
      `;
  
      taskList.appendChild(taskItem);
      taskInput.value = "";
    });
  
    taskList.addEventListener("click", function (event) {
      const target = event.target;
  
      if (target.classList.contains("completeBtn")) {
        const taskItem = target.closest("li");
        taskItem.classList.toggle("completed");
      } else if (target.classList.contains("removeBtn")) {
        const taskItem = target.closest("li");
        taskList.removeChild(taskItem);
      }
    });
  });
  