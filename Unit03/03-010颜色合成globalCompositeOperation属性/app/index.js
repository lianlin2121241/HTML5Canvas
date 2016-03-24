/**
 * Created by Administrator on 16-3-18.
 */
var ctxBack= createCanvasCtx("canvasBack");



/**
 * 颜色合成之globalCompositeOperation属性
 * globalCompositeOperation
 * 具体效果见页面
 */
ctxBack.font="12px 微软雅黑";

var ctxSourceOver= createCanvasCtx("canvasSourceOver");
drawing({
    ctx:ctxSourceOver,
    compositeOperation:"source-over",
    rectX:10,
    rectY:10,
    arcX:50,
    arcY:60,
    textX:10,
    textY:100,
    textContent:"source-over"
})

var ctxCopy= createCanvasCtx("canvasCopy");
drawing({
    ctx:ctxCopy,
    compositeOperation:"copy",
    rectX:150,
    rectY:10,
    arcX:200,
    arcY:60,
    textX:150,
    textY:100,
    textContent:"copy"
})

var ctxDarker= createCanvasCtx("canvasDarker");
drawing({
    ctx:ctxDarker,
    compositeOperation:"darker",
    rectX:300,
    rectY:10,
    arcX:350,
    arcY:60,
    textX:300,
    textY:100,
    textContent:"darker"
})

var ctxDestinationAtop= createCanvasCtx("canvasDestinationAtop");
drawing({
    ctx:ctxDestinationAtop,
    compositeOperation:"destination-atop",
    rectX:450,
    rectY:10,
    arcX:500,
    arcY:60,
    textX:450,
    textY:100,
    textContent:"destination-atop"
})

var ctxDestinationIn= createCanvasCtx("canvasDestinationIn");
drawing({
    ctx:ctxDestinationIn,
    compositeOperation:"destination-in",
    rectX:10,
    rectY:110,
    arcX:50,
    arcY:160,
    textX:10,
    textY:200,
    textContent:"destination-in"
})

var ctxDestinationOut= createCanvasCtx("canvasDestinationOut");
drawing({
    ctx:ctxDestinationOut,
    compositeOperation:"destination-out",
    rectX:150,
    rectY:110,
    arcX:200,
    arcY:160,
    textX:150,
    textY:200,
    textContent:"destination-out"
})

var ctxDestinationOver= createCanvasCtx("canvasDestinationOver");
drawing({
    ctx:ctxDestinationOver,
    compositeOperation:"destination-over",
    rectX:300,
    rectY:110,
    arcX:350,
    arcY:160,
    textX:300,
    textY:200,
    textContent:"destination-over"
})

var ctxLighter= createCanvasCtx("canvasLighter");
drawing({
    ctx:ctxLighter,
    compositeOperation:"ligher",
    rectX:450,
    rectY:110,
    arcX:500,
    arcY:160,
    textX:450,
    textY:200,
    textContent:"ligher"
})

var ctxSourceAtop= createCanvasCtx("canvasSourceAtop");
drawing({
    ctx:ctxSourceAtop,
    compositeOperation:"source-atop",
    rectX:10,
    rectY:210,
    arcX:50,
    arcY:260,
    textX:10,
    textY:300,
    textContent:"source-atop"
})

var ctxSourceIn= createCanvasCtx("canvasSourceIn");
drawing({
    ctx:ctxSourceIn,
    compositeOperation:"source-in",
    rectX:150,
    rectY:210,
    arcX:200,
    arcY:260,
    textX:150,
    textY:300,
    textContent:"source-in"
})

var ctxSourceOut= createCanvasCtx("canvasSourceOut");
drawing({
    ctx:ctxSourceOut,
    compositeOperation:"source-out",
    rectX:300,
    rectY:210,
    arcX:350,
    arcY:260,
    textX:300,
    textY:300,
    textContent:"source-out"
})

var ctxXor= createCanvasCtx("canvasXor");
drawing({
    ctx:ctxXor,
    compositeOperation:"xor",
    rectX:450,
    rectY:210,
    arcX:500,
    arcY:260,
    textX:450,
    textY:300,
    textContent:"xor"
})

/**
 * 获取CanvasRenderingContext2D
 * @param id
 * @returns {CanvasRenderingContext2D}
 */
function createCanvasCtx(id){
    var tempC=document.createElement("canvas");
    tempC.setAttribute("id",id);
    tempC.style.border="1px solid #cccccc";
    tempC.style.position="absolute";
    tempC.style.top="8px";
    tempC.style.left="8px";
    var bodyEle=document.getElementsByTagName("body")[0];
    bodyEle.appendChild(tempC);
    tempC.width="700";
    tempC.height="500";
    var ctx= tempC.getContext("2d");
    return ctx;
}

/**
 * 画图形
 * @param obj
 */
function drawing(obj){
    obj.ctx.fillStyle="#00ff00";
    obj.ctx.fillRect(obj.rectX,obj.rectY,50,50);
    obj.ctx.globalCompositeOperation=obj.compositeOperation;
    obj.ctx.beginPath();
    obj.ctx.fillStyle="#ff0000";
    obj.ctx.arc(obj.arcX,obj.arcY,30,0,2*Math.PI);
    obj.ctx.fill();
    ctxBack.fillText(obj.textContent,obj.textX,obj.textY);
}