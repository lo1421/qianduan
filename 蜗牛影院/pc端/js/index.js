//轮播图
var banner = document.querySelector('.banner');
var bannerImg = document.getElementById('bannerImg');
var imgs = ['../images/banner0.jpg', '../images/banner1.jpg', '../images/banner2.jpg', '../images/banner3.jpg'];
var lis = document.querySelectorAll('.banner ul li');
var i = 0;
Time();
function Time() {
    var timer = setInterval(() => {
        bannerImg.src = imgs[i];
        lis[i].style.backgroundColor = 'tomato';
        lis.forEach((item, index) => {
            if (index != i) {
                item.style.backgroundColor = 'white';
            }
        });
        i++;
        if (i == imgs.length) {
            i = 0;
        }
    }, 1000);
    banner.onmouseover = function () {
        clearInterval(timer);
    }
}
banner.onmouseout = function () {
    Time();
}
lis.forEach((item, index) => {
    item.onclick = function () {
        item.style.backgroundColor = 'tomato';
        var j = index;
        lis.forEach((item, index) => {
            if (index != j) {
                item.style.backgroundColor = 'white';
            }
        });
        bannerImg.src = imgs[index];
        // console.log(index);
    }
});
//鼠标移入移出效果
$('#render1').on('mouseover', '.isCard', function () {
    $(this)[0].lastElementChild.style.display = 'flex';
    $(this)[0].style.boxShadow = ' 0 0 10px rgba(0,0,0,0.8)';
})
$('#render1').on('mouseout', '.isCard', function () {
    $(this)[0].lastElementChild.style.display = 'none';
    $(this)[0].style.boxShadow = 'none'
})
$('#render2').on('mouseover', '.icC', function () {
    $(this)[0].lastElementChild.style.display = 'flex';
    $(this)[0].style.boxShadow = ' 0 0 10px rgba(0,0,0,0.8)';
})
$('#render2').on('mouseout', '.icC', function () {
    $(this)[0].lastElementChild.style.display = 'none';
    $(this)[0].style.boxShadow = 'none'
})
//index正在上映电影卡片内容
var movies = []
$.ajax({
    url: 'http://106.13.225.8:5233/woniuMovie/getAllMovies',
    type: 'GET',
    success: function (data) {
        console.log(data.movies)
        movies = data.movies
        var moviesHtml = movies.map(item => {
            return `
                <div class="isCard">
                    <img class="movieImg" data-id="${item.id}" src="${item.imgSrc}" alt="">
                    <div>
                        <p>${item.title}</p>
                        <span>${item.score}</span>
                    </div>
                    <div class="box1" data-id="id">
                        <p class="buyMovieTickets" data-id="${item.id}">立即购票</p>
                    </div>
                </div>
            `
        }).join('')
        $('#render1').html(moviesHtml)
        // console.log(movies.length)
        $('#movieNum').text(movies.length + '部')
    }
})
// 渲染index即将上映电影卡片内容
$.ajax({
    url: 'http://106.13.225.8:5233/woniuMovie/getUpcoming',
    type: 'GET',
    success: function (data) {
        console.log(data.upcoming)
        upcoming = data.upcoming
        var upcomingHtml = upcoming.map(item => {
            return `
            <div class="isCard2">
                <div class="icC">
                    <img src="${item.posterSrc}" alt="">
                    <div>
                        <p>${item.title}</p>
                        <span>7.5</span>
                    </div>
                    <div class="box2">
                        <p>预告片</p>
                        <i></i>
                        <p>预售</p>
                    </div>
                </div>
             <p>时长：${item.duration}</p>
            </div>
            `
        }).join('')
        $('#render2').html(upcomingHtml)
        $('#movieNum2').text(upcoming.length + '部')
    }
})


// 点击跳转到具体的电影详情信息
$('#render1').on('click', '.movieImg', function () {
    var movieId = $(this).data('id')
    // console.log(movieId)
    location.href = '../html/movieDetails.html?id=' + movieId
})
// 点击跳转到具体的影院详情信息
$('#render1').on('click', '.buyMovieTickets', function () {
    var movieId = $(this).data('id')
    // console.log(movieId)
    location.href = '../html/cinema.html?id=' + movieId
})
var operas = []
$.ajax({
    url: 'http://106.13.225.8:5233/woniuMovie/getAllOperas',
    type: 'GET',
    success: function (data) {
        console.log(data.operas)
        operas = data.operas
        $('#operas').html('<option>选择影院</option>')
        var operasHtml = operas.map(item => {
            return `
            <option value="${item.id}">${item.name}</option>
            `
        }).join('')
        $('#operas').append(operasHtml)
    }
})

$('#movies').html('<option>选择电影</option>')

$('#operas').on('change', function () {
    // console.log($('#operas option:selected').val())
    operas.find(item => item.id == $('#operas option:selected').val())
    // console.log(operas.find(item => item.id == $('#operas option:selected').val()).movies)
    var moviesId = JSON.parse(operas.find(item => item.id == $('#operas option:selected').val()).movies)
    var movie = movies.filter(item => {
        for (var i of moviesId) {
            if (item.id == i) {
                return item
            }
        }
    })
    // console.log(movie)

    var movieHtml = movie.map(item => {
        return `
        <option value="${item.id}">${item.title}</option>
        `
    }).join('')
    $('#movies').append(movieHtml)
    $('#ticketPurchaseBtn').on('click', function () {
        // console.log($('#movies option:selected').val())
        var movieId = $('#movies option:selected').val()
        // console.log(movieId)
        location.href = '../html/movieDetails.html?id=' + movieId
    })
})

