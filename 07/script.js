const body = document.querySelector('body');
const clickMeButton = document.querySelector('#click-me')
const getTasksButton = document.querySelector('#get-tasks')
const createTasksButton = document.querySelector('#create-tasks')
const deleteTasksButton = document.querySelector('#delete-tasks')
const input = document.querySelector('#input')

// createTask("learn HTML")

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
    const taskId = input.value; // ID задачи берётся из input
    if (!taskId) {
        alert("Введите ID задачи для удаления");
        return;
    }

    deleteTask(taskId).then(() => {
        const result = document.querySelector("#tasks-result");
        const taskToRemove = [...result.children].find(el => el.innerText.includes(taskId));

        if (taskToRemove) {
            taskToRemove.remove();
        }

        alert(`Задача с ID ${taskId} удалена!`);
        input.value = '';
    }).catch(() => {
        alert("Не удалось удалить задачу. Проверьте ID.");
    });
});

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
    const result = document.querySelector("#tasks-result")
    result.innerHTML = ``;
    tasks.forEach(el => {
        const li = document.createElement('li');
        li.innerText = el.title;
        li.dataset.id = el.id;
        result.append(li)
    })
}

function onTaskCreate(tasks) {
    const result = document.querySelector("#tasks-result")

    const li = document.createElement('li');
    li.innerText = tasks.title;
    result.append(li)

}

