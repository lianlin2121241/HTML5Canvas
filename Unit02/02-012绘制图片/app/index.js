/**
 * Created by Administrator on 16-3-18.
 */
var c=document.getElementById("myCanvas");
c.width="700";
c.height="500";
var ctx= c.getContext("2d");


var img=document.getElementById("img");
/**
 * ����ͼƬ
 * drawImage(image,dx,dy)
 * drawImage(image,dx,dy,dw,dh)
 * drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh)
 * dx��dy��image��Canvas�ж�λ������ֵ
 * dw��dh����ʾimage��Canvas�м�����������Ŀ�Ⱥ͸߶�
 * sx��sy��image��Ҫ���Ƶ���ʼλ��
 * sw��sh��image��Ҫ��������Ŀ�Ⱥ͸߶�
 */
img.onload=function(){
    ctx.drawImage(img,10,10);
    ctx.drawImage(img,320,10,200,200);
    ctx.drawImage(img,50,120,200,180,320,220,150,150);
}

