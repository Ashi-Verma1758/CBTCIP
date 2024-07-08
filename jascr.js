
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

  
    var li = document.createElement("li");
    li.innerHTML = `
        <span>${taskInput.value}</span>
        <span class="task-actions">
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
            <button onclick="completeTask(this)">Complete</button>
        </span>
    `;

    taskList.appendChild(li);

    taskInput.value = "";
}

function deleteTask(taskElement) {
    var task = taskElement.parentNode.parentNode;
    task.parentNode.removeChild(task);
}
function editTask(editButton) {
    var task = editButton.parentNode.parentNode;
    var taskText = task.querySelector("span:first-child");
    var newText = prompt("Edit task:", taskText.textContent);

    if (newText !== null && newText.trim() !== "") {
        taskText.textContent = newText;
    }
}


function completeTask(completeButton) {
    var task = completeButton.parentNode.parentNode;
    var taskText = task.querySelector("span:first-child");

    task.classList.add("completed");

    var completedTasks = document.getElementById("completedTasks");
    completedTasks.appendChild(task);

    task.querySelector(".task-actions").innerHTML = `
        <button onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;
}

