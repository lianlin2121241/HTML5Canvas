/**
 * Created by Administrator on 16-3-18.
 */
var c=document.getElementById("myCanvas");
c.width="700";
c.height="500";
var ctx= c.getContext("2d");


ctx.beginPath();
ctx.strokeStyle="red";
ctx.strokeRect(10,10,150,100);

/**
 * ƽ��
 * translate(x,y)
 * x��ˮƽ�ƶ�λ�ã�y����ֱ�ƶ�λ��
 */
ctx.translate(50,100);
ctx.beginPath();
ctx.strokeStyle="red";
ctx.strokeRect(10,10,150,100);
