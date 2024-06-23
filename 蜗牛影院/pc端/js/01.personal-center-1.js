var orders = []
$.ajax({
    url: 'http://106.13.225.8:5233/woniuMovie/getOrders',
    type: 'GET',
    success: function (data) {
        // console.log(data.orders)
        orders = data.orders
        // console.log(orders)
        var ordersHtml = orders.map(item => {
            return `
            <div class="card">
            <div class="card-top">
                <div>
                    <span>${item.buytime}</span>
                    <span>蜗牛订单号:${item.orderid}</span>
                </div>
                <div>
                    <img class="delBtn" data-id="${item._id}" src="../images/个人中心-我的订单-01.jpg" alt="">
                </div>
            </div>
            <div class="card-footer">
                <div class="one">
                    <img src="../images/个人中心-我的订单-02.jpg" alt="">
                    <ul>
                        <li>《盛夏未来》</li>
                        <li> 太平洋影城（北欧知识城店</li>
                        <li> 2号厅 ${item.seats}</li>
                        <li> ${item.playtime}</li>
                    </ul>
                </div>
                <div class="two">￥34</div>
                <div class="three">${item.status}</div>
                <div class="four">
                    <button>付款</button>
                    <span>查看详情</span>
                </div>
            </div>
        </div>
            `
        }).join('')
        $('.order-body').html(ordersHtml)
    }
})
$('.order-body').on('click','.delBtn',function(){
    // console.log($(this).data('id'))
    orders = orders.filter(item=>item._id!=$(this).data('id'))
    var ordersHtml = orders.map(item => {
        return `
        <div class="card">
        <div class="card-top">
            <div>
                <span>${item.buytime}</span>
                <span>蜗牛订单号:${item.orderid}</span>
            </div>
            <div>
                <img class="delBtn" data-id="${item._id}" src="../images/个人中心-我的订单-01.jpg" alt="">
            </div>
        </div>
        <div class="card-footer">
            <div class="one">
                <img src="../images/个人中心-我的订单-02.jpg" alt="">
                <ul>
                    <li>《盛夏未来》</li>
                    <li> 太平洋影城（北欧知识城店</li>
                    <li> 2号厅 ${item.seats}</li>
                    <li> ${item.playtime}</li>
                </ul>
            </div>
            <div class="two">￥34</div>
            <div class="three">${item.status}</div>
            <div class="four">
                <button>付款</button>
                <span>查看详情</span>
            </div>
        </div>
    </div>
        `
    }).join('')
    $('.order-body').html(ordersHtml)
})
// var movies = []
// $.ajax({
//     url: 'http://106.13.225.8:5233/woniuMovie/getAllMovies',
//     type: 'GET',
//     success: function (data) {
//         // console.log(data.movies)
//         movies = data.movies
//         // console.log(movies)
//     }
// })