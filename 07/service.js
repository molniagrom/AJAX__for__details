function getImages(pageNumber) {
    const promise = axios.get(`https://picsum.photos/v2/list?page=${pageNumber}&limit=2`);

    return promise.then((response) => {
        return response.data;
    });
}

function getTasks(limit) { // limit задаёт количество задач
    const promise = axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
    return promise.then((response) => {
        return response.data;
    });
}

function createTask(title) {
    const promise = axios.post(`https://jsonplaceholder.typicode.com/posts`, {
        title: title,
    });
    return promise.then((response) => {
        return response.data;
    });
}

function updateTask(title, id) {
    const promise = axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        title: title,
        id: id
    });
    return promise.then((response) => {
        return response.data;
    });
}

function deleteTask(id) {
    const promise = axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return promise.then((response) => {
        return response.data;
    });
}








///...
