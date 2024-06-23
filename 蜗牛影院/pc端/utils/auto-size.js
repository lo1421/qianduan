!(function (win, doc) {
    function setFontSize() {
        // 获取window 宽度
        var winWidth = window.innerWidth;
        // 750 是当前 UI 设计图的宽度  ,如果原稿是1200，下面就改成1200
        doc.documentElement.style.fontSize = (winWidth / 750) * 100 + 'px';
    }



    var evt = 'onorientationchange' in win ? 'orientationchange' : 'resize';

    var timer = null;

    win.addEventListener(evt, function () {
        clearTimeout(timer);

        timer = setTimeout(setFontSize, 300);
    }, false);

    win.addEventListener("pageshow", function (e) {
        if (e.persisted) {
            clearTimeout(timer);

            timer = setTimeout(setFontSize, 300);
        }
    }, false);

    //初始化
    setFontSize();

}(window, document));