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
 * ��ȡͼƬ����
 * getImageData(x������X,y������Y,w�����,h���߶�)
 * putImageData(imageData,dx��ͼƬ��������X,dy��ͼƬ��������Y[,sx��imgdata��Ҫ����ͼƬ����ʼλ��,sy,sw��imgdata��Ҫ��������Ŀ��,sh])
 */
image.onload=function(){
    ctx.drawImage(image,10,10);
    var imageData=ctx.getImageData(50,50,200,200);
    ctx.putImageData(imageData,320,10);
    ctx.putImageData(imageData,320,220,50,50,100,100);
}

