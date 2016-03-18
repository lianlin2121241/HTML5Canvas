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
 * 擦除Canvas面板
 * clearRect(起始坐标X，起始坐标Y，结束坐标X，结束坐标Y)：
 */
ctx.beginPath();
ctx.fillRect(10,10,200,100);
ctx.clearRect(30,30,50,50);
