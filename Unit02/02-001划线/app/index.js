/**
 * Created by Administrator on 16-3-18.
 */
var c=document.getElementById("myCanvas");
c.width="500";
c.height="500";
var ctx=c.getContext("2d");
ctx.lineWidth=10;
ctx.strokeStyle="red";

//lineCap:�߶α߽���ʽ
ctx.lineCap="butt";
//��ʼһ����·��
ctx.beginPath();
ctx.moveTo(10,10);
ctx.lineTo(150,50);
ctx.stroke();

ctx.lineCap="round";
ctx.beginPath();
ctx.moveTo(10,110);
ctx.lineTo(150,150);
ctx.stroke();

ctx.lineCap="square";
ctx.beginPath();
ctx.moveTo(10,210);
ctx.lineTo(150,250);
ctx.stroke();
