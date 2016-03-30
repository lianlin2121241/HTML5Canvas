/**
 * Created by Administrator on 16-3-18.
 */
init(50,"mylegend",800,400,main);
var backLayer,      //背景画布
    resultLayer,    //结果画布
    clickLayer,     //点击画布
    loadingLayer,   //加载背景画布
    selfBitmap,     //玩家出拳图片
    enemyBitmap,
    selfTextAll,
    selfTextWin,
    selfTextLoss,
    selfTextDraw,
    win= 0,
    loss= 0,
    draw=0;
var imglist={};
var imgData=new Array(
    {name:"title",path:"images/title.png"},
    {name:"shitou",path:"images/shitou.png"},
    {name:"jiandao",path:"images/jiandao.png"},
    {name:"bu",path:"images/bu.png"}
);
var showList=new Array();

var checkList=[
    [0,1,-1],
    [-1,0,1],
    [1,-1,0]
]

/**
 * 批量加载图片方法
 * LLoadManage.load($list,$onupdate,$oncomplete)
 * $list：要读取的图片数组
 * $onupdate：没读取数组中一张图片后调用的函数，可以为空
 * $oncomplete：读取完数组中所有图片后调用函数
 */
function main(){
    backLayer=new LSprite();
    addChild(backLayer);
    loadingLayer=new LoadingSample3();
    backLayer.addChild(loadingLayer);
    LLoadManage.load(
        imgData,
        function(progress){
            loadingLayer.setProgress(progress);
        },function(result){
            imglist=result;
            backLayer.removeChild(loadingLayer);
            loadingLayer=null;
            gameInit()
        })
}

/**
 * 初始化游戏背景层
 */
function gameInit(){
    backLayer.graphics.drawRect(10,"#008800",[0,0,LGlobal.width,LGlobal.height],true,"#000000");
    showList.push(new LBitmapData(imglist["shitou"]));
    showList.push(new LBitmapData(imglist["jiandao"]));
    showList.push(new LBitmapData(imglist["bu"]));

    var titleBitmap=new LBitmap(new LBitmapData(imglist["title"]));
    titleBitmap.x=(LGlobal.width-titleBitmap.width)/2;
    titleBitmap.y=10;
    backLayer.addChild(titleBitmap);

    selfBitmap=new LBitmap(showList[0]);
    selfBitmap.x=400-selfBitmap.width-50;
    selfBitmap.y=130;
    backLayer.addChild(selfBitmap);

    enemyBitmap=new LBitmap(showList[0]);
    enemyBitmap.x=400+50;
    enemyBitmap.y=130;
    backLayer.addChild(enemyBitmap);

    /**
     * 获取LTextField对象的宽度使用.getWidth()方法，而不使用.width
     */
    var nameText;
    nameText=new LTextField();
    nameText.text="玩家";
    nameText.weight="bolder";
    nameText.color="#ffffff";
    nameText.size=24;
    nameText.x=selfBitmap.x+(selfBitmap.width-nameText.getWidth())/2;
    nameText.y=95;
    backLayer.addChild(nameText);

    nameText=new LTextField();
    nameText.text="电脑";
    nameText.weight="bolder";
    nameText.color="#ffffff";
    nameText.size=24;
    nameText.x=enemyBitmap.x+(enemyBitmap.width-nameText.getWidth())/2;
    nameText.y=95;
    backLayer.addChild(nameText);

    initResultLayer();
    initClickLayer();
}

/**
 * 初始化游戏结果层
 */
function initResultLayer(){
    resultLayer=new LSprite();
    resultLayer.graphics.drawRect(4,"#ff8800",[0,0,150,110],true,"#ffffff");
    resultLayer.x=10;
    resultLayer.y=100;
    backLayer.addChild(resultLayer);

    selfTextAll=new LTextField();
    selfTextAll.text="猜拳次数：0";
    selfTextAll.weight="bolder";
    selfTextAll.x=10;
    selfTextAll.y=20;
    resultLayer.addChild(selfTextAll);

    selfTextWin=new LTextField();
    selfTextWin.text="胜利次数：0";
    selfTextWin.weight="bolder";
    selfTextWin.x=10;
    selfTextWin.y=40;
    resultLayer.addChild(selfTextWin);

    selfTextLoss=new LTextField();
    selfTextLoss.text="失败次数：0";
    selfTextLoss.weight="bolder";
    selfTextLoss.x=10;
    selfTextLoss.y=60;
    resultLayer.addChild(selfTextLoss);

    selfTextDraw=new LTextField();
    selfTextDraw.text="平局次数：0";
    selfTextDraw.weight="bolder";
    selfTextDraw.x=10;
    selfTextDraw.y=80;
    resultLayer.addChild(selfTextDraw);
}

/**
 * 初始化游戏点击层
 */
function initClickLayer(){
    clickLayer=new LSprite();
    clickLayer.graphics.drawRect(4,"#ff8800",[0,0,300,110],true,"#ffffff");
    clickLayer.x=250;
    clickLayer.y=275;
    backLayer.addChild(clickLayer);

    var msgText=new LTextField();
    msgText.text="请出拳："
    msgText.weight="bolder";
    msgText.x=10;
    msgText.y=10;
    clickLayer.addChild(msgText);

    var btnShitou=getButton("shitou");
    btnShitou.x=30;
    btnShitou.y=35;
    btnShitou.addEventListener(LMouseEvent.MOUSE_UP,onclick);
    clickLayer.addChild(btnShitou);

    var btnJiandao=getButton("jiandao");
    btnJiandao.x=115;
    btnJiandao.y=35;
    btnJiandao.addEventListener(LMouseEvent.MOUSE_UP,onclick);
    clickLayer.addChild(btnJiandao);

    var btnBu=getButton("bu");
    btnBu.x=200;
    btnBu.y=35;
    btnBu.addEventListener(LMouseEvent.MOUSE_UP,onclick);
    clickLayer.addChild(btnBu);
}

/**
 * 获取按钮
 * @param 按钮类型值
 * @returns {LButton}
 */
function getButton(value){
    var btnUp=new LBitmap(new LBitmapData(imglist[value]));
    btnUp.scaleX=0.5;
    btnUp.scaleY=0.5;
    var btnDown=new LBitmap(new LBitmapData(imglist[value]));
    btnDown.scaleX=0.5;
    btnDown.scaleY=0.5;
    btnDown.x=1;
    btnDown.y=1;
    var btn=new LButton(btnUp,btnDown);
    btn.name=value;
    return btn;
}

/**
 * 点击事件
 * @param event
 * @param display
 */
function onclick(event,display){
    var selfValue,enemyValue;
    if(display.name=="shitou"){
        selfValue=0;
    }else if(display.name=="jiandao"){
        selfValue=1;
    }else if(display.name=="bu"){
        selfValue=2;
    }
    enemyValue=Math.floor(Math.random()*3);
    selfBitmap.bitmapData=showList[selfValue];
    enemyBitmap.bitmapData=showList[enemyValue];
}
