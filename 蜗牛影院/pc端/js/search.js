$.ajax({
    url: 'http://106.13.225.8:5233/woniuMovie/getAllMovies',
    type: 'GET',
    success: function (data) {
        console.log(data.movies)
        movies = data.movies
        var searchHtml = movies.map(item => {
            return `
            <option value="${item.title}" data-id="${item.id}">
            `
        }).join('')
        // console.log(searchHtml)
        $('#search').html(searchHtml)

    }
})
$('#searchBtn').on('click', function () {
    console.log($('#searchInput').val())
    var searchInput = $('#searchInput').val()
    // 获取指定元素
    console.log($(`#search option[value="${searchInput}"]`))
    // 获取指定元素id
    console.log($(`#search option[value="${searchInput}"]`).data('id'))
    
    var movieId = $(`#search option[value="${searchInput}"]`).data('id')
    // console.log(movieId)
    location.href = '../html/movieDetails.html?id=' + movieId
})