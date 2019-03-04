/**
 * It update screen with new tasks
 */
function updateScreen() {
  // Creating task DOM
  let list = '<ul class="todo-items">';
  tasks.forEach((task) => {
    list += `
      <div>
        <button
          onclick='completeTask(this)' class='btn-complete' id='${task.id}'>
        </button>
        <li id='${task.id}'>${task.data.task}</li>
        <button
          onclick='removeTask(this)' class='btn-remover' id='${task.id}'>X
        </button>
      </div>
    `;
  });
  list += '</ul>';

  document.getElementById('completed_today').textContent = numTasks;

  document.getElementById('list').innerHTML = list;
  document.getElementById('newTask').value = '';
}
