/**
 * Created by Administrator on 16-3-18.
 */
var c=document.getElementById("myCanvas");
c.width="500";
c.height="500";
var ctx= c.getContext("2d");

ctx.moveTo(160,0);
ctx.lineTo(160,500);
ctx.stroke();


/**
 * ��������
 * ctx.textAlign��center��end��left��right��start��
 */
ctx.beginPath();
//��������
ctx.textAlign="start";
ctx.font="30px Verdana";
ctx.fillText("Hello world",160,200);

ctx.beginPath();
//��������
ctx.textAlign="end";
ctx.font="30px Times New Roman";
ctx.fillText("Hello world",160,250);

ctx.beginPath();
//��������
ctx.textAlign="left";
ctx.font="30px Courier New";
ctx.fillText("Hello world",160,300);

ctx.beginPath();
//��������
ctx.textAlign="right";
ctx.font="30px serif";
ctx.fillText("Hello world",160,350);

ctx.beginPath();
//��������
ctx.textAlign="center";
ctx.font="30px sans-serif";
ctx.fillText("Hello world",160,400);

