/**
 * Created by Administrator on 16-3-18.
 */
var c=document.getElementById("myCanvas");
c.width="700";
c.height="500";
var ctx= c.getContext("2d");



/**
 * ���Խ��䣬���򽥱�
 * createLinearGradient(x1,y1,x2,y2)
 * x1:��ʼ��x����  y1:��ʼ��y����  x2:��ֹ��x����  y2:��ֹ��y����
 * createRadialGradient(x1,y1,r1,x2,y2,r2)
 * x1:��ʼ��x����  y1:��ʼ��y����  r1:��ʼ��뾶  x2:��ֹ��x����  y2:��ֹ��y����  r2:��ֹ��뾶
 * addColorStop(position,color)
 * position:λ��0-1֮��  color:������ɫ
 */
ctx.fillStyle="#00ff00";
ctx.font="12px ΢���ź�";
ctx.fillRect(10,10,50,50);
ctx.globalCompositeOperation="source-over";
//ctx.beginPath();
ctx.fillStyle="#ff0000";
ctx.arc(50,50,30,0,2*Math.PI);
ctx.fill();/**
 * Created by Administrator on 16-3-18.
 */
var c=document.getElementById("myCanvas");
c.width="700";
c.height="500";
var ctx= c.getContext("2d");



/**
 * 线性渐变，径向渐变
 * createLinearGradient(x1,y1,x2,y2)
 * x1:起始点x坐标  y1:起始点y坐标  x2:终止点x坐标  y2:终止点y坐标
 * createRadialGradient(x1,y1,r1,x2,y2,r2)
 * x1:起始点x坐标  y1:起始点y坐标  r1:起始点半径  x2:终止点x坐标  y2:终止点y坐标  r2:终止点半径
 * addColorStop(position,color)
 * position:位置0-1之间  color:渐变颜色
 */
ctx.font="12px 微软雅黑";

ctx.fillStyle="#00ff00";
ctx.fillRect(10,10,50,50);
ctx.globalCompositeOperation="source-over";
//ctx.beginPath();
ctx.fillStyle="#ff0000";
ctx.arc(50,50,30,0,2*Math.PI);
ctx.fill();
ctx.fillText("source-over",10,90);


ctx.fillStyle="#00ff00";
ctx.fillRect(150,10,50,50);
ctx.globalCompositeOperation="darker";
//ctx.beginPath();
ctx.fillStyle="#ff0000";
ctx.arc(200,50,30,0,2*Math.PI);
ctx.fill();
ctx.fillText("copy",150,90);