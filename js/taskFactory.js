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