
$(window).on('scroll', function () {
    if ($(window).scrollTop() > 100) {
        $('.navbar').addClass('sticky')
        $('.click-top').css("display","block")
    } else {
        $('.navbar').removeClass('sticky')
        $('.click-top').css("display","none")
    }
});