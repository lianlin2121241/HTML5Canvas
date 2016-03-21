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
 * Æ½ÒÆ
 * translate()
 * transform(a,b,c,d,e,f);
 * a  0  e
 * 0  d  f
 * 0  0  1
 */
ctx.transform(1,0,0,1,50,100);
ctx.beginPath();
ctx.strokeStyle="red";
ctx.strokeRect(10,10,150,100);
