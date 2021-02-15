$(document).ready(function() {
    
    const navbar = $("#main-menu");
    const button = $("#top_button");

    $(window).scroll(function () {
        if ($(window).scrollTop() <= 80) {
            navbar.removeClass("nav-scroll");

            button.removeClass("top_button");
            button.addClass("top_button_del");
        } else {
            navbar.addClass("nav-scroll");

            button.addClass("top_button");
            button.removeClass("top_button_del");
        }
    });


})