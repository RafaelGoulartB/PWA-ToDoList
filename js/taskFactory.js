function createId() {
  const date = new Date();
  const id = `${date.getDate()}${date.getDay()}${date.getMinutes()}${date.getMilliseconds()}`;
  return id;
}

function createTask() {
  const $task = document.getElementById('newTask').value;
  if (!$task == '') {
    const task = {
      id: createId(),
      data: {
        task: $task,
      },
    };
    tasks.push(task);

    myStorage.setItem('tasks', JSON.stringify(tasks));

    updateScreen();
  }
}
