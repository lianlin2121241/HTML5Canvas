/**
 * Created by Administrator on 16-3-18.
 */
var c=document.getElementById("myCanvas");
c.width="500";
c.height="500";
var ctx=c.getContext("2d");
ctx.lineWidth=5;
ctx.strokeStyle="red";

/**
 * ��Բ��
 * arcTo(P1������X��P1������Y��P2������X��P2������Y��Բ���뾶)��
 * stroke()
 * ��Բ����һ�����뵱ǰλ�õ�P1���߶����У�����һ����ʹ�P1��P2���߶����С��������е����Բ���������յ㣬Բ���Ļ��Ʒ�����������������е�����Բ������
 */
//ctx.beginPath();
//ctx.moveTo(20,20);
//ctx.lineTo(70,20);
//ctx.arcTo(120,20,120,70,50);
//ctx.lineTo(120,120);
//ctx.stroke();


//��Բ�Ǿ���
ctx.beginPath();
ctx.moveTo(40,20);
ctx.lineTo(100,20);
ctx.arcTo(120,20,120,40,20);
ctx.lineTo(120,70);
ctx.arcTo(120,90,100,90,20);
ctx.lineTo(40,90);
ctx.arcTo(20,90,20,70,20);
ctx.lineTo(20,40);
ctx.arcTo(20,20,40,20,20);
ctx.stroke();
