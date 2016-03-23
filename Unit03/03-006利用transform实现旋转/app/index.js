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
 * 旋转
 * transform(cosθ,sinθ,-sinθ,cosθ，0,0);
 * cosθ  -sinθ  e
 * sinθ  cosθ   f
 * 0      0       1
 * θ:角度
 * 先取消之前的变换，再重新变换
 * setTransform(cosθ,sinθ,-sinθ,cosθ，0,0);
 */
ctx.transform(Math.cos(5*Math.PI/180),Math.sin(5*Math.PI/180),-Math.sin(5*Math.PI/180),Math.cos(5*Math.PI/180),0,0);
ctx.beginPath();
ctx.strokeStyle="green";
ctx.strokeRect(100,10,150,100);

ctx.setTransform(Math.cos(10*Math.PI/180),Math.sin(10*Math.PI/180),-Math.sin(10*Math.PI/180),Math.cos(10*Math.PI/180),0,0);
ctx.beginPath();
ctx.strokeStyle="blue";
ctx.strokeRect(100,10,150,100);
