var tasks = [];

function createId() {
    var date = new Date();
    let id = date.getDate() +""+ date.getDay() +""+ date.getMinutes() +""+ date.getMilliseconds();
    return id;
}

function createTask() {

    let $task = document.getElementById("newTask").value;
    let task = {
        id: createId(),
        data: {
            task: $task
        }
    }
    tasks.push(task);

    updateScreen();
}

function updateScreen() {
    let list = '<ul class="todo-items">';
    
    tasks.forEach(task => {
        list += "<li id="+task.id+">"+task.data.task+'</li>'; 
        list += '<button onclick="removeTask(this)" class="btn-remover" id='+task.id+'>Apagar</button>'
    });
    
    list += "</ul>";

    document.getElementById("list").innerHTML = list;
    document.getElementById("newTask").value = "";
}

function removeTask(element) {
    tasks = tasks.filter(task => task.id != element.getAttribute("id"));

    updateScreen();
}