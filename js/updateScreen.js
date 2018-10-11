function updateScreen() {
    let list = '<ul class="todo-items">';
    
    tasks.forEach(task => {
        list += "<div><li id="+task.id+">"+task.data.task+'</li>'; 
        list += '<button onclick="removeTask(this)" class="btn-remover" id='+task.id+'>Apagar</button></div>'
    });
    
    list += "</ul>";

    document.getElementById("list").innerHTML = list;
    document.getElementById("newTask").value = "";
}