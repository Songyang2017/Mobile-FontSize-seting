(function () {
    var html = document.documentElement;

    function onWindowResize() {
        if (html.getBoundingClientRect().width < 750) {
            html.style.fontSize = html.getBoundingClientRect().width / 10 + "px"
        } else {
            html.style.fontSize = 75 + "px"
        }
    }
    window.addEventListener("resize", onWindowResize);
    onWindowResize()
})();