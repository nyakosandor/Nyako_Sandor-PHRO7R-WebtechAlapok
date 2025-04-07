document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        const newTask = document.createElement('li');
        newTask.className = 'item';
        newTask.textContent = taskText;

        newTask.addEventListener('click', function() {
            newTask.classList.toggle('completed');
        });

        taskList.appendChild(newTask);
        taskInput.value = '';
    }
});