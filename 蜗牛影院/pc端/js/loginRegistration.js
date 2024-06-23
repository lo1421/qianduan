$('.login-out-btn').on('click', function () {
    $('.Modal-box').css('display', 'block')
    $('.login-box').css('display', 'flex')
    $('.login-in-btn').css('borderColor', '#fa9136')

})
function CloseModal() {
    $('.register-box').css('display', 'none')
    $('.Modal-nav li').css('borderColor', 'transparent')
    $('.login-box').css('display', 'none')
    $('.Modal-box').css('display', 'none')
}
$('.Modal-Close-box').on('click', function () {
    CloseModal()
})
$('.register-out-btn').on('click', function () {
    $('.Modal-box').css('display', 'block')
    $('.register-box').css('display', 'flex')
    $('.register-in-btn').css('borderColor', '#fa9136')

})


$('.login-in-btn').on('click', function () {
    $('.register-box').css('display', 'none')
    $('.login-box').css('display', 'flex')
    $('.Modal-nav li').css('borderColor', 'transparent')
    $(this).css('borderColor', '#fa9136')

})
$('.register-in-btn').on('click', function () {
    $('.login-box').css('display', 'none')
    $('.register-box').css('display', 'flex')
    $('.Modal-nav li').css('borderColor', 'transparent')
    $(this).css('borderColor', '#fa9136')

})

// 本地存储登录注册


$('#registerBtn').on('click', function () {
    var users = JSON.parse(localStorage.users || '[]')
    var inputphone = $('#registerphone').val()
    var inputPass = $('#registerpass').val()
    users.push({ phonenum: inputphone, password: inputPass })
    localStorage.users = JSON.stringify(users)
})
$('#loginBtn').on('click', function () {
    loginphone = $('#loginphone').val()
    loginpass = $('#loginpass').val()
    var loginUsers = JSON.parse(localStorage.users || '[]')
    var isTrue = loginUsers.some(item => item.phonenum == loginphone && item.password == loginpass)
    if (isTrue) {
        CloseModal()
        $('#headImg').html('<img src="../images/个人中心-基本信息-01.jpg"></img>')
    } else {
        $('#loginphone').css('borderColor', 'red')
        $('#loginpass').css('borderColor', 'red')
    }
    console.log(isTrue)
})