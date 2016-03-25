/**
 * Created by Administrator on 16-3-18.
 */

init(50,"mylegend",500,350,main);
function main(){
    var graphics=new LGraphics();
    addChild(graphics);
    graphics.add(function(coodx,coody){
        LGlobal.canvas.strokeStyle="#000000";
        LGlobal.canvas.lineWidth=5;
        LGlobal.canvas.moveTo(20,20);
        LGlobal.canvas.lineTo(200,200);
        LGlobal.canvas.stroke();
    })
}