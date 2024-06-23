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
var CinemasAndMoviesId = getUrlData(location.search).id
// console.log(CinemasAndMoviesId)
// 获取电影院id
var operaId = parseInt(CinemasAndMoviesId / 10000000)
// console.log(operaId)
// 获取电影id
var movieId = CinemasAndMoviesId % 10000000
// console.log(movieId)
var operas = []
$.ajax({
    url: 'http://106.13.225.8:5233/woniuMovie/getAllOperas',
    type: 'GET',
    success: function (data) {
        console.log(data.operas)
        var operas = data.operas
        operas.forEach(item => {
            if (item.id == operaId) {
                $('#cinemaName').text(item.name)
                $('.mcTop').text(`蜗牛电影 > 影院 > ${item.name}`)
                $('#cinemaAddress').text(item.addres)
                $('#cinemaTelephone').text(item.phone)
                $('#cinemaImg').attr('src', `${item.img_src}`)
            }

        })
        newOperas = operas.filter(item => item.id == operaId)
        var moviesId = JSON.parse(newOperas.map(item => item.movies))
        console.log(moviesId)

        $.ajax({
            url: 'http://106.13.225.8:5233/woniuMovie/getAllMovies',
            type: 'GET',
            success: function (data) {
                // console.log(data.movies)
                var movies = data.movies
                var movieImgHtml = '';
                moviesId.forEach(i => {
                    movieImgHtml += movies.map(item => {
                        if (item.id == i) {
                            return `
                            <div data-id="${item.id}" class="mcMinCard">
                                <img src="${item.imgSrc}" alt="">
                            </div>
                            `
                        }
                    }).join('')
                })
                $('#moviesImgBox').html(movieImgHtml)
                $('#moviesImgBox').on('click', '.mcMinCard', function () {
                    // console.log($(this))
                    $('.mcMinCard').css('backgroundColor', '#fff')
                    $(this).css('backgroundColor', '#f99135')
                    // console.log($(this).data('id'))
                    movieId = $(this).data('id')

                    var newMovies = movies.filter(item => item.id == movieId)
                    console.log(newMovies)
                    var newMoviesHtml = newMovies.map(item => {
                        return `
                    <p>${item.title}<span>${item.score}<i>分</i></span></p>
                    <p><i>时长：<em>${item.duration}</em></i><i>类型：<em>剧情</em></i><i>主演 :<em>${item.actors}</em></i></p>
                    `
                    }).join('')
                    $('.mcCard2').html(newMoviesHtml)
                })
                // movieId =newMovies[0]
                var newMovies = movies.filter(item => item.id == moviesId[0])
                // console.log(newMovies)
                var newMoviesHtml = newMovies.map(item => {
                    return `
                    <p>${item.title}<span>${item.score}<i>分</i></span></p>
                    <p><i>时长：<em>${item.duration}</em></i><i>类型：<em>剧情</em></i><i>主演 :<em>${item.actors}</em></i></p>
                    `
                }).join('')
                $('.mcCard2').html(newMoviesHtml)
            }
        })
    }

})

// 获取当前时间
var now = new Date();
// 获取当前周几
var day = now.getDay();
// 获取当前日期
var today = now.getDate();
// 获取当前月份
var month = now.getMonth() + 1;
// 获取当前年份
var year = now.getFullYear()
// 获取周几函数
function getWeekDate(date) {
    var now = new Date(date);
    var day = now.getDay();
    var weeks = new Array(
        "周日",
        "周一",
        "周二",
        "周三",
        "周四",
        "周五",
        "周六"
    );
    var week = weeks[day];
    return week;
}
var week = getWeekDate(year + '-' + 0 + month + '-' + 0 + (today + 2))  // 返回两天后是周几
// console.log(year + '-' + 0 + month + '-' + 0 + (today + 2))
// console.log(week)
// console.log('今天 ' + month + '月' + day)
$('#toDay').text('今天 ' + month + '月' + today)
$('#toDay2').text(week + '  ' + month + '月' + (today + 2))
var ticketingContent = [
    { id: '1', startTime: '08:45', endTime: '10:40散场', languageType: '国语2D', office: '2厅', price: '26.9' },
    { id: '2', startTime: '10:45', endTime: '12:40散场', languageType: '国语2D', office: '2厅', price: '26.9' },
    { id: '3', startTime: '12:45', endTime: '14:40散场', languageType: '国语2D', office: '2厅', price: '26.9' },
    { id: '4', startTime: '14:45', endTime: '16:40散场', languageType: '国语2D', office: '2厅', price: '26.9' },
    { id: '5', startTime: '16:45', endTime: '18:40散场', languageType: '英语2D', office: '2厅', price: '26.9' },
    { id: '6', startTime: '18:45', endTime: '20:40散场', languageType: '英语2D', office: '2厅', price: '26.9' },
    { id: '7', startTime: '20:45', endTime: '22:40散场', languageType: '英语2D', office: '2厅', price: '26.9' },
    { id: '8', startTime: '22:45', endTime: '00:40散场', languageType: '英语2D', office: '2厅', price: '26.9' },
]
// console.log(ticketingContent)
var ticketingContentHtml = ticketingContent.map(item => {
    return `
    <tr>
        <td>
            <p>${item.startTime}</p>
            <span>${item.endTime}</span>
        </td>
        <td>${item.languageType}</td>
        <td>${item.office}</td>
        <td><i>￥</i>${item.price}</td>
        <td><button data-id="${item.id}" class="sellTicketBtn">点击购票</button></td>
    </tr>
    `
}).join('')
$('#ticketingOptions').html(ticketingContentHtml)
$('#ticketingOptions').on('click', '.sellTicketBtn', function () {
    var a = $(this).data('id')
    // console.log($(this).data('id'))
    location.href = '../html/01.unselected.html?id=' + operaId + movieId
    // location.href = '../html/01.unselected.html?id=' + operaId +'&'+ movieId
})