var tasks = [];

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
        
        updateScreen();   
    }
}

function removeTask(element) {
    
    tasks = tasks.filter(task => task.id != element.getAttribute("id"));
    
    updateScreen();
}