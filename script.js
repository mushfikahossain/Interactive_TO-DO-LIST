const myForm = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const taskSubmit = document.getElementById('task-submit');
const showTasks = document.getElementById('tasks');
const status = document.getElementById('option');
const edit = document.getElementById('edit');
const deleteButton = document.getElementById('delete');
const errorMessage = document.getElementById('error-message'); 


myForm.addEventListener('submit', function (prevent) {
    prevent.preventDefault(); 

    
    if (taskInput.value.trim() === '') {
        errorMessage.style.display = 'block';
        return; 
    }
    errorMessage.style.display = 'none';

    console.log('Task added:', taskInput.value);

    taskInput.value = '';
});