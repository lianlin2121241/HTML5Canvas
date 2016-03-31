/**
 * Created by Administrator on 16-3-18.
 */
init(50,"mylegend",320,480,main);

var backLayer,
    loadingLayer,
    graphicsMap,
    nextLayer;
var imglist={};
var imgData=new Array(
    {name:"backImage",path:"images/backImage.png"},
    {name:"r1",path:"images/r1.png"},
    {name:"r2",path:"images/r2.png"},
    {name:"r3",path:"images/r3.png"},
    {name:"r4",path:"images/r4.png"}
)

function main(){
    backLayer=new LSprite();
    addChild(backLayer);
    backLayer.graphics.drawRect(0,"",[0,0,LGlobal.width,LGlobal.height],true,"#000000");

    loadingLayer=new LoadingSample1();
    backLayer.addChild(loadingLayer);
    LLoadManage.load(imgData,function(progress){
        loadingLayer.setProgress(progress);
    },gameInit)
}

function gameInit(result){
    imglist=result;
    backLayer.removeChild(loadingLayer);
    loadingLayer=null;

    var text=new LTextField();
    text.text="俄罗斯方块";
    text.x=50;
    text.y=100;
    text.size=45;
    text.color="#ffffff";
    backLayer.addChild(text);
    backLayer.graphics.drawRect(1,"#ffffff",[(LGlobal.width-220)/2,240,220,40]);
    var textClick=new LTextField();
    textClick.text="点击页面开始游戏";
    textClick.size=20;
    textClick.x=(LGlobal.width-textClick.getWidth())/2;
    textClick.y=245;
    textClick.color="#ffffff";
    backLayer.addChild(textClick);

    backLayer.addEventListener(LMouseEvent.MOUSE_UP,gameToStart);
}

function gameToStart(){
    backLayer.die();
    backLayer.removeAllChild();
    var bitmap=new LBitmap(new LBitmapData(imglist["backImage"]));
    backLayer.addChild(bitmap);
}

