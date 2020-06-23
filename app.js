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

    // Remove task event
    taskList.addEventListener('click', removeTask)

    // Clear task event 
    clearBtn.addEventListener('click', clearTasks);

    // Filter tasks
    filter.addEventListener('keyup', filtertasks)
}

// Add Task 
function addTask(e) {
    if (taskInput.value === '') {
        alert('Adicione Uma Tarefa');
    }
    // create li element
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    // create link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    // add Icon
    link.innerHTML = '<i class="material-icons">remove</i>';


    console.log(li);
    // Appends
    li.appendChild(link);
    taskList.appendChild(li);


    // Clear input
    taskInput.value = '';


    e.preventDefault();
}

// Remove Task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Tem Certeza?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

// Clear Tasks
function clearTasks() {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

// Filter Tasks
function filtertasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach
        (function (task) {
            const item = task.firstChild.textContent;
            if (item.toLowerCase().indexOf(text) != -1) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';

            }
        });
}