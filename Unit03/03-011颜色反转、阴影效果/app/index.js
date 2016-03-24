/**
 * Created by Administrator on 16-3-18.
 */
var c=document.getElementById("myCanvas");
c.width=700;
c.height=700;
var ctx=c.getContext("2d");

var image=new Image();
image.src="images/test.jpg";
image.onload=function(){
    ctx.drawImage(image,0,0);

    var imgdata=ctx.getImageData(0,0,300,300);
    var pixels=imgdata.data;
    for(var i= 0;i<pixels.length;i+=4){
        pixels[i+0]=255-pixels[i+0];
        pixels[i+1]=255-pixels[i+1];
        pixels[i+2]=255-pixels[i+2];
        pixels[i+3]=255;
    }
    ctx.putImageData(imgdata,300,0);

    /**
     * 阴影效果
     * shadowColor：阴影颜色
     * shadowBlur：阴影羽化
     * shadowOffsetX：阴影横向偏移量
     * shadowOffsetY：阴影纵向偏移量
     */
    ctx.shadowColor="#ff0000";
    ctx.shadowBlur=40;
    ctx.shadowOffsetX=20;
    ctx.shadowOffsetY=30;
    ctx.drawImage(image,0,300);
}