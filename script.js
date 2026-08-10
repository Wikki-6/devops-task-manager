function addTask() {

    const nameInput = document.getElementById("nameInput");
    const taskInput = document.getElementById("taskInput");

    const name = nameInput.value.trim();
    const taskText = taskInput.value.trim();

    if (name === "" || taskText === "") {
        alert("Please enter both name and task");
        return;
    }

    const list = document.getElementById("taskList");

    const task = document.createElement("li");

    task.innerHTML = `
        <strong>Name:</strong> ${name}<br>
        <strong>Task:</strong> ${taskText}
    `;

    list.appendChild(task);

    nameInput.value = "";
    taskInput.value = "";

    nameInput.focus();
}