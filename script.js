const myForm = document.getElementById('todo-form');
const task = document.getElementById('task-input');
const taskSubmit = document.getElementById('task-submit');
const showTasks = document.getElementById('tasks');
const status = document.getElementById('option');
const edit = document.getElementById('edit');
const deleteButton = document.getElementById('delete');
const errorMessage = document.getElementById('error-message'); 
const content = document.getElementById("content");


myForm.addEventListener('submit', function (prevent) {
    prevent.preventDefault(); 

    
    if (task.value.trim() === '') {
            alert("Please fill out the task");
        return; 
    }


const task_element = document.createElement("div");
task_element.classList.add("task");

const task_content_ele = document.createElement("div");
task_content_ele.classList.add("content");

const task_input_ele = document.createElement("input");
task_input_ele.classList.add("text");
task_input_ele.type = "text";
task_input_ele.value = task.value; 
task_input_ele.setAttribute("readonly", "readonly"); 

task_content_ele.appendChild(task_input_ele);

task_element.appendChild(task_content_ele);

const task_actions_ele = document.createElement("div");
task_actions_ele.classList.add("actions");

const edit_button = document.createElement("button");
edit_button.classList.add("edit");
edit_button.innerText = "Edit";

const delete_button = document.createElement("button");
delete_button.classList.add("delete");
delete_button.innerText = "Delete";

task_actions_ele.appendChild(edit_button);
task_actions_ele.appendChild(delete_button);

task_element.appendChild(task_actions_ele);

showTasks.appendChild(task_element);

task.value = '';    


edit_button.addEventListener('click', () => {
    if (edit_button.innerText === "Edit") {
        task_input_ele.removeAttribute("readonly"); 
        task_input_ele.focus(); 
        edit_button.innerText = "Save"; 
    } else {
        task_input_ele.setAttribute("readonly", "readonly"); 
        edit_button.innerText = "Edit";
    }
});

});