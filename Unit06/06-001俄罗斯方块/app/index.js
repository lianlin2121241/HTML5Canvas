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
var point=0,pointText;
var del=0,delText;
var speed=15,maxSpeed=15,speedIndex= 0,speedText;
var myKey={
    keyControl:null,
    step:1,
    stepindex:0,
    touchX:0,
    touchY:0,
    touchMove:false,
    isTouchDown:false
};

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
    pointText=new LTextField();
    pointText.x=240;
    pointText.y=200;
    pointText.size=20;
    backLayer.addChild(pointText);
    delText=new LTextField();
    delText.x=240;
    delText.y=290;
    delText.size=20;
    backLayer.addChild(delText);
    speedText=new LTextField();
    speedText.x=240;
    speedText.y=385;
    speedText.size=20;
    backLayer.addChild(speedText);
    graphicsMap=new LSprite();
    backLayer.addChild(graphicsMap);
    nextLayer=new LSprite();
    backLayer.addChild(nextLayer);
    BOX=new Box();
    initNodeList();
    getNextBox();
    backLayer.addEventListener(LEvent.ENTER_FRAME,onframe);

    backLayer.addEventListener(LMouseEvent.MOUSE_DOWN,touchDown);
    backLayer.addEventListener(LMouseEvent.MOUSE_UP,touchUp);
    backLayer.addEventListener(LMouseEvent.MOUSE_MOVE,touchMove);

    if(!LGlobal.canTouch){
        LEvent.addEventListener(LGlobal.window,LKeyboardEvent.KEY_DOWN,onkeydown);
        LEvent.addEventListener(LGlobal.window,LKeyboardEvent.KEY_UP,onkeyup);
    }
}

function onframe(){
    minusBox();
    if(myKey.keyControl!=null&&myKey.stepindex--<0){
        myKey.stepindex=myKey.step;
        switch (myKey.keyControl){
            case "left":
                if(checkPuls(-1,0)){
                    pointBox.x-=1;
                    if(LGlobal.canTouch||true){
                        myKey.keyControl=null;
                        myKey.touchMove=true;
                        myKey.touchX=0;
                    }
                }
                break;
            case "right":
                if(checkPuls(1,0)){
                    pointBox.x+=1;
                    if(LGlobal.canTouch||true){
                        myKey.keyControl=null;
                        myKey.touchMove=true;
                        myKey.touchX=0;
                    }
                }
                break;
            case "down":
                if(checkPuls(0,1)){
                    pointBox.y+=1;
                    if(LGlobal.canTouch||true){
                        myKey.keyControl=null;
                        myKey.touchMove=true;
                        myKey.touchY = 0;
                        myKey.touchX = 0;//#######
                    }
                }
                break;
            case "up":
                changeBox();
                if(LGlobal.canTouch||true){
                    myKey.keyControl=null;
                    myKey.stepindex=0;
                }
                break;
        }
    }
    if(speedIndex++>speed){
        speedIndex=0;
        if(checkPuls(0,1)){
            pointBox.y++;
        }else{
            plusBox();
            if(pointBox.y<0){
                gameOver();
                return;
            }
            removeBox();
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

function gameOver(){
    backLayer.die();
    var txt=new LTextField();
    txt.color="#ff0000";
    txt.size=40;
    txt.text="游戏结束";
    txt.x=(LGlobal.width-txt.getWidth())/2;
    txt.y=200;
    backLayer.addChild(txt);
}

function onkeydown(event){
    if(myKey.keyControl!=null)return;
    if(event.keyCode==37){
        myKey.keyControl="left";
    }else if(event.keyCode==38){
        myKey.keyControl="up";
    }else if(event.keyCode==39){
        myKey.keyControl="right";
    }else if(event.keyCode==40){
        myKey.keyControl="down";
    }
}

function onkeyup(event){
    myKey.keyControl=null;
    myKey.stepindex=0;
}

function touchDown(event){
    myKey.isTouchDown=true;
    myKey.touchX=Math.floor(event.selfX/20);
    myKey.touchY=Math.floor(event.selfY/20);
    myKey.touchMove=false;
    myKey.keyControl=null;
}

function touchUp(event){
    myKey.isTouchDown=false;
    if(!myKey.touchMove)myKey.keyControl="up";
}

function touchMove(event){
    if(!myKey.isTouchDown) return;
    var mx=Math.floor(event.selfX/20);
    if(myKey.touchX==0){
        myKey.touchX=mx;
        myKey.touchY=Math.floor(event.selfY/20);
    }
    if(mx>myKey.touchX){
        myKey.keyControl="right";
    }else if(mx<myKey.touchX){
        myKey.keyControl="left";
    }
    console.log(Math.floor(event.selfY/20)>myKey.touchY);
    if(Math.floor(event.selfY/20)>myKey.touchY){
        myKey.keyControl="down";
    }
}

function changeBox(){
    var saveBox=nowBox;
    nowBox=[
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ]
    var i,j;
    for(i=0;i<saveBox.length;i++){
        for(j=0;j<saveBox[0].length;j++){
            nowBox[i][j]=saveBox[3-j][i];
        }
    }
    if(!checkPuls(0,0)){
        nowBox=saveBox;
    }
}

function removeBox(){
    var i, j,count=0;
    for(i=pointBox.y;i<(pointBox.y+4);i++){
        if(i<0||i>=map.length)continue;
        for(j=0;j<map[0].length;j++){
            if(map[i][j]==0){
                break;
            }
            if(j==map[0].length-1){
                removeLine(i);
                count++;
            }
        }
    }
    if(count==0)return;
    del+=count;
    if(count==1){
        point+=1;
    }else if(count==2){
        point+=3;
    }else if(count==3){
        point+=6;
    }else if(count==4){
        point+=10;
    }
    if(speed>0&&del/100>=(maxSpeed-speed+1)){
        speed--;
    }
    showText();
}

function removeLine(line){
    var i,j;
    for(i=line;i>1;i--){//#####
        for(j=0;j<map[0].length;j++){
            map[i][j]=map[i-1][j];
            nodeList[i][j]["index"]=nodeList[i-1][j]["index"];
        }
    }
    for(j=0;j<map[0].length;j++){
        map[0][j]=0;
        nodeList[i][j]["index"]=-1;
    }
}

function showText(){
    pointText.text=point;
    delText.text=del;
    speedText.text=maxSpeed-speed+1;
}