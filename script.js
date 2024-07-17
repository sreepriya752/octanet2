document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');

    listItem.innerHTML = `
        <span>${taskText}</span>
        <button class="edit-button" onclick="editTask(this)">Edit</button>
        <button class="delete-button" onclick="deleteTask(this)">Delete</button>
        <input type="checkbox" onchange="toggleCompletion(this)">
    `;

    taskList.appendChild(listItem);
    taskInput.value = '';
}

function toggleCompletion(checkbox) {
    const listItem = checkbox.parentElement;
    listItem.querySelector('span').classList.toggle('completed');
}

function editTask(button) {
    const listItem = button.parentElement;
    const taskText = listItem.querySelector('span');
    const newTaskText = prompt('Edit task:', taskText.innerText);

    if (newTaskText) {
        taskText.innerText = newTaskText;
    }
}

function deleteTask(button) {
    const listItem = button.parentElement;
    listItem.remove();
}