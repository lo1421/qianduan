var types = []
$.ajax({
    url: 'http://106.13.225.8:5233/woniuMovie/getAllTypes',
    type: 'GET',
    success: function (data) {
        // console.log(data.types)
        types = data.types
        // console.log(types)
        $('#movieType').html('<li id="typeAll" class="typeLi">全部</li>')
        var typesHtml = types.map(item => {
            return `
            <li class="typeLi" data-id="${item.id}">${item.name}</li>
            `
        }).join('')
        $('#movieType').append(typesHtml)
    }

})
var movies = []
$.ajax({
    url: 'http://106.13.225.8:5233/woniuMovie/getAllMovies',
    type: 'GET',
    success: function (data) {
        // console.log(data.movies)
        movies = data.movies
        console.log(movies)
        showMovies()

        function showMovies(movie = movies) {
            var moviesHtml = movie.map(item => {
                return `
                <div class="card" data-id="${item.id}">
                            <div class="card-img">
                                <img src="${item.imgSrc}" alt="">
                            </div>
                            <p>${item.title}</p>
                            <span>${item.score}</span>
                        </div>
                `
            }).join('')
            $('.card-box').html(moviesHtml)
        }
        $('#hotSort').on('click', function () {
            $('.typeLi').css({
                backgroundColor: '#fff',
                color: '#333'
            })
            $('#typeAll').css({
                backgroundColor: '#f99135',
                color: '#fffefe',
                borderRadius: '14px',
                width: '56px'
            })
            showMovies()
        })
        $('#ratingSort').on('click', function () {
            $('.typeLi').css({
                backgroundColor: '#fff',
                color: '#333'
            })
            $('#typeAll').css({
                backgroundColor: '#f99135',
                color: '#fffefe',
                borderRadius: '14px',
                width: '56px'
            })
            var movie = [...movies]
            movie = sortByKey(movie, 'score')
            showMovies(movie)
        })

        $('#movieType').on('click', '.typeLi', function () {
            $('.typeLi').css({
                backgroundColor: '#fff',
                color: '#333'
            })
            $(this).css({
                backgroundColor: '#f99135',
                color: '#fffefe',
                borderRadius: '14px',
                width: '56px'
            })
            console.log($(this).data('id'))
            var typeMovies = movies.filter(item => {
                var res = (JSON.parse(item.movieType)).find(i => {
                    return i == $(this).data('id')
                })
                return res
            })
            // console.log(typeMovies)
            showMovies(typeMovies)
        })
        $('#typeAll').on('click', function () {
            showMovies()
            $('#hotSort').prop("checked", true)
            $('#timeSort').prop("checked", false)
            $('#ratingSort').prop("checked", false)
            console.log($(this))
        })

    }
})

function sortByKey(array, key) {
    return array.sort(function (a, b) {
        var y = a[key];//如果要从大到小,把x,y互换就好
        var x = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}
$('.card-box').on('click', '.card', function () {
    var movieId = $(this).data('id')
    // console.log(movieId)
    location.href = '../html/movieDetails.html?id=' + movieId
})


