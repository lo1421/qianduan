$('.c-c').children('li').on('click', function () {
    // console.log($(this))
    $('.c-c').children("li").css({
        backgroundColor: '#fff',
        color: '#000'
    })
    $(this).css({
        backgroundColor: '#f99135',
        color: '#fff'
    })
})
// console.log($('.c-c').children("li"))
$('.index').on('click', function () {
    location.href = '../html/index.html'
})
$('#movieDetails').on('click', function () {
    location.href = '../html/movieDetails.html'
})
$('#film').on('click', function () {
    location.href = '../html/film.html'
})
$('#information').on('click', function () {
    location.href = '../html/information.html'
})
$('#personalCenter').on('click', function () {
    location.href = '../html/01.personal-center-1.html'
})