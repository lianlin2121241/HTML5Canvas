/**
 * Created by Administrator on 16-3-18.
 */
var c=document.getElementById("myCanvas");
c.width="700";
c.height="500";
var ctx= c.getContext("2d");


ctx.beginPath();
ctx.strokeStyle="red";
ctx.strokeRect(50,50,150,100);

/**
 * Ðý×ª
 * transform();
 * (p1.x-p0.x)/width    (p2.x-p0.x)/height  p0.x
 * (p1.y-p0.y)/width    (p2.y-p0.y)/height  p0.y
 * 0                    0                   1
 * ¾ØÐÎÊ¾Àý
 *  p0        p1
 *  ©°-------©´
 *  |        |
 * ©¸-------©¼
 * p2       p3
 *
 * (p3.x-p2.x)/width    (p3.x-p1.x)/height  p0.x
 * (p3.y-p2.y)/width    (p3.y-p1.y)/height  p0.y
 * 0                    0                   1
 */
ctx.transform(1,10/150,-40/100,1,30,10);
ctx.beginPath();
ctx.strokeStyle="green";
ctx.strokeRect(50,50,150,100);


ctx.setTransform(130/150,-20/150,-20/100,80/100,0,0);
ctx.beginPath();
ctx.strokeStyle="blue";
ctx.strokeRect(50,50,150,100);
