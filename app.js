// Define UI Vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load event listeners
loadEventListeners();

function loadEventListeners() {
    // Add task event
    form.addEventListener('submit', addTask);
}

// Add Task 
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a Task');
    }
    // create li element
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    // create link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    // add Icon
    link.innerHTML = '<i class="fa fa-remove"></i>';


    console.log(li);
    // Appends
    li.appendChild(link);
    taskList.appendChild(li);


    // Clear input
    taskInput.value = '';


    e.preventDefault();
}