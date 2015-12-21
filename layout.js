/**
 * Created by z on 2015/12/14.
 */
$(window).load(function () {

    var headerhight = document.getElementById("header").clientHeight;
    $("body").css("overflow","hidden");

    document.getElementById("menu").style.width = document.documentElement.clientWidth/2 + "px";
    document.getElementById("menu").style.height = document.documentElement.clientHeight - headerhight+ "px";

//    var msg = document.documentElement.clientWidth;
//    window.alert(msg.toString());
    document.getElementById("show").style.width = document.documentElement.clientWidth/2 + "px";
    document.getElementById("show").style.height = document.documentElement.clientHeight - headerhight+ "px";
    document.getElementById("show").style.backgroundColor="0x000000";

});
