/**
 * Created by Administrator on 16-3-18.
 */
var c=document.getElementById("myCanvas");
c.width="700";
c.height="500";
var ctx= c.getContext("2d");


var img=document.getElementById("img");
/**
 * 绘制图片
 * drawImage(image,dx,dy)
 * drawImage(image,dx,dy,dw,dh)
 * drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh)
 * dx、dy：image在Canvas中定位的坐标值
 * dw、dh：表示image在Canvas中即将绘制区域的宽度和高度
 * sx、sy：image所要绘制的起始位置
 * sw、sh：image所要绘制区域的宽度和高度
 */
img.onload=function(){
    ctx.drawImage(img,10,10);
    ctx.drawImage(img,320,10,200,200);
    ctx.drawImage(img,50,120,200,180,320,220,150,150);
}

