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
 * ���������ַ�ʽ
 * 1��strokeRect(��ʼ����X����ʼ����Y����������X����������Y):
 * 2��rect()��
 *    stroke()
 */
//ctx.strokeRect(10,10,70,40);

//ctx.rect(10,10,70,40);
//ctx.stroke();


/**
 * ��ʵ�ľ������ַ�ʽ
 * 1��fillRect(��ʼ����X����ʼ����Y����������X����������Y):
 * 2��rect()��
 *    fill()
 */
//ctx.fillRect(10,10,70,40);

ctx.rect(10,10,70,40);
ctx.fill();