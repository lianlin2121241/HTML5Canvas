/**
 * Created by Administrator on 16-3-18.
 */
/**
 * 方块对象
 * @constructor
 */
function Box(){
    var self=this;
    self.box1=[
        [0,0,0,0],
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0]
    ];
    self.box2=[
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
    ];
    self.box3=[
        [0,0,0,0],
        [1,1,1,0],
        [0,1,0,0],
        [0,0,0,0]
    ];
    self.box4=[
        [0,1,1,0],
        [0,1,0,0],
        [0,1,0,0],
        [0,0,0,0]
    ];
    self.box5=[
        [0,1,1,0],
        [0,0,1,0],
        [0,0,1,0],
        [0,0,0,0]
    ];
    self.box6=[
        [0,0,0,0],
        [0,1,0,0],
        [0,1,1,0],
        [0,0,1,0]
    ];
    self.box7=[
        [0,0,0,0],
        [0,0,1,0],
        [0,1,1,0],
        [0,1,0,0]
    ];
    self.box8=[
        [0,0,0,0],
        [0,0,1,0],
        [0,1,1,1],
        [0,1,0,1]
    ];
    self.box=[self.box1,self.box2,self.box3,self.box4,self.box5,self.box6,self.box7,self.box8];
}

/**
 * 方块类公共方法
 * @type {{getBox: Function}}
 */
Box.prototype={
    /**
     * 获取方块对象
     * @returns {Array} 方块对象
     */
    getBox:function(){
        var self=this;
        var num=Math.random()*8;
        var index=parseInt(num);
        var result=[];
        var colorIndex=1+Math.floor(Math.random()*4);
        var i,j;
        for(i=0;i<4;i++){
            var child=[];
            for(j=0;j<4;j++){
                child[j]=self.box[index][i][j]*colorIndex;
            }
            result[i]=child;
        }
        return result;
    }
}