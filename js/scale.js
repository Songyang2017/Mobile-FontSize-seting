(function (doc, win) {
    var docEle = doc.documentElement;
    var resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var recalCulate = function () {
        var width = docEle.clientWidth;
        docEle.style.fontSize = 100 * (width / 750) + 'px';
    };

    recalCulate();

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvent, recalCulate, false);
})(document, window);