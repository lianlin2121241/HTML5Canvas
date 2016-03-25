/**
 * Created by Administrator on 16-3-18.
 */
/**
 * LSprite():新建层
 * 属性：x、y、alpha、rotate、scaleX、scaleY
 */
var loader;
init(50,"mylegend",500,350,main);
function main(){
    /**
     * LGraphics:定义绘图类
     * 绘制矩形
     * LGraphics.drawRect(thickness,lineColor,pointArray[,isfill,color])
     * 绘制圆
     * LGraphics.drawArc(thickness,lineColor,pointArray[,isfill,color])
     * 绘制多边形
     * LGraphics.drawVertices(thickness,lineColor,pointArray[,isfill,color])
     * thickness：边框宽度
     * lineColor：边框颜色
     * pointArray：画图参数
     * isfill：是否填充
     * color：填充颜色
     * @type {LGraphics}
     */
    var graphiceRect=new LGraphics();
    addChild(graphiceRect);
    graphiceRect.drawRect(1,"#000000",[50,50,100,100]);
    graphiceRect.drawRect(1,"#ffff00",[170,50,100,100],true,"#00ffff");

    var graphiceArc=new LGraphics();
    addChild(graphiceArc);
    graphiceArc.drawArc(1,"#000000",[60,250,50,0,360*Math.PI/180]);
    graphiceArc.drawArc(1,"#ffff00",[170,250,50,0,360*Math.PI/180],true,"#00ffff");

    var graphiceVertices=new LGraphics();
    addChild(graphiceVertices);
    graphiceVertices.drawVertices(1,"#000000",[[300,200],[330,200],[350,230],[330,260],[300,260],[280,230]]);
    graphiceVertices.drawVertices(1,"#ffff00",[[400,200],[430,200],[450,230],[430,260],[400,260],[380,230]],true,"#00ffff");
}