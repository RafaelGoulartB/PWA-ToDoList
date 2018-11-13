let myStorage = window.localStorage;
var tasks = [];
var numTasks = 0;


function loadTasks() {
    // Carrega Tarefas
    let task_str = myStorage.getItem('tasks');
    if(task_str) {
        tasks = JSON.parse(task_str);
    }
    // Carrega Números de tarefas compridas
    let num_task_str = myStorage.getItem('tasks_completed');
    if(num_task_str) {
        numTasks = JSON.parse(num_task_str);
    }

    updateScreen();
    
};

loadTasks();

function removeTask(element) {
    
    tasks = tasks.filter(task => task.id != element.getAttribute("id"));
    myStorage.setItem('tasks', JSON.stringify(tasks));
    
    updateScreen();
}

function countTasks() {
    numTasks += 1;
}

function completeTask(element) {
    tasks = tasks.filter(task => task.id != element.getAttribute("id"));
    countTasks();
    
    
    myStorage.setItem('tasks', JSON.stringify(tasks));
    myStorage.setItem('tasks_completed', JSON.stringify(numTasks));
    
    updateScreen();
}