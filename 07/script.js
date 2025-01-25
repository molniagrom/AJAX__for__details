const body = document.querySelector('body');
const clickMeButton = document.querySelector('#click-me')
const getTasksButton = document.querySelector('#get-tasks')
const createTasksButton = document.querySelector('#create-tasks')
const deleteTasksButton = document.querySelector('#delete-tasks')
const updateTaskButton = document.querySelector('#update-tasks');
const result = document.querySelector("#tasks-result")
const input = document.querySelector('#input')

//./=======================================================================================================

clickMeButton.addEventListener('click', () => {
    const promise = getImages(input.value)
    promise.then(onImageReceived)
})
getTasksButton.addEventListener('click', () => {
    const promise = getTasks(input.value)
    promise.then(onTaskReceived)
})
createTasksButton.addEventListener('click', () => {
    const promise = createTask(input.value)
    promise.then(onTaskCreate)
    input.value = ''
})
deleteTasksButton.addEventListener('click', () => {
    const promise = deleteTask(input.value)
    promise.then(onTaskDelete)
});
updateTaskButton.addEventListener('click', () => {
    const taskId = input.value;  // Считываем ID из поля ввода
    const newTitle = prompt("Введите новое название задачи");

    if (!taskId || !newTitle) {
        alert("Вы не ввели новое название");
        return;
    }

    const promise = updateTask(newTitle, taskId);  // Передаем оба значения в функцию
    promise.then(onTaskUpdate);
});

//./=======================================================================================================

function onImageReceived(array) {
    array.slice(0, 1).forEach(image => {
        const img = document.createElement('img');
        img.src = image.download_url;
        img.alt = image.author;
        img.style.width = '200px';
        img.style.margin = '10px';
        body.append(img);
    });
}
function onTaskReceived(tasks) {
    result.innerHTML = ``;
    tasks.forEach(el => {
        const li = document.createElement('li');
        li.innerText = el.title;
        li.dataset.id = el.id;
        result.append(li)
    })
}
function onTaskCreate(tasks) {

    const li = document.createElement('li');
    li.innerText = tasks.title;
    result.append(li)
}
function onTaskDelete(taskId) {
    if (!input.value) {
        alert("Введите ID задачи для удаления");
        return;
    }

    const taskToRemove = [...result.children].find(el => el.innerText.includes(taskId));

    if (taskToRemove) {
        taskToRemove.remove();
    }

    alert(`Задача с ID ${taskId} удалена!`);
    input.value = '';
}

function onTaskUpdate(newTitle, taskId) {

    const taskToUpdate = [...result.children].find(el => el.dataset.id === taskId);

    if (taskToUpdate) {
        taskToUpdate.innerText = newTitle;
    }

    alert(`Задача с ID ${taskId} обновлена!`);
    input.value = '';
}



