/**
 * Created by Administrator on 16-3-18.
 */
init(50,"mylegend",320,480,main);
var START_X1=15,
    START_Y1=21,
    START_X2=228,
    START_Y2=65;
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

var map=[
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
];
var nodeList=[];
var bitmapDataList=[];
var nextBox,nowBox;
var BOX;
var pointBox={x:0,y:0};
var speed=15,maxSpeed=15,speedIndex=0;

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

    bitmapDataList=[
        new LBitmapData(imglist["r1"]),
        new LBitmapData(imglist["r2"]),
        new LBitmapData(imglist["r3"]),
        new LBitmapData(imglist["r4"])
    ]

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
    graphicsMap=new LSprite();
    backLayer.addChild(graphicsMap);
    nextLayer=new LSprite();
    backLayer.addChild(nextLayer);
    BOX=new Box();
    initNodeList();
    getNextBox();
    backLayer.addEventListener(LEvent.ENTER_FRAME,onframe);
}

function onframe(){
    minusBox();
    if(speedIndex++>speed){
        speedIndex=0;
        if(checkPuls(0,1)){
            pointBox.y++;
        }else{
            plusBox();
            if(pointBox.y<0){
                //gameOver();
                return;
            }
            getNextBox();
        }
    }
    plusBox();
    drawMap();
}

function initNodeList(){
    var i, j,nArr,bitmap;
    for(i=0;i<map.length;i++){
        nArr=[];
        for(j=0;j<map[0].length;j++){
            bitmap=new LBitmap(bitmapDataList[0]);
            bitmap.x=bitmap.getWidth()*j+START_X1;
            bitmap.y=bitmap.getWidth()*i+START_Y1;
            graphicsMap.addChild(bitmap);
            nArr[j]={
                "index":-1,
                "value":0,
                "bitmap":bitmap
            };
        }
        nodeList[i]=nArr;
    }
}

function getNextBox(){
    if(nextBox==null){
        nextBox=BOX.getBox();
    }
    nowBox=nextBox;
    pointBox.x=3;
    pointBox.y=-4;
    nextBox=BOX.getBox();

    nextLayer.removeAllChild();
    var i, j,bitmap;
    for(i=0;i<nextBox.length;i++){
        for(j=0;j<nextBox[0].length;j++){
            if(nextBox[i][j]==0){
                continue;
            }
            bitmap=new LBitmap(bitmapDataList[nextBox[i][j]-1]);
            bitmap.x=bitmap.getWidth()*j+START_X2;
            bitmap.y=bitmap.getWidth()*i+START_Y2;
            nextLayer.addChild(bitmap);
        }
    }
}

function plusBox(){
    var i,j;
    for(i=0;i<nowBox.length;i++){
        for(j=0;j<nowBox[0].length;j++){
            if(i+pointBox.y<0||i+pointBox.y>=map.length||j+pointBox.x<0||j+pointBox.x>=map[0].length){
                continue;
            }
            map[i+pointBox.y][j+pointBox.x]=nowBox[i][j]+map[i+pointBox.y][j+pointBox.x];
            nodeList[i+pointBox.y][j+pointBox.x]["index"]=map[i+pointBox.y][j+pointBox.x]-1;
        }
    }
}

function minusBox(){
    var i,j;
    for(i=0;i<nowBox.length;i++){
        for(j=0;j<nowBox[i].length;j++){
            if(i+pointBox.y<0||i+pointBox.y>=map.length||j+pointBox.x<0||j+pointBox.x>=map[0].length){
                continue;
            }
            map[i+pointBox.y][j+pointBox.x]=map[i+pointBox.y][j+pointBox.x]-nowBox[i][j];
            nodeList[i+pointBox.y][j+pointBox.x]["index"]=map[i+pointBox.y][j+pointBox.x]-1;
        }
    }
}

function checkPuls(nx,ny){
    var i,j;
    for(i=0;i<nowBox.length;i++){
        for(j=0;j<nowBox[0].length;j++){
            if(i+pointBox.y+ny<0){
                continue;
            }else if(i+pointBox.y+ny>=map.length||j+pointBox.x+nx<0||j+pointBox.x+nx>=map[0].length){
                if(nowBox[i][j]==0){
                    continue;
                }else{
                    return false;
                }
            }
            if(nowBox[i][j]>0&&map[i+pointBox.y+ny][j+pointBox.x+nx]>0){
                return false;
            }
        }
    }
    return true;
}

function drawMap(){
    var i, j,boxl=15;
    for(i=0;i<map.length;i++){
        for(j=0;j<map[0].length;j++){
            if(nodeList[i][j]["index"]>=0){
                nodeList[i][j]["bitmap"].bitmapData=bitmapDataList[nodeList[i][j]["index"]];
            }else{
                nodeList[i][j]["bitmap"].bitmapData=null;
            }
        }
    }
}

