/**
 * Created by Administrator on 16-3-18.
 */
var loader;
var vertices;
var indices;
var uvtData;
init(50,"mylegend",700,500,main);

function main(){
    loader=new LLoader();
    loader.addEventListener(LEvent.COMPLETE,loadBitmapdata);
    loader.load("images/test.jpg","bitmapData");
}

/**
 * 扭曲图片
 * drawTriangles(vertices,indices,uvtData[,thickness,color])
 * vertices:由数字构成的矢量，其中的每一对数字将被视为一个坐标位置
 * indices:由整数或索引构成的矢量，其中每三个索引定义一个三角形
 * uvtData:由用于应用纹理映射的标准坐标构成的矢量
 * thickness:分割完的三角边框线宽
 * color:分割完的三角边框颜色
 * 矩形示例
 *      0        3         6
 *      ┌---------------┐
 *      |                |
 *    1 |       4        | 7
 *      |                |
 *     └---------------┘
 *    2        5         8
 * @param event
 */
function loadBitmapdata(event){
    var bitmapdate=new LBitmapData(loader.content);
    var backLayer=new LSprite();
    backLayer.x=100;
    addChild(backLayer);

    vertices=new Array();
    vertices.push(0,0);
    vertices.push(0-50,150);
    vertices.push(0,300);
    vertices.push(150,0);
    vertices.push(150,150);
    vertices.push(150,300);
    vertices.push(300,0);
    vertices.push(300+50,150);
    vertices.push(300+30,300+30);

    indices=new Array();
    indices.push(0,3,1);
    indices.push(3,1,4);
    indices.push(1,4,2);
    indices.push(4,2,5);
    indices.push(3,6,4);
    indices.push(6,4,7);
    indices.push(4,7,5);
    indices.push(7,5,8);

    uvtData=new Array();
    uvtData.push(0,0);
    uvtData.push(0,0.5);
    uvtData.push(0,1);
    uvtData.push(0.5,0);
    uvtData.push(0.5,0.5);
    uvtData.push(0.5,1);
    uvtData.push(1,0);
    uvtData.push(1,0.5);
    uvtData.push(1,1);

    backLayer.graphics.beginBitmapFill(bitmapdate);
    backLayer.graphics.drawTriangles(vertices,indices,uvtData,1,"#ff0000");
}