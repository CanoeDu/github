

$(function(){


    $("#title").load("title/title-chat.html");
    $("#dynamic").load("dynamic/dynamic-chat.html");
    $("#friend").load("friend/friend.html");


    //切换
    $(".menu-content").click(function() {

        $("#dynamic").load($(this).data("dynamic"))
        $("#title").load($(this).data("title"))


    })


})
