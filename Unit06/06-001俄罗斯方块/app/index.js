/**
 * Created by Administrator on 16-3-18.
 */
//程序入口
init(50,"mylegend",320,480,main);
var START_X1=15,    //游戏区域X
    START_Y1=21,    //游戏区域Y
    START_X2=228,   //方块区域预览X
    START_Y2=65;    //方块区域预览Y
var backLayer,      //背景图层
    loadingLayer,   //加载图层
    graphicsMap,    //游戏区域图层
    nextLayer;      //预览区域图层
var imglist={};     //存放img列表
var imgData=new Array(
    {name:"backImage",path:"images/backImage.png"},
    {name:"r1",path:"images/r1.png"},
    {name:"r2",path:"images/r2.png"},
    {name:"r3",path:"images/r3.png"},
    {name:"r4",path:"images/r4.png"}
)

/**
 * 游戏区域矩阵
 * @type {*[]}
 */
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
var nodeList=[];    //矩阵中每个点的对象
var bitmapDataList=[];  //图像数据列表
var nextBox,nowBox;     //下一个box，当前box
var BOX;
var pointBox={x:0,y:0}; //box移动点的坐标
var point=0,pointText;  //得分
var del=0,delText;      //消除个数
var speed=15,maxSpeed=15,speedIndex= 0,speedText;//速度
//键盘控制对象
var myKey={
    keyControl:null,    //按键对象
    step:1,               //动画间隔步数
    stepindex:0,        //动画间隔步数值
    touchX:0,           //事件点所处位置X
    touchY:0,           //事件点所处位置Y
    touchMove:false,    //是否移动事件点
    isTouchDown:false   //鼠标是否按下
};

/**
 * 入口函数
 */
function main(){
    //建立背景
    backLayer=new LSprite();
    addChild(backLayer);
    backLayer.graphics.drawRect(0,"",[0,0,LGlobal.width,LGlobal.height],true,"#000000");

    //建立加载动画层
    loadingLayer=new LoadingSample1();
    backLayer.addChild(loadingLayer);
    LLoadManage.load(imgData,function(progress){
        loadingLayer.setProgress(progress);
    },gameInit)
}

/**
 * 动画加载完成后回调事件
 * @param result
 */
function gameInit(result){
    imglist=result; //图像hash列表
    console.log("加载完图片回调结果："+imglist);

    //将方块图片数据存入数据列表中
    bitmapDataList=[
        new LBitmapData(imglist["r1"]),
        new LBitmapData(imglist["r2"]),
        new LBitmapData(imglist["r3"]),
        new LBitmapData(imglist["r4"])
    ]

    //移除加载图层
    backLayer.removeChild(loadingLayer);
    loadingLayer=null;

    //添加标题文字
    var text=new LTextField();
    text.text="俄罗斯方块";
    text.x=50;
    text.y=100;
    text.size=45;
    text.color="#ffffff";
    backLayer.addChild(text);

    //画点击按钮
    backLayer.graphics.drawRect(1,"#ffffff",[(LGlobal.width-220)/2,240,220,40]);
    var textClick=new LTextField();
    textClick.text="点击页面开始游戏";
    textClick.size=20;
    textClick.x=(LGlobal.width-textClick.getWidth())/2;
    textClick.y=245;
    textClick.color="#ffffff";
    backLayer.addChild(textClick);

    //添加点击开始事件
    backLayer.addEventListener(LMouseEvent.MOUSE_UP,gameToStart);
}

/**
 * 游戏开始方法
 */
function gameToStart(){
    //删除背景图层中所有事件和元素
    backLayer.die();
    backLayer.removeAllChild();
    //添加背景图片
    var bitmap=new LBitmap(new LBitmapData(imglist["backImage"]));
    backLayer.addChild(bitmap);
    //添加分数、消除层数、速度文字图层
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
    //添加游戏区域图层
    graphicsMap=new LSprite();
    backLayer.addChild(graphicsMap);
    //添加预览区域图层
    nextLayer=new LSprite();
    backLayer.addChild(nextLayer);
    //显示分数等文字
    showText();
    //实例化方块
    BOX=new Box();
    //初始化游戏区域矩阵对象
    initNodeList();
    //获取下一个方块到预览区域
    getNextBox();
    //添加循环事件
    backLayer.addEventListener(LEvent.ENTER_FRAME,onframe);
    //添加鼠标事件
    backLayer.addEventListener(LMouseEvent.MOUSE_DOWN,touchDown);
    backLayer.addEventListener(LMouseEvent.MOUSE_UP,touchUp);
    backLayer.addEventListener(LMouseEvent.MOUSE_MOVE,touchMove);
    //添加键盘事件
    if(!LGlobal.canTouch){
        LEvent.addEventListener(LGlobal.window,LKeyboardEvent.KEY_DOWN,onkeydown);
        LEvent.addEventListener(LGlobal.window,LKeyboardEvent.KEY_UP,onkeyup);
    }
}

