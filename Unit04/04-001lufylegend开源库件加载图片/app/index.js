/**
 * Created by Administrator on 16-3-18.
 */
/**
 * init初始化
 * init(speed,divid,width,height,completeFunc)
 * speed：游戏速度设定
 * divid：div的ID
 * width：游戏界面宽
 * height：游戏界面高
 * completeFunc：游戏初始化完成后调用此函数
 *
 * LBitmapData(image,x,y,width,height)
 * image：图片
 * x：Image可视范围x坐标
 * y：Image可视范围y坐标
 * width：Image可视范围宽
 * height：Image可视范围高
 *
 * LBitmap(LBitmapData)
 * LBitmapData：图像数据
 * 属性：x、y、alpha、rotate、scaleX、scaleY
 */
var loader;
init(50,"mylegend",500,350,main);
function main(){
    //alert("lufylegend start");
    loader=new LLoader();
    loader.addEventListener(LEvent.COMPLETE,loadBitmapdata);
    loader.load("images/test.jpg","bitmapData");
}
function loadBitmapdata(event){
    var bitmapdata=new  LBitmapData(loader.content,50,50,200,200);
    var bitmap=new LBitmap(bitmapdata);
    bitmap.x=100;
    bitmap.y=50;
    bitmap.rotate=60;
    bitmap.alpha=0.6;
    bitmap.scaleX=1.3;
    bitmap.scaleY=1.2;
    addChild(bitmap);
    console.log(loader);
    console.log(loader.content);
    console.log(bitmap);
    console.log(event);
}