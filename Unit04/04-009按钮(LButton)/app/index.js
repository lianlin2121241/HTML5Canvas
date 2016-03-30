/**
 * Created by Administrator on 16-3-18.
 */
init(50,"mylegend",700,500,main);
var loader,bitmapup,bitmapover,field;
function main(){
    loader=new LLoader();
    loader.addEventListener(LEvent.COMPLETE,loadUp);
    loader.load("images/btn1.png","bitmapData");
}

function loadUp(event){
    bitmapup=new LBitmap(new LBitmapData(loader.content));
    loader=new LLoader();
    loader.addEventListener(LEvent.COMPLETE,loadOver);
    loader.load("images/btn2.png","bitmapData");
}

/**
 * 实例化按钮
 * LButton(DisplayObject_up,DisplayObject_over)
 * DisplayObject_up：代表按钮默认up状态的对象
 * DisplayObject_over：当鼠标移动到按钮上时的状态
 */
function loadOver(){
    bitmapover=new LBitmap(new LBitmapData(loader.content));
    var layer=new LSprite();
    addChild(layer);
    field=new LTextField();
    field.text="Wait Click";
    layer.addChild(field);
    var testButton=new LButton(bitmapup,bitmapover);
    testButton.y=50;
    testButton.addEventListener(LMouseEvent.MOUSE_DOWN,downshow);
    layer.addChild(testButton);
}

function downshow(){
    field.text="testButton Click!";
}