var canvas = document.getElementById('Spirograph-three');
var ctx = canvas.getContext('2d');

var WIDTH = canvas.width;
var HEIGHT = canvas.height;


function Circle(){

}
Circle.prototype = {
    x:0,
    y:0,
    rotate:0,
    vx:5,
    vy:1,
    vangle:30,
    angle:30,
    color:'black',
    
    
    setPos:function(xpos,ypos){
        this.x = xpos;
        this.y = ypos;
    },
    setRadius:function(r){
        this.radius = r;
    },

    setColor:function(color){
        this.color = color;
    },
    
    draw:function(){
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,true);
        ctx.closePath();
        ctx.stroke();
    },

    attach:function(circleOther){
        this.x = circleOther.x+circleOther.radius+this.radius;
        this.y = circleOther.y;
    }
    
};

var CCenter = new Circle();
CCenter.setPos(HEIGHT/2,WIDTH/2);
CCenter.setColor('purple');
CCenter.setRadius(80);
CCenter.draw();

var CInner = new Circle();
CInner.setColor('White');
CInner.setRadius(100);
CInner.attach(CCenter);
CInner.draw();

var COuter = new Circle();
COuter.setColor('orange');
COuter.setRadius(50);
COuter.attach(CInner);
COuter.draw();

var CRemote = new Circle();
COuter.setColor('blue');
COuter.setRadius(100);
COuter.attach(CCenter);
COuter.draw();


var drawAnimation = function(){
    //CCenter.draw();
    //CInner.draw();
    COuter.draw();
    CRemote.draw();
    var k=0.9;
    var l=0.5;
    CCenter.angle+=2;
    var cradius = CCenter.angle*Math.PI/180;
    CCenter.x += CCenter.radius*(1-k)*Math.cos(cradius)+l*k*Math.cos(((1-k)/k)*cradius);
    CCenter.y += CCenter.radius*(1-k)*Math.sin(cradius)-l*k*Math.sin(((1-k)/k)*cradius);

    //process Inner Circle
    CInner.angle+=2;
    var iradius = CInner.angle*Math.PI/180;
    CInner.x += CCenter.radius*(1-k)*Math.cos(iradius)+l*k*Math.cos(((1-k)/k)*iradius);
    CInner.y += CCenter.radius*(1-k)*Math.sin(iradius)-l*k*Math.sin(((1-k)/k)*iradius);

    //Process Outer Circle
    
    COuter.angle+=2;
    var oradius = COuter.angle*Math.PI/180;
    COuter.x += COuter.radius*(1-k)*Math.cos(oradius)+l*k*Math.cos(((1-k)/k)*oradius);
    COuter.y += COuter.radius*(1-k)*Math.sin(oradius)-l*k*Math.sin(((1-k)/k)*oradius);

    var kr = 0;
    var lr = 1;
    CRemote.angle+=0;
    var rradius = CRemote.angle*Math.PI/180;
    CRemote.x += CRemote.radius*(1-kr)*Math.cos(rradius)+lr*kr*Math.cos(((1-kr)/kr)*rradius);
    CRemote.y += CRemote.radius*(1-kr)*Math.sin(rradius)-lr*kr*Math.sin(((1-kr)/kr)*rradius);


    /*
    CCenter.x += CCenter.vx*Math.sin(90*Math.PI/180);
    CCenter.y += CCenter.vy*Math.sin(90*Math.PI/180);
    */
    /*
    if (CCenter.y+CCenter.vy>canvas.width||CCenter.y+CCenter.vy<0){
        CCenter.vy *= -1;
    }
    if (CCenter.x+CCenter.vx>canvas.width||CCenter.x+CCenter.vx<0){
        CCenter.vx *= -1;
    }
    */
    raf = window.requestAnimationFrame(drawAnimation);
    
}

//Circle.draw();

drawAnimation();
