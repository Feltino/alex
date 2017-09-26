$(document).ready(function () {
    $("img").lazyload({effect:"fadeIn"});
    $("a[rel='colorbox']").colorbox({
        close:"x",
        closeButton:true,
        initialWidth:"292px", initialHeight:"368px"
    });
});