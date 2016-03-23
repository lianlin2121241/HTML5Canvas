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
var grd=ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0.2,"#00ff00");
grd.addColorStop(0.5,"#0000ff");
grd.addColorStop(0.8,"#ff0000");
ctx.fillStyle=grd;
ctx.fillRect(0,0,200,100);


var grdRadial=ctx.createRadialGradient(100,200,20,100,200,100);
grdRadial.addColorStop(0,"#00ff00");
grdRadial.addColorStop(1,"#ff0000");
ctx.fillStyle=grdRadial;
ctx.fillRect(0,100,200,200);
