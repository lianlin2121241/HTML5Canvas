/**
 * Created by Administrator on 16-3-18.
 */
var c=document.getElementById("myCanvas");
c.width="700";
c.height="500";
var ctx= c.getContext("2d");
var image=new Image();
image.src="images/test.jpg";

/**
 * 获取图片数据
 * getImageData(x：坐标X,y：坐标Y,w：宽度,h：高度)
 * putImageData(imageData,dx：图片数据坐标X,dy：图片数据坐标Y[,sx：imgdata所要绘制图片的起始位置,sy,sw：imgdata所要绘制区域的宽高,sh])
 */
image.onload=function(){
    ctx.drawImage(image,10,10);
    var imageData=ctx.getImageData(50,50,200,200);
    ctx.putImageData(imageData,320,10);
    ctx.putImageData(imageData,320,220,50,50,100,100);
}