//循环事件
function onframe(){
    minusBox();
    //myKey.stepindex：循环两次执行一次里边的方法体
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

/**
 * 初始化游戏区域矩阵点对象
 */
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

/**
 * 获取下一个预览方块到预览区域，并把之前预览的方块放到游戏区域
 */
function getNextBox(){
    if(nextBox==null){
        nextBox=BOX.getBox();
    }
    nowBox=nextBox;
    pointBox.x=3;
    pointBox.y=-4;
    nextBox=BOX.getBox();

    //清除预览区域
    nextLayer.removeAllChild();
    //在预览区域化下一个方块
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

/**
 * 添加当前方块到游戏区域
 */
function plusBox(){
    var i,j;
    for(i=0;i<nowBox.length;i++){
        for(j=0;j<nowBox[0].length;j++){
            //判断方块是否在显示区域中
            if(i+pointBox.y<0||i+pointBox.y>=map.length||j+pointBox.x<0||j+pointBox.x>=map[0].length){
                continue;
            }
            map[i+pointBox.y][j+pointBox.x]=nowBox[i][j]+map[i+pointBox.y][j+pointBox.x];
            nodeList[i+pointBox.y][j+pointBox.x]["index"]=map[i+pointBox.y][j+pointBox.x]-1;
        }
    }
}

/**
 * 清空当前方块的显示
 */
function minusBox(){
    var i,j;
    for(i=0;i<nowBox.length;i++){
        for(j=0;j<nowBox[i].length;j++){
            //判断方块是否在显示区域中
            if(i+pointBox.y<0||i+pointBox.y>=map.length||j+pointBox.x<0||j+pointBox.x>=map[0].length){
                continue;
            }
            map[i+pointBox.y][j+pointBox.x]=map[i+pointBox.y][j+pointBox.x]-nowBox[i][j];
            nodeList[i+pointBox.y][j+pointBox.x]["index"]=map[i+pointBox.y][j+pointBox.x]-1;
        }
    }
}

/**
 * 检查该方向是否允许移动
 * @param nx 横向移动位置
 * @param ny 纵向移动位置
 * @returns {boolean}
 */
function checkPuls(nx,ny){
    var i,j;
    for(i=0;i<nowBox.length;i++){
        for(j=0;j<nowBox[0].length;j++){
            if(i+pointBox.y+ny<0){
                //如果没有显示在游戏区域
                continue;
            }else if(i+pointBox.y+ny>=map.length||j+pointBox.x+nx<0||j+pointBox.x+nx>=map[0].length){
                //如果超出游戏区域高度、如果溢出左侧区域、如果溢出右侧区域
                if(nowBox[i][j]==0){
                    continue;
                }else{
                    //如果当前小方块不为0则跳出循环，返回false
                    return false;
                }
            }
            //判断当前方块不为0的小方块是否占用游戏区域不为0的小方块
            if(nowBox[i][j]>0&&map[i+pointBox.y+ny][j+pointBox.x+nx]>0){
                return false;
            }
        }
    }
    return true;
}

/**
 * 根据nodeList画游戏区域图像
 */
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

/**
 * 游戏结束
 */
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

/**
 * 按下键盘事件
 * @param event
 */
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

//键盘抬起
function onkeyup(event){
    myKey.keyControl=null;
    myKey.stepindex=0;
}

//鼠标按下
function touchDown(event){
    myKey.isTouchDown=true;
    myKey.touchX=Math.floor(event.selfX/20);
    myKey.touchY=Math.floor(event.selfY/20);
    myKey.touchMove=false;
    myKey.keyControl=null;
}

//鼠标抬起
function touchUp(event){
    myKey.isTouchDown=false;
    if(!myKey.touchMove)myKey.keyControl="up";
}

//鼠标移动
function touchMove(event){
    if(!myKey.isTouchDown) return;
    var mx=Math.floor(event.selfX/20);
    //横下最小为20像素
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

//改变方块方向
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

/**
 * 消除方块
 */
function removeBox(){
    var i, j,count=0;
    //循环当前四行
    for(i=pointBox.y;i<(pointBox.y+4);i++){
        //判断i行是否在显示区域内
        if(i<0||i>=map.length)continue;
        for(j=0;j<map[0].length;j++){
            //如果有为0的地方跳出循环
            if(map[i][j]==0){
                break;
            }
            //如果j为行的长度则进行删除对应的i行
            if(j==map[0].length-1){
                removeLine(i);
                count++;
            }
        }
    }
    if(count==0)return;
    del+=count;
    //判断分数
    if(count==1){
        point+=1;
    }else if(count==2){
        point+=3;
    }else if(count==3){
        point+=6;
    }else if(count==4){
        point+=10;
    }
    //判断速度，消除100层速度加快
    if(speed>0&&del/100>=(maxSpeed-speed+1)){
        speed--;
    }
    showText();
}

/**
 * 删除行
 * @param line 行号
 */
function removeLine(line){
    var i,j;
    //将当前行上边所有行循环向下移动
    for(i=line;i>0;i--){//#####
        for(j=0;j<map[0].length;j++){
            map[i][j]=map[i-1][j];
            nodeList[i][j]["index"]=nodeList[i-1][j]["index"];
        }
    }
    //将第0行清空
    for(j=0;j<map[0].length;j++){
        map[0][j]=0;
        nodeList[0][j]["index"]=-1;
    }
}

//显示文字
function showText(){
    pointText.text=point;
    delText.text=del;
    speedText.text=maxSpeed-speed+1;
}