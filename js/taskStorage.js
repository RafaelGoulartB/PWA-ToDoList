let myStorage = window.localStorage;
var tasks = [];


function loadTasks() {
    let task_str = myStorage.getItem('tasks');
    if(task_str) {
        tasks = JSON.parse(task_str);
    }
    updateScreen();
    console.log('load');
};
loadTasks();

function createId() {
    var date = new Date();
    let id = date.getDate() +""+ date.getDay() +""+ date.getMinutes() +""+ date.getMilliseconds();
    
    return id;
}

function createTask() {
    
    let $task = document.getElementById("newTask").value;
    if(!$task == "") {
        let task = {
            id: createId(),
            data: {
                task: $task
            }
        }
        tasks.push(task);
        
        myStorage.setItem('tasks', JSON.stringify(tasks))
        
        updateScreen();
    }
}

function removeTask(element) {
    
    tasks = tasks.filter(task => task.id != element.getAttribute("id"));
    myStorage.setItem('tasks', JSON.stringify(tasks))
    
    updateScreen();
}

