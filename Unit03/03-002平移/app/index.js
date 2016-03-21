/**
 * Created by Administrator on 16-3-18.
 */
var c=document.getElementById("myCanvas");
c.width="700";
c.height="500";
var ctx= c.getContext("2d");


ctx.beginPath();
ctx.strokeStyle="red";
ctx.strokeRect(10,10,150,100);

/**
 * 平移
 * translate(x,y)
 * x：水平移动位置，y：垂直移动位置
 */
ctx.translate(50,100);
ctx.beginPath();
ctx.strokeStyle="red";
ctx.strokeRect(10,10,150,100);
