/**
 * Created by Administrator on 16-3-18.
 */
init(50,"mylegend",700,500,main);
var field;
var fieldTimes;
var fieldKey;
function main(){
    /**
     * 鼠标事件
     * LMouseEvent.MOUSE_DOWN
     * @type {LTextField}
     */
    var layer=new LSprite();
    layer.graphics.drawRect(1,"#cccccc",[0,0,300,300],true,"#dddddd");
    addChild(layer);
    field=new LTextField();
    field.text="Wait Click!";
    layer.addChild(field);
    layer.addEventListener(LMouseEvent.MOUSE_DOWN,downshow);
    layer.addEventListener(LMouseEvent.MOUSE_UP,upshow);

    /**
     * 循环事件
     * LEvent.ENTER_FRAME
     * @type {LTextField}
     */
    fieldTimes=new LTextField();
    fieldTimes.text="0";
    fieldTimes.x=10;
    fieldTimes.y=100;
    layer.addChild(fieldTimes);
    layer.addEventListener(LEvent.ENTER_FRAME,onframe);

    /**
     * 绑定键盘事件，必须绑定在LEvent上
     * LKeyboardEvent.KEY_DOWN
     * LGlobal.window：window对象
     * @type {LTextField}
     */
    fieldKey=new LTextField();
    fieldKey.text="Wait Click!";
    fieldKey.x=0;
    fieldKey.y=200;
    layer.addChild(fieldKey);
    LEvent.addEventListener(LGlobal.window,LKeyboardEvent.KEY_DOWN,keyDownShow);
    LEvent.addEventListener(LGlobal.window,LKeyboardEvent.KEY_UP,keyUpShow);
}

function downshow(){
    field.text="Mouse Down";
}
function upshow(){
    field.text="Mouse Up";
}

function onframe(){
    fieldTimes.text=parseInt(fieldTimes.text)+1;
}

function keyDownShow(event){
    fieldKey.text=event.keyCode+" Down";
}
function keyUpShow(event){
    fieldKey.text=event.keyCode+" Up";
}