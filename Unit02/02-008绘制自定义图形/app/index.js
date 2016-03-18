/**
 * Created by Administrator on 16-3-18.
 */
var c=document.getElementById("myCanvas");
c.width="500";
c.height="500";
var ctx= c.getContext("2d");
ctx.lineWidth=5;
ctx.strokeStyle="red";
ctx.fillStyle="#00ff00";

/**
 * 结束路径
 * closePath()
 * 结束路径后可以移动下一个描绘点开始
 */
ctx.beginPath();
ctx.moveTo(100,150);
ctx.bezierCurveTo(50,100,50,0,150,50);
ctx.bezierCurveTo(250,0,250,100,200,150);
ctx.bezierCurveTo(250,200,250,300,150,250);
ctx.bezierCurveTo(50,300,50,200,100,150);
ctx.closePath();

ctx.moveTo(100,150);
ctx.lineTo(150,50);
ctx.lineTo(200,150);
ctx.lineTo(150,250);
ctx.lineTo(100,150);
ctx.stroke();

