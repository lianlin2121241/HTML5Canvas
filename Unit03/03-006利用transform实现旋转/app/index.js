/**
 * Created by Administrator on 16-3-18.
 */
var c=document.getElementById("myCanvas");
c.width="700";
c.height="500";
var ctx= c.getContext("2d");


ctx.beginPath();
ctx.strokeStyle="red";
ctx.strokeRect(100,10,150,100);

/**
 * ��ת
 * transform(cos��,sin��,-sin��,cos�ȣ�0,0);
 * cos��  -sin��  e
 * sin��  cos��   f
 * 0      0       1
 * ��:�Ƕ�
 * ��ȡ��֮ǰ�ı任�������±任
 * setTransform(cos��,sin��,-sin��,cos�ȣ�0,0);
 */
ctx.transform(Math.cos(5*Math.PI/180),Math.sin(5*Math.PI/180),-Math.sin(5*Math.PI/180),Math.cos(5*Math.PI/180),0,0);
ctx.beginPath();
ctx.strokeStyle="green";
ctx.strokeRect(100,10,150,100);

ctx.setTransform(Math.cos(10*Math.PI/180),Math.sin(10*Math.PI/180),-Math.sin(10*Math.PI/180),Math.cos(10*Math.PI/180),0,0);
ctx.beginPath();
ctx.strokeStyle="blue";
ctx.strokeRect(100,10,150,100);
