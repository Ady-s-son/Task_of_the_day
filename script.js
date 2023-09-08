const taskInput = document.getElementById('task');
const taskList = document.getElementById('task-list');
const addBtn = document.getElementById('addBtn');
    const printButton = document.getElementById('print-receipt');
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        ${taskText}

        <button onclick="removeTask(this)" class="btn" id="in">Remove</button> 
    `;

    taskList.appendChild(li);
    taskInput.value = '';
}

function removeTask(button) {
    const li = button.parentElement;
    taskList.removeChild(li);
}

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keyup', function(event) {
    if (event.key === "Enter") {
        addTask();
    }
   printButton.addEventListener('click', function () {
        window.print();
    });
});
