/**
 * Created by Administrator on 16-3-18.
 */
var c=document.getElementById("myCanvas");
c.width="800";
c.height="500";
var ctx= c.getContext("2d");

//��������
ctx.font="30px Arial";

/**
 * ��������
 * fillText(Ҫ���Ƶ��ַ�����������������X��������������Y��[�����ı����])
 */
ctx.fillText("Hello world",100,50,50);

/**
 * �������ֱ߿�
 * strokeText(Ҫ���Ƶ��ַ�����������������X��������������Y��[�����ı����])
 */
ctx.strokeText("Hello world",100,100);

ctx.beginPath();
//��������
//[font-weight]:normal��������bold�����塢bolder�����֡�lighter����ϸ��[��ֵ��300]
//[font-style]:normal��������italic��б�塢oblique��б��
ctx.font="300 30px Arial";
ctx.fillText("Hello world (Arial)",100,150);

ctx.beginPath();
//��������
ctx.font="italic normal 30px Verdana";
ctx.fillText("Hello world (Verdana)",100,200);

ctx.beginPath();
//��������
ctx.font="oblique bold 30px Times New Roman";
ctx.fillText("Hello world (Times New Roman)",100,250);

ctx.beginPath();
//��������
ctx.font="bolder 30px Courier New";
ctx.fillText("Hello world (Courier New)",100,300);

ctx.beginPath();
//��������
ctx.font="lighter 30px serif";
ctx.fillText("Hello world (serif)",100,350);

ctx.beginPath();
//��������
ctx.font="700 30px sans-serif";
ctx.fillText("Hello world (sans-serif)",100,400);

