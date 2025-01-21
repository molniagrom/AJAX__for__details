
function getImages(pageNumber) {
   const promise = axios.get(`https://picsum.photos/v2/list?page=${pageNumber}&limit=2`);

   return promise.then((response) => {
       return response.data;
   });
}

