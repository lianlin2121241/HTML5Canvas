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
 * ��Բ
 * arc(ԭ������X��Բ������Y���뾶����ʼ���ȣ��������ȣ������޷����㣩���Ƿ���ʱ��)��
 * stroke()
 */
//ctx.arc(100,100,70,0,130*Math.PI/180,false);
//ctx.stroke();


/**
 * ��ʵ��Բ
 * arc(ԭ������X��Բ������Y���뾶����ʼ���ȣ��������ȣ������޷����㣩���Ƿ���ʱ��)��
 * fill()
 */
ctx.arc(100,100,70,150*Math.PI/180,360*Math.PI/180,false);
ctx.fill();