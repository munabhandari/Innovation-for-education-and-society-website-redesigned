
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $(".banner1 article").addClass("sticky-article");
        $("header").addClass("sticky");
    }
    else {
        $(".banner1 article").removeClass("sticky-article");
        $("header").removeClass("sticky")
    }
})