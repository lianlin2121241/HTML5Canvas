/**
 * Created by Administrator on 16-3-18.
 */
var c=document.getElementById("myCanvas");
c.width="700";
c.height="500";
var ctx= c.getContext("2d");
var image=new Image();
image.src="images/test.jpg";

/**
 * 创建新像素
 * createImageData(imageData)  创建宽度为imageData.width，高度为imageData.height的空白像素
 * createImageData(w:宽度，h：高度)
 */
image.onload=function(){
    ctx.drawImage(image,10,10);
    var imageData=ctx.getImageData(50,50,200,200);

    var imgData01=ctx.createImageData(imageData);
    for(var i= 0;i<imgData01.width*imgData01.height*4;i+=4){
        imgData01.data[i+0]=255;
        imgData01.data[i+1]=0;
        imgData01.data[i+2]=0;
        imgData01.data[i+3]=255;
    }
    ctx.putImageData(imgData01,320,10);


    var imgData02=ctx.createImageData(100,100);
    for(var i= 0;i<imgData02.width*imgData02.height*4;i+=4){
        imgData02.data[i+0]=255;
        imgData02.data[i+1]=0;
        imgData02.data[i+2]=0;
        imgData02.data[i+3]=255;
    }
    ctx.putImageData(imgData02,320,220);

    ctx.putImageData(convertGrayImgData(imageData),10,320);
}

function convertGrayImgData(imgData){
    var imgGray=imgData;
    var imgGrayData=imgData.data;
    for(var i= 0;i<imgGray.width*imgGray.height*4;i+=4){
        var gray=(imgGrayData[i+0]+imgGrayData[i+1]+imgGrayData[i+2])/3;
        imgGrayData[i+0]=gray;
        imgGrayData[i+1]=gray;
        imgGrayData[i+2]=gray;
        imgGrayData[i+3]=255;
    }
    imgGray.data=imgGrayData;
    return imgGray;
}

