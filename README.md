# Mobile-FontSize-seting
关于移动端适配问题的三种方法
在项目中总结出了两种借助移动端页面适配的方法，其实是三种，等以后在更新吧。
这两种都是借用js插件，所以本次就介绍这两种插件的功能，具体哪个更好用，各位自己斟酌。

第一种的demo:https://songyang2017.github.io/Mobile-FontSize-seting/rem.html
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

原理就是利用javascript中的getBoundingClientRect()方法，获取页面的宽度，然后使之除以10（也可以自己定义）作为html根元素的fontSize，但同时也限制了最大值，当屏幕
宽度超过750px时，1rem=75px不再变化；谷歌浏览器下小于12px后也保持12px不再变化


第二种的demo:https://songyang2017.github.io/Mobile-FontSize-seting/scale.html


