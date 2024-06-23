//获取浏览器搜索框地址?后缀
// console.log(location.search)
// 截取字符串函数
function getUrlData(str) {
    var res = str.substr(1)
    var arr = res.split('&')
    var newArr = arr.map(item => {
        return { [item.split('=')[0]]: item.split('=')[1] }
    })
    var obj = {}
    newArr.forEach(item => {
        obj = { ...obj, ...item }
    })
    return obj
}

var movieId = getUrlData(location.search)
// 点击特惠购票跳转影院事件
$('#BuyTicket').on('click', function () {
    location.href = '../html/cinema.html?id=' + movieId.id
})
var movies = []
console.log(movieId)
$.ajax({
    url: 'http://106.13.225.8:5233/woniuMovie/getAllMovies',
    type: 'GET',
    success: function (data) {
        // console.log(data.movies)
        movies = data.movies
        var movie = movies.find(item => item.id == movieId.id)
        console.log(movie)
        // match(/[\u4e00-\u9fa5]/g).join("")提取字符串中的汉字
        $('#movieTitle').text(movie.title.match(/[\u4e00-\u9fa5]/g).join(""))
        // replace(/[^a-zA-Z]/g, '')提取字符串中的汉字
        $('#movieTitle2').text(movie.title.replace(/[^a-zA-Z]/g, ''))
        $('#movieTitle3').text(movie.title.match(/[\u4e00-\u9fa5]/g).join(""))
        $('#movieLocationDuration').text(movie.region + ' / ' + movie.duration)
        $('#releaseTime').text(movie.release)
        $('#movieScore').text(movie.score)
        $('#movieSynopsis').text(movie.desc)
        // 修改节点属性
        $('#movieImg').attr('src', `${movie.imgSrc}`)
        // movie.comments
        var comments = JSON.parse(movie.comments)
        commentsShowHtml()
        function commentsShowHtml() {
            var commentsHtml = comments.map(item => {
                return `
                <div class="Comment-area-out-box">
                <div class="User-portrait-title">
                    <div class="User-portrait-title-left">
                        <img src="../images/movieDetails/HP-icon.png" alt="">
                        <div class="username-score-info">
                            <h3>Hp</h3>
                            <div class="time-and-star-box">
                                <span>23小时前</span>
                                <div class="score-star-box"></div>
                            </div>
                        </div>
                    </div>
                    <div class="User-portrait-title-right">158</div>
                </div>
                <div id="movieComment1" class="User-portrait-comment">
                    ${item}
                </div>
                `
            }).join('')
            $('#CommentBox').html(commentsHtml)
        }


        $('#SubmitComments').on('click', function () {
            comments.unshift($('#textareaBox').val())
            console.log(comments)
            commentsShowHtml()
            $('.Modal-box').css('display', 'none')
        })

        var movieType = JSON.parse(movie.movieType)
        // console.log(movie.movieType)
        console.log(movieType)

        $.ajax({
            url: 'http://106.13.225.8:5233/woniuMovie/getAllTypes',
            type: 'GET',
            success: function (data) {
                // console.log(data.movies)
                types = data.types
                console.log(types)
                var res
                var typesaArr = []
                movieType.forEach(i => {
                    res = types.find(item => {
                        return i == parseInt(item.id)
                    })
                    typesaArr.push(`${res.name}`)
                })
                // console.log(typesaArr.join(' '))
                $('#movieType').text(typesaArr.join(' '))
            }

        })
    }

})
// tab切换
$('#introduceTab1').click(function () {
    $('#castTab2').css({
        borderBottomColor: 'transparent',
        color: '',
    })
    $(this).css({
        borderBottom: '2px solid #f99135',
        color: '#f99135',
    })
    $('.movieTab1').css({
        display: 'block',
    })
    $('.movieTab2').css({
        display: 'none',
    })
})
$('#castTab2').click(function () {
    $('#introduceTab1').css({
        borderBottomColor: 'transparent',
        color: '#333333',
    })
    $(this).css({
        borderBottom: '2px solid #f99135',
        color: '#f99135',
    })
    $('.movieTab1').css({
        display: 'none',
    })
    $('.movieTab2').css({
        display: 'block',
    })
})
// 点击事件：显示隐藏评论模态框
$('#writeReview').click(function () {
    $('.Modal-box').css('display', 'flex')
})
$('.Modal-Close-box').click(function () {
    $('.Modal-box').css('display', 'none')
})



