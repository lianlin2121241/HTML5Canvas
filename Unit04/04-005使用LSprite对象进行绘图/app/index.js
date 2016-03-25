/**
 * Created by Administrator on 16-3-18.
 */
var loader;
init(50,"mylegend",500,350,main);

/**
 * layer.graphics得到LGraphics
 * beginBitmapFill(LBitmapData)将LBitmapData放到Lgraphics中
 * 在LGraphics中画圆，则图片数据在圆中显示
 */
function main(){
    loader=new LLoader();
    loader.addEventListener(LEvent.COMPLETE,loadBitmapdata);
    loader.load("images/test.jpg","bitmapData");

    var layer=new LSprite();
    addChild(layer);
    layer.graphics.drawRect(1,"#000000",[50,50,100,100]);
    layer.graphics.drawRect(1,"#ffff00",[170,50,100,100],true,"#00ffff");
}

function loadBitmapdata(event){
    var bitmapdata=new LBitmapData(loader.content);
    var backlayer=new LSprite();
    addChild(backlayer);
    backlayer.graphics.beginBitmapFill(bitmapdata);
    //backlayer.graphics.drawArc(1,"#000000",[100,250,50,0,Math.PI*2]);
    //backlayer.graphics.drawRect(1,"#000000",[0,200,100,100]);
    backlayer.graphics.drawVertices(1,"#000000",[[120,50],[100,200],[200,150]]);
}