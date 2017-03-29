$(function () {
    var i = 0;
    $(".music_p").click(function () {
        $(this).toggleClass("rotate");
        if (i == 0) {
            $(".music_s")[0].pause();
            i = 1;
        } else {
            $(".music_s")[0].play();
            i = 0;
        }
    })
})