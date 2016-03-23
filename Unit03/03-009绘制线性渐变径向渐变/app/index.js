/**
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
