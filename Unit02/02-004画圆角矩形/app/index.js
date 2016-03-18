/**
 * Created by Administrator on 16-3-18.
 */
var c=document.getElementById("myCanvas");
c.width="500";
c.height="500";
var ctx=c.getContext("2d");
ctx.lineWidth=5;
ctx.strokeStyle="red";

/**
 * 画圆弧
 * arcTo(P1的坐标X，P1的坐标Y，P2的坐标X，P2的坐标Y，圆弧半径)：
 * stroke()
 * 该圆弧有一个点与当前位置到P1的线段相切，还有一个点和从P1到P2的线段相切。这两个切点就是圆弧的起点和终点，圆弧的绘制方向就是连接这两个切点的最短圆弧方向
 */
//ctx.beginPath();
//ctx.moveTo(20,20);
//ctx.lineTo(70,20);
//ctx.arcTo(120,20,120,70,50);
//ctx.lineTo(120,120);
//ctx.stroke();


//画圆角矩形
ctx.beginPath();
ctx.moveTo(40,20);
ctx.lineTo(100,20);
ctx.arcTo(120,20,120,40,20);
ctx.lineTo(120,70);
ctx.arcTo(120,90,100,90,20);
ctx.lineTo(40,90);
ctx.arcTo(20,90,20,70,20);
ctx.lineTo(20,40);
ctx.arcTo(20,20,40,20,20);
ctx.stroke();
