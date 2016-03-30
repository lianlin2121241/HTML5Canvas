/**
 * Created by Administrator on 16-3-18.
 */
init(50,"mylegend",700,500,main);
var loader,anime,layer;
function main(){
    loader=new LLoader();
    loader.addEventListener(LEvent.COMPLETE,loadBitmapdata);
    loader.load("images/chara.png","bitmapData");
}

/**
 * 创建动画函数
 * LAnimation(layer,data,list)
 * layer：LSprite对象
 * data：LBitmapData对象
 * list：一个存储坐标的二维数组
 *
 * 获取图坐标数组函数
 * LGlobal.divideCoordinate(width,height,row,col);
 * @param event
 */
function loadBitmapdata(event){
    var bitmapData=new LBitmapData(loader.content,0,0,64,64);
    var list=LGlobal.divideCoordinate(256,256,4,4);
    layer=new LSprite();
    addChild(layer);
    anime=new LAnimation(layer,bitmapData,list);
    layer.addEventListener(LEvent.ENTER_FRAME,onframe);
}

function onframe(){
    var action=anime.getAction();
    switch (action[0]){
        case 0:
            layer.y+=5;
            if(layer.y>=400){
                anime.setAction(2);
            }
            break;
        case 1:
            layer.x-=5;
            if(layer.x<=0){
                anime.setAction(0);
            }
            break;
        case 2:
            layer.x+=5;
            if(layer.x>=600){
                anime.setAction(3);
            }
            break;
        case 3:
            layer.y-=5;
            if(layer.y<=0){
                anime.setAction(1);
            }
            break;
    }
    anime.onframe();
}
