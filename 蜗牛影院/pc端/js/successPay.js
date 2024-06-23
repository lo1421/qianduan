var query = location.search.substring(1).split('&');
// console.log(query)
$('#mivieprice').text(`￥${query[1]}`)
var movies = []
$.ajax({
    url: 'http://106.13.225.8:5233/woniuMovie/getAllMovies',
    type: 'GET',
    success: function (data) {
        // console.log(data.movies)
        movies = data.movies
        var movie = movies.filter(item => item.id == query[0])
        movie.find(item => {
            $('#movieTitle').text(item.title.match(/[\u4e00-\u9fa5]/g).join(""))
            $('.list-img').html(`<img src="${item.imgSrc}" alt="">`)
        })
    }
})
var seatingpPlan = JSON.parse(localStorage.seatingpPlan)
// console.log(seatingpPlan.join(' '))
$('#seat').append(seatingpPlan.join(' '))
$('#TicketCollection').on('click',function(){
    location.href = '../html/01.personal-center-1.html?' + query[0] +'&'+ query[1]
    // location.href = '../html/02.myOrder.html?' + query[0] +'&'+ query[1]

})