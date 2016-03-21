/**
 * Created by Administrator on 16-3-18.
 */
var c=document.getElementById("myCanvas");
c.width="500";
c.height="500";
var ctx= c.getContext("2d");


/**
 * …Ë÷√◊÷ÃÂ
 * ctx.textBaseline£∫alphabetic°¢bottom°¢hanging°¢ideographic°¢middle°¢top
 */
ctx.beginPath();
ctx.textBaseline="alphabetic";
ctx.font="30px Verdana";
ctx.fillText("Hello world (alphabetic)",50,50);
ctx.moveTo(0,50);
ctx.lineTo(500,50);
ctx.stroke();

ctx.beginPath();
ctx.textBaseline="bottom";
ctx.font="30px Verdana";
ctx.fillText("Hello world (bottom)",50,100);
ctx.moveTo(0,100);
ctx.lineTo(500,100);
ctx.stroke();

ctx.beginPath();
ctx.textBaseline="hanging";
ctx.font="30px Verdana";
ctx.fillText("Hello world (hanging)",50,150);
ctx.moveTo(0,150);
ctx.lineTo(500,150);
ctx.stroke();

ctx.beginPath();
ctx.textBaseline="ideographic";
ctx.font="30px Verdana";
ctx.fillText("Hello world (ideographic)",50,200);
ctx.moveTo(0,200);
ctx.lineTo(500,200);
ctx.stroke();

ctx.beginPath();
ctx.textBaseline="middle";
ctx.font="30px Verdana";
ctx.fillText("Hello world (middle)",50,250);
ctx.moveTo(0,250);
ctx.lineTo(500,250);
ctx.stroke();

ctx.beginPath();
ctx.textBaseline="top";
ctx.font="30px Verdana";
ctx.fillText("Hello world (top)",50,300);
ctx.moveTo(0,300);
ctx.lineTo(500,300);
ctx.stroke();

