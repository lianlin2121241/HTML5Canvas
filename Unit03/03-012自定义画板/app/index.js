/**
 * Created by Administrator on 16-3-18.
 */
var c=document.getElementById("myCanvas");
c.width=700;
c.height=500;
var ctx=c.getContext("2d");

ctx.fillStyle="black";
ctx.fillRect(0,0,700,500);

var onoff=false;
var oldx=-10;
var oldy=-10;
var linecolor="white";
var linw=5;

c.addEventListener("mousemove",draw,true);
c.addEventListener("mousedown",down,true);
c.addEventListener("mouseup",up,true);

/**
 * 鼠标移动
 */
function draw(event){
    if(onoff){
        var newx=event.pageX-10;
        var newy=event.pageY-10;
        ctx.beginPath();
        ctx.moveTo(oldx,oldy);
        ctx.lineTo(newx,newy);
        ctx.strokeStyle=linecolor;
        ctx.lineWidth=linw;
        ctx.lineCap="round";
        ctx.stroke();

        oldx=newx;
        oldy=newy;
    }
}
/**
 * 鼠标按下
 */
function down(event){
    onoff=true;
    oldx=event.pageX-10;
    oldy=event.pageY-10;
}

/**
 * 鼠标抬起
 */
function up(){
    onoff=false;
}

/**
 * 导出Canvas数据
 */
function copyimage(){
    var imageSrc= c.toDataURL("image/png");
    var tempImg=document.createElement("img");
    tempImg.src=imageSrc;
    var bodyEle=document.getElementsByTagName("body")[0];
    bodyEle.appendChild(tempImg);
}