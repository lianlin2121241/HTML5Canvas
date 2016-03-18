/**
 * Created by Administrator on 16-3-18.
 */
var c=document.getElementById("myCanvas");
c.width="800";
c.height="500";
var ctx= c.getContext("2d");

//设置字体
ctx.font="30px Arial";

/**
 * 绘制文字
 * fillText(要绘制的字符串，绘制文字坐标X，绘制文字坐标Y，[绘制文本宽度])
 */
ctx.fillText("Hello world",100,50,50);

/**
 * 绘制文字边框
 * strokeText(要绘制的字符串，绘制文字坐标X，绘制文字坐标Y，[绘制文本宽度])
 */
ctx.strokeText("Hello world",100,100);

ctx.beginPath();
//设置字体
//[font-weight]:normal：正常、bold：粗体、bolder：更粗、lighter：更细、[数值：300]
//[font-style]:normal：正常、italic：斜体、oblique：斜体
ctx.font="300 30px Arial";
ctx.fillText("Hello world (Arial)",100,150);

ctx.beginPath();
//设置字体
ctx.font="italic normal 30px Verdana";
ctx.fillText("Hello world (Verdana)",100,200);

ctx.beginPath();
//设置字体
ctx.font="oblique bold 30px Times New Roman";
ctx.fillText("Hello world (Times New Roman)",100,250);

ctx.beginPath();
//设置字体
ctx.font="bolder 30px Courier New";
ctx.fillText("Hello world (Courier New)",100,300);

ctx.beginPath();
//设置字体
ctx.font="lighter 30px serif";
ctx.fillText("Hello world (serif)",100,350);

ctx.beginPath();
//设置字体
ctx.font="700 30px sans-serif";
ctx.fillText("Hello world (sans-serif)",100,400);

