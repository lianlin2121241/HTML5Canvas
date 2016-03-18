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
 * 画矩形两种方式
 * 1、strokeRect(开始坐标X，开始坐标Y，结束坐标X，结束坐标Y):
 * 2、rect()：
 *    stroke()
 */
//ctx.strokeRect(10,10,70,40);

//ctx.rect(10,10,70,40);
//ctx.stroke();


/**
 * 画实心矩形两种方式
 * 1、fillRect(开始坐标X，开始坐标Y，结束坐标X，结束坐标Y):
 * 2、rect()：
 *    fill()
 */
//ctx.fillRect(10,10,70,40);

ctx.rect(10,10,70,40);
ctx.fill();