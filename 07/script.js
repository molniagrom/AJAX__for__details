const body = document.querySelector('body');
const clickMeButton = document.querySelector('#click-me')
const getTasksButton = document.querySelector('#get-tasks')
const input = document.querySelector('#input')

clickMeButton.addEventListener('click', () => {
    const promise = getImages(input.value)
    promise.then(onImageReceived)
})
getTasksButton.addEventListener('click', () => {
    const promise = getTasks()
    promise.then(onTaskReceived)
})

createTask("lern").then((data) => {
    // debugger
    console.log(data)
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

    tasks.forEach(el => {
        const li = document.createElement('li');
        li.innerText = el.title;
        document.querySelector("#tasks-result").append(li)
    })

}
