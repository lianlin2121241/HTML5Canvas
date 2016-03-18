/**
 * Created by Administrator on 16-3-18.
 */
var c=document.getElementById("myCanvas");
c.width="500";
c.height="500";
var ctx=c.getContext("2d");
ctx.lineWidth=5;
ctx.strokeStyle="red";
ctx.fillStyle="#00ff00";

/**
 * 设定绘制区域
 * clip(将上边绘制的图形当做绘制区域，后边绘制的图像无论有多大，都只显示绘制区域中的内容)：
 */
ctx.rect(0,0,300,300);
//ctx.arc(100,100,40,0,360*Math.PI/180,true);
ctx.clip();

ctx.beginPath();
//ctx.fillRect(0,0,300,300);
ctx.arc(200,300,150,0,360*Math.PI/180,true);
ctx.fill();
