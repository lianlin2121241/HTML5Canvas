/**
 * Created by Administrator on 16-3-18.
 */
var c=document.getElementById("myCanvas");
c.width="700";
c.height="500";
var ctx= c.getContext("2d");


//ctx.beginPath();
//ctx.strokeStyle="red";
//ctx.strokeRect(10,10,150,100);
//
///**
// * �Ŵ�����С
// * scale(x,y);
// * x��x�����ţ�y��y������
// */
//ctx.scale(3,3);
//ctx.beginPath();
//ctx.strokeStyle="red";
//ctx.strokeRect(10,10,150,100);
//ctx.closePath();



//ctx.beginPath();
//ctx.strokeStyle="green";
//ctx.strokeRect(10,120,150,100);
//
///**
// * �Ŵ�����С
// * scale(x,y);
// * x��x�����ţ�y��y������
// */
//ctx.scale(0.5,0.5);
//ctx.beginPath();
//ctx.strokeStyle="green";
//ctx.strokeRect(10,120,150,100);


/**
 * ��תͼƬ
 * scale(x,y);
 * x��x�����ţ�y��y������
 */
var image=new Image();
image.src="images/test.jpg";
image.onload=function(){
    ctx.drawImage(image,10,10);
    ctx.scale(1,-1);
    ctx.drawImage(image,310,-310);
}
