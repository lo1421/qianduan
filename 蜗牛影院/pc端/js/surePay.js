clock(899);
function clock(times) {
    //计算分钟
    var fen = parseInt((times % 3600) / 60);
    //计算秒
    var miao = (times % 3600) % 60;
    //写入页面显示
    $('#minute').text(fen)
    $('#second').text(miao)

    if (times > 0) {
        //倒计时的秒数递减1
        times = times - 1;
        //定时1秒，然后调用自身clock方法
        //每次递减1，不停调用自身，实现循环，直到times=0
        setTimeout(function () {
            clock(times);
        }, 1000);
    } else {
        alert("支付已超时");

    }
}

var query = location.search.substring(1).split('&');
// console.log(query)

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
        })

    }
})
$('#moviePrice').text(`${query[1]}`)
var seatingpPlan = JSON.parse(localStorage.seatingpPlan)
// console.log(seatingpPlan.join(' '))
$('#seat').append(seatingpPlan.join(' '))

$('.way').on('click', function () {

    $('.way').css('borderColor', '#dbdbdb')
    $(this).css('borderColor', '#f03d37')
})

$('#ConfirmPayment').on('click', function () {
    location.href = '../html/successPay.html?' + query[0] +'&'+ query[1]
})