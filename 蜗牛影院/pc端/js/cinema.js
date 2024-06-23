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
// console.log(movieId.id)
var operas = []
$.ajax({
    url: 'http://106.13.225.8:5233/woniuMovie/getAllOperas',
    type: 'GET',
    success: function (data) {
        // console.log(data.operas)
        var operas = data.operas
        var operasHtml = operas.map(item => {
            return `
            <li class="operaLi" data-id="${item.id}">${item.name}</li>
            
            `
        }).join('')
        $('#operas').html(operasHtml)
        function operasCardShow(opera = operas) {
            var operasCardHtml = opera.map(item => {
                return `
                <div class="m-card">
                    <div class="m-c-l">
                        <p>${item.name}</p>
                        <p>地址：${item.address}</p>
                        <button>改签</button>
                        <button>折扣卡</button>
                    </div>
                    <div class="m-c-r">
                        <div class="zuo">
                            <p><span>￥</span>23<span>起</span></p>
                            <span>24km</span>
                        </div>
                        <div class="you">
                            <button class="buyTickets" data-id="${item.id}">选座购票</button>
                        </div>
                    </div>
                </div>
                `
            }).join('')
            $('#operasCard').html(operasCardHtml)
        }

        operasCardShow();

        $('#operas').on('click', '.operaLi', function () {
            $('.operaLi').css({
                backgroundColor: '#fff',
                color: '#000',
            })
            $(this).css({
                backgroundColor: '#f99135',
                color: '#fffefe',
            })
            newOperas = operas.filter(item => item.id == $(this).data('id'))
            console.log(newOperas)
            operasCardShow(newOperas);
        })
        $('#operasCard').on('click', '.buyTickets', function () {
            var operaId = $(this).data('id')
            // console.log(operaId)
            location.href = '../html/cinema2.html?id=' + operaId + (movieId.id)
        })


    }

})
var city = []
$.ajax({
    url: 'http://106.13.225.8:5233/woniuMovie/getCity',
    type: 'GET',
    success: function (data) {
        // console.log(data.city)
        var citys = data.city
        var citysHtml = citys.map(item => {
            return `
            <li class="citysLi" data-id="${item.id}">${item.name}</li>
            `
        }).join('')
        $('#citys').html(citysHtml)
        $('#citys').on('click', '.citysLi', function () {
            $('.citysLi').css({
                backgroundColor: '#fff',
                color: '#000',
            })
            $(this).css({
                backgroundColor: '#f99135',
                color: '#fffefe',
            })
        })
    }

})
