console.log(0)

$.ajax({
    url: 'https://picsum.photos/v2/list',
    method: 'GET',
    success: function(data){
        data.slice(0, 5).forEach(image => {
            $("body").append(`<img src="${image.download_url}" alt="${image.author}" style="width:200px; margin:10px;">`);
        });
    },
    error: function(data){
        console.error("Error:",data);
    }
});


n = 5
console.log(n)