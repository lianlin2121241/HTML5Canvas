/**
 * Created by Administrator on 16-3-18.
 */
var c=document.getElementById("myCanvas");
c.width="500";
c.height="500";
var ctx=c.getContext("2d");
ctx.lineWidth=5;
ctx.strokeStyle="red";
ctx.fillStyle="#00ff00";

/**
 * �趨��������
 * clip(���ϱ߻��Ƶ�ͼ�ε����������򣬺�߻��Ƶ�ͼ�������ж�󣬶�ֻ��ʾ���������е�����)��
 */
ctx.rect(0,0,300,300);
//ctx.arc(100,100,40,0,360*Math.PI/180,true);
ctx.clip();

ctx.beginPath();
//ctx.fillRect(0,0,300,300);
ctx.arc(200,300,150,0,360*Math.PI/180,true);
ctx.fill();
