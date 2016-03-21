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
 * 放大与缩小
 * transform(a,b,c,d,e,f);
 * a  0  0
 * 0  d  0
 * 0  0  1
 */
ctx.transform(3,0,0,3,0,0);
ctx.beginPath();
ctx.strokeStyle="red";
ctx.strokeRect(10,10,150,100);
ctx.closePath();
