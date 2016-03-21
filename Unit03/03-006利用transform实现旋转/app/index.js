/**
 * Created by Administrator on 16-3-18.
 */
var c=document.getElementById("myCanvas");
c.width="700";
c.height="500";
var ctx= c.getContext("2d");


ctx.beginPath();
ctx.strokeStyle="red";
ctx.strokeRect(100,10,150,100);

/**
 * Ðý×ª
 * rotate(angle);
 * angle:½Ç¶È
 */
ctx.rotate(30*Math.PI/180);
ctx.beginPath();
ctx.strokeStyle="red";
ctx.strokeRect(100,10,150,100);
