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
    loader=new LLoader();
    loader.addEventListener(LEvent.COMPLETE,loadBitmapdata);
    loader.load("images/test.jpg","bitmapData");
}
function loadBitmapdata(event){
    var bitmapdata=new LBitmapData(loader.content,50,50,200,200);
    var bitmap=new LBitmap(bitmapdata);
    var layer=new LSprite();
    addChild(layer);
    layer.addChild(bitmap);
    layer.x=150;
    layer.y=50;
    layer.rotate=30;
}