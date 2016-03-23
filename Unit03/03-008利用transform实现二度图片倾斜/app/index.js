/**
 * Created by Administrator on 16-3-18.
 */
var c=document.getElementById("myCanvas");
c.width="700";
c.height="500";
var ctx= c.getContext("2d");


var img=new Image();
img.src="images/test.jpg";
img.onload=function(){

    /**
     * ��ת
     * beginPath()-��ʼ·��
     * closePath()-����·��
     * clip()-ʵ����ʾ·��
     * save��restoreΪ�������λ�ִ���ܸ���
     */
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(80,0);
    ctx.lineTo(320,40);
    ctx.lineTo(0,200);
    ctx.closePath();
    ctx.clip();
    ctx.setTransform((320-80)/300,40/300,-80/300,200/300,80,0);
    ctx.drawImage(img,0,0);
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(320,40);
    ctx.lineTo(0,200);
    ctx.lineTo(700,300);
    ctx.closePath();
    ctx.clip();
    ctx.setTransform(230/300,(170-200)/300,(230-320)/300,(170-40)/300,90,70);
    ctx.drawImage(img,0,0);
    ctx.restore();
}
