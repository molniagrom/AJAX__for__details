// function getImagesOld(pageNumber) {
//    const promise = $.ajax({
//         url: `https://picsum.photos/v2/list?page=${pageNumber}&limit=2`,
//         method: 'GET',
//         error: function (data) {
//             console.error("Error:", data);
//         }
//     });
//
//    return promise;
// }

function getImages(pageNumber) {
   const promise = axios.get(`https://picsum.photos/v2/list?page=${pageNumber}&limit=2`);

   return promise.then((data) => {
       return data.data;
   });
}

