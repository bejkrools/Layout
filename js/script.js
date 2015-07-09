$(document).ready(function( $ ){
    $(document).scroll(function(){
        var top = $(document).scrollTop();
        console.log(top);
        if (top > 160) 
        {
            $(".small-header").css("display", "block");
            $(".big-header").css("display", "none");
            $(".small-header").stop().animate({top: "0"}, 500);
        }
        if (top < 100)
        {
            $(".small-header").css("top", "-4em");
            $(".small-header").css("display", "none");
            $(".big-header").css("display", "inherit");
        }
    });
});


