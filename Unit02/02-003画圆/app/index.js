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
 * 画圆
 * arc(原型坐标X，圆心坐标Y，半径，起始弧度，结束弧度（与项限反向算），是否逆时针)：
 * stroke()
 */
//ctx.arc(100,100,70,0,130*Math.PI/180,false);
//ctx.stroke();


/**
 * 画实心圆
 * arc(原型坐标X，圆心坐标Y，半径，起始弧度，结束弧度（与项限反向算），是否逆时针)：
 * fill()
 */
ctx.arc(100,100,70,150*Math.PI/180,360*Math.PI/180,false);
ctx.fill();