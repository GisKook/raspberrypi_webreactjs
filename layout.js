/**
 * Created by z on 2015/12/14.
 */
$(window).load(function () {

    var headerhight = document.getElementById("header").clientHeight;
    $("body").css("overflow","hidden");

    document.getElementById("menu").style.width = document.documentElement.clientWidth/2 + "px";
    var menuheight = document.documentElement.clientHeight - headerhight;
    document.getElementById("menu").style.height = menuheight+"px";

    var divpixelheight = 50;
    var divcout = menuheight/50;
    divpixelheight = menuheight/Math.floor(divcout);

    for(i = 0; i < Math.floor(divcout); i++){
        var div = document.createElement('div');
        div.id = "menu"+i;
        div.style.backgroundSize = '100% 100%';
        div.style.width = '100%';
        div.style.height = '1000px';
        document.getElementById("menu").appendChild(div);
    }

    $.getJSON("./package.json", function(data){
        var ttext = Object.keys(data)[0];
        document.getElementById("menu").innerHTML = ttext;

    });

//    var msg = document.documentElement.clientWidth;
//    window.alert(msg.toString());
    document.getElementById("show").style.width = document.documentElement.clientWidth/2 + "px";
    document.getElementById("show").style.height = document.documentElement.clientHeight - headerhight+ "px";
    document.getElementById("show").style.backgroundColor="0x000000";
});

window.onload=function(){
    var output = document.getElementById('menu');
    var i=1;
    var val="";
    while(i<=3)
    {

        if(!document.getElementById('timedrpact'+i))
        {
            var ele = document.createElement("div");
            ele.setAttribute("id","timedrpact"+i);
            ele.setAttribute("class","inner");
            ele.innerHTML="hi "+i;
            output.appendChild(ele);

        }
        i++;


    }
};

