function getImages(pageNumber, successCallback) {
    $.ajax({
        url: `https://picsum.photos/v2/list?page=${pageNumber}&limit=2`,
        method: 'GET',
        success: successCallback,
        error: function (data) {
            console.error("Error:", data);
        }
    });
}