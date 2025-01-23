
function getImages(pageNumber) {
   const promise = axios.get(`https://picsum.photos/v2/list?page=${pageNumber}&limit=2`);

   return promise.then((response) => {
       return response.data;
   });
}

function getTasks() {
    const promise = axios.get('https://jsonplaceholder.typicode.com/posts');
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

