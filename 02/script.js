let n = 8

$.ajax({
    url: 'https://jsonplaceholder.typicode.com/photos',
    method: 'GET',
    success: function (data) {
        // Выводим первые 10 результатов
        console.log(data.slice(0, 10));
    },
    error: function (error) {
        console.error('Ошибка:', error);
    }
});

n = 5
console.log(n)