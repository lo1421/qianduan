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
console.log(operaId)
// 获取电影id
var movieId = CinemasAndMoviesId % 10000000
console.log(movieId)

$.ajax({
    url: 'http://106.13.225.8:5233/woniuMovie/getAllMovies',
    type: 'GET',
    success: function (data) {
        // console.log(data.movies)
        movies = data.movies
        console.log(movies)
        var movie = movies.filter(item => item.id == movieId)
        console.log(movie)
        var movieHtml = movie.map(item => {
            return `
            <div class="photo"><img src="${item.imgSrc}" alt=""></div>
                            <div>
                                <h3>${item.title}</h3>
                                <p><span>类型:</span>剧情,青春</p>
                                <p><span>时长:</span>${item.duration}</p>
                            </div>
            `
        }).join('')
        $('#movie-box').html(movieHtml)
    }

})

// 选座盒子
for (var i = 1; i <= 12; i++) {
    for (var j = 1; j <= 15; j++) {
        if (
            i == 6 && j == 1 ||
            i == 7 && j == 1 ||
            i == 8 && j == 1 ||
            i == 9 && j == 1 ||
            i == 10 && j == 1 ||
            i == 11 && j == 1 ||
            i == 12 && j == 1 ||
            i == 6 && j == 15 ||
            i == 7 && j == 15 ||
            i == 8 && j == 15 ||
            i == 9 && j == 15 ||
            i == 10 && j == 15 ||
            i == 11 && j == 15 ||
            i == 12 && j == 15

        ) {
            var spanHtml = $(`<span></span>`)
            $('.seat-box').append(spanHtml)
        } else {
            var divHtml = $(`<div data-id="${i}-${j}"></div>`)
            $('.seat-box').append(divHtml)
        }

    }
}

/* 
  string 字符串; 
  str 指定字符; 
  split(),用于把一个字符串分割成字符串数组; 
  split(str)[0],读取数组中索引为0的值（第一个值）,所有数组索引默认从0开始; 
 */
function getStr(string, str) {
    var str_before = string.split(str)[0];
    var str_after = string.split(str)[1];
    return str_before + '行' + str_after + '列'
}

var seatingpPlan = [];
var num = 0;
var moviePrice;
$('.seat-box').on('click', 'div', function () {
    if (num < 5) {
        $(this).css('background', 'url(../images/购票-已选座位.jpg)')
        // console.log($(this).data('id'))
        seatingpPlan.push(getStr(`${$(this).data('id')}`, '-'))
        console.log(seatingpPlan)
        var seatingpPlanHtml = seatingpPlan.map(item => {
            return `
            <span>${item}</span>
            `
        }).join('')
        // console.log(seatingpPlanHtml)
        $('#seatingp-plan').html(seatingpPlanHtml)
        num++
        moviePrice = num * 26
        $('#movieprice').html(moviePrice)
    } else {
        return
    }
    // console.log(num)
    localStorage.seatingpPlan = JSON.stringify(seatingpPlan)
})



function ruleTest(reg, node) {
    var res = reg.test(node.val())
    // console.log(res)
    if (res) {
        node.css('borderColor', 'green')
    } else {
        node.css('borderColor', 'red')
    }
    return res
}
var phoneIstrue = false
var codeisTrue = false
$('#inputPhone').on('blur', function () {
    // console.log($(this).val())
    var phoneReg = /^1[3-9]\d{9}$/
    phoneIstrue = ruleTest(phoneReg, $(this))
})
$('#inputCode').on('blur', function () {
    // console.log($(this).val())
    var codeReg = /^\d{4}$/
    codeisTrue = ruleTest(codeReg, $(this))
    if (phoneIstrue == true && codeisTrue == true) {
        $('#confirmSeat').css('backgroundColor', '#f99135')
    }
})

$('#confirmSeat').on('click', function () {
    if (phoneIstrue == true && codeisTrue == true) {
        location.href = '../html/surePay.html?' + movieId + '&' + moviePrice
    }
})


