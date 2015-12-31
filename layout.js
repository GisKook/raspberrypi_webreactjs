/**
 * Created by z on 2015/12/14.
 */

var divpixelheight = 100;
var menudivcount;
var colors = ['#FFF5EE','#F5FFFA','#FFF0F5','#B0E0E6','#EEE8AA','#F5DEB3','#DDA0DD','#FFFFF0','#EED8AE','#FFF68F','#BBFFFF'];
$(window).load(function () {

    $("body").css("overflow","hidden");

    var headerhight = document.getElementById("header").clientHeight;
    document.getElementById("menu").style.width = document.documentElement.clientWidth/2 + "px";
    var menuheight = document.documentElement.clientHeight - headerhight;
    document.getElementById("menu").style.height = menuheight+"px";


    var divcount = menuheight/divpixelheight;
    menudivcount = Math.floor(divcount);
    divpixelheight = menuheight/Math.floor(divcount);

    for(i = 0; i < Math.floor(divcount); i++){
        var div = document.createElement('div');
        div.id = "menu"+i;
        div.style.backgroundSize = '100% 100%';
        div.style.backgroundColor = colors[i%11];
        div.style.width = '100%';
        div.style.height = divpixelheight + "px";
        div.style.color = 'black';
        div.style.border = 'none';
        div.style.margin = '0';
        div.style.float = 'left';
        div.style.textAlign = 'leftcenter';
        div.style.padding = '0px';
        div.style.fontFamily = '微软雅黑';
        div.style.fontSize = Math.floor(divpixelheight*0.8) + "px";

        document.getElementById("menu").appendChild(div);
    }

//    var msg = document.documentElement.clientWidth;
//    window.alert(msg.toString());
    document.getElementById("show").style.width = document.documentElement.clientWidth/2 + "px";
    document.getElementById("show").style.height = document.documentElement.clientHeight - headerhight+ "px";
    document.getElementById("show").style.backgroundColor="#90EE90";

    updateMenu();
});

setInterval(updateMenu, 10000);

var page = 0;
function updateMenu(){
    $.getJSON("./package.json", function(data){

        var itemcount = Object.keys(data).length;
        var startitem =page % (Math.ceil(itemcount/menudivcount));
        for(i = startitem * menudivcount;  i < startitem * menudivcount + menudivcount; i++){
            var ttext = Object.keys(data)[i];
            if(ttext != null){
                document.getElementById("menu"+(i-startitem*menudivcount)).innerHTML = ttext + "  " + data[ttext];
            }else{
                document.getElementById("menu"+(i-startitem*menudivcount)).innerHTML = "";
            }
        }
        page++;

    });
}