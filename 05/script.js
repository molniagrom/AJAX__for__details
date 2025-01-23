const clickMeButton = document.querySelector('#click-me')
const input = document.querySelector('#input')
clickMeButton.addEventListener('click', () => {
    const promise = getImages(input.value)
    promise.then(onDataReceived)
})

function onDataReceived(array) {
    const body = document.querySelector('body');

    array.slice(0, 1).forEach(image => {
        const img = document.createElement('img');
        img.src = image.download_url;
        img.alt = image.author;
        img.style.width = '200px';
        img.style.margin = '10px';
        body.append(img);
    });
}


// ?page=1&limit=5


// // Add containers for images and buttons
// $("body").append(`
//     <div id="controls" style="margin-bottom: 20px;">
//         <button id="prev" style="margin:10px;">Предыдущая страница</button>
//         <button id="next" style="margin:10px;">Следующая страница</button>
//     </div>
//     <div id="images"></div>
// `);
//
// // Function for loading images
// function loadImages(page, count) {
//     const url = `https://picsum.photos/v2/list?page=${page}&limit=${count}`;
//
//     $.ajax({
//         url: url,
//         method: 'GET',
//         success: function(data) {
//             // Clean only the image container
//             $("#images").html('');
//
//             // Adding images
//             data.forEach(image => {
//                 $("#images").append(`
//                     <img src="${image.download_url}" alt="${image.author}"
//                         style="width:200px; margin:10px;">
//                 `);
//             });
//         },
//         error: function(error) {
//             console.error("Ошибка:", error);
//         }
//     });
// }
//
// // Initialization
// let currentPage = 1;
// const imagesPerPage = 5;
//
// // Loading the first page
// loadImages(currentPage, imagesPerPage);
//
// // Event handlers for buttons
// $("#prev").on("click", function() {
//     if (currentPage > 1) {
//         currentPage--;
//         loadImages(currentPage, imagesPerPage);
//     }
// });
//
// $("#next").on("click", function() {
//     currentPage++;
//     loadImages(currentPage, imagesPerPage);
// });





