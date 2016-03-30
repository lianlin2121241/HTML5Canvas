/**
 * Created by Administrator on 16-3-18.
 */
init(50,"mylegend",700,500,main);

function main(){
    var layer=new LSprite();
    addChild(layer);
    var field=new LTextField();
    field.x=50;
    field.y=50;
    field.text="Hello World;";
    field.size=25;
    field.color="#333333";
    field.weight="bolder";
    layer.addChild(field);

    var field=new LTextField();
    field.x=50;
    field.y=100;
    field.setType(LTextFieldType.INPUT);
    layer.addChild(field);
}
