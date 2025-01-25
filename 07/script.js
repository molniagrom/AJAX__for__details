const body = document.querySelector('body');
const clickMeButton = document.querySelector('#click-me')
const getTasksButton = document.querySelector('#get-tasks')
const createTasksButton = document.querySelector('#create-tasks')
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
        result.append(li)
    })
}

function onTaskCreate(tasks) {
    const result = document.querySelector("#tasks-result")

    const li = document.createElement('li');
    li.innerText = tasks.title;
    result.append(li)



}
