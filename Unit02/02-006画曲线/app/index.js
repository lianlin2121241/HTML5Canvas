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
 * 画二次贝塞尔曲线
 * quadraticCurveTo(控制点坐标X，控制点坐标Y，终点坐标X，终点坐标Y)：
 */
//ctx.beginPath();
//ctx.moveTo(100,100);
//ctx.quadraticCurveTo(20,50,200,20);
//ctx.stroke();


/**
 * 画三次贝塞尔曲线
 * bezierCurveTo(控制点1坐标X，控制点1坐标Y，控制点2坐标X，控制点2坐标Y，终点坐标X，终点坐标Y)：
 */
ctx.beginPath();
ctx.moveTo(68,130);
var cX1=20;
var cY1=10;
var cX2=268;
var cY2=10;
var endX=268;
var endY=170;
ctx.bezierCurveTo(cX1,cY1,cX2,cY2,endX,endY);
ctx.stroke();
