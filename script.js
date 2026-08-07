function addTask() {

    const input = document.getElementById("taskInput");
    const taskText = input.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const list = document.getElementById("taskList");

    const task = document.createElement("li");

    task.textContent = taskText;

    list.appendChild(task);

    input.value = "";
}