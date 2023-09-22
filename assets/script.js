// armazena todas as tarefas cadastradas
const tasks = [];

function newId() {
    return Math.floor(Math.random() * 1000); // Gerar IDs entre 0 e 999
}

function createTask(taskTitle, taskDescription = "") {
    let id = newId();
    let task = {
        id,
        taskTitle,
        taskDescription,
    }
    tasks.push(task);
    // renderTasks();
    return task;
}