// 手机端或者移动端
//console.log(navigator.userAgent);

function toMove(url){
    if(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)){
        // console.log('移动端');
         location.href = url
    }
}

function toPC(url){
    if(!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)){
        // console.log('移动端');
         location.href = url
    }
}

/**
 * 检测是移动端还是PC端跳转到相对应的页面
 * @param {String} url 传入要跳转的地址
 * @param {Boolean} isTrue  如果是PC端跳移动端传入true，如果移动端跳PC端可以不传这个参数
 */
function changePage(url,isTrue){
    if(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)){
       if(isTrue) location.href = url
    }else{
        if(!isTrue)  location.href = url
    }
    
}