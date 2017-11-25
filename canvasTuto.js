
/*
    Cannot read property 'getContext' of null;
    浏览器在获取canvas对象时需要先加载对象
    将js代码放在canvas标签后
*/

var drawColorRect = function () {
    var ctx = document.getElementById('colorRect').getContext('2d');
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            //Math.floor(取整)
            ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' + Math.floor(255 - 42.5 * j) + ',0)';
            ctx.fillRect(j * 25, i * 25, 25, 25);
        }
    }
}


var drawColorCircle = function () {
    var ctx = document.getElementById('colorCircle').getContext('2d');
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            ctx.strokeStyle = 'rgb(0,' + Math.floor(255 - 42.5 * i) + ',' + Math.floor(255 - 42.5 * j) + ')';
            ctx.beginPath();
            ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
            ctx.stroke();
        }
    }
}


var circleLineTo = function (ctx, CenterX, CenterY, r, nCenterX, nCenterY) {


    //begin to draw circle
    ctx.beginPath();
    ctx.arc(CenterX, CenterY, r, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.moveTo(CenterX, CenterY);    //moveTo(thisCircleCenter)
    ctx.lineTo(nCenterX, nCenterY)   //lineTo(nextCircleCenter)
    ctx.stroke();

}

var circleLineToW = function (ctx, CenterX, CenterY, r, nCenterX, nCenterY) {


    //begin to draw circle
    ctx.beginPath();
    ctx.arc(CenterX, CenterY, r, 0, Math.PI * 2, true);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(237,055,115)";
    ctx.fillStyle = ("rgb(237,055,115)");
    ctx.fill();


    //draw lintTo
    ctx.beginPath();
    ctx.moveTo(CenterX, CenterY);    //moveTo(thisCircleCenter)
    ctx.lineTo(nCenterX, nCenterY)   //lineTo(nextCircleCenter)
    ctx.lineWidth = 5;
    ctx.stroke();

    //fill center blank
    ctx.beginPath();
    ctx.arc(CenterX, CenterY, r * 0.8, 0, Math.PI * 2, true)
    ctx.fillStyle = ("white");
    ctx.fill();

}

var drawPointM = function (ctx, statioName, isTransfer, CenterX, CenterY, r) {
    //begin to draw circle
    ctx.beginPath();
    ctx.arc(CenterX, CenterY, r, 0, Math.PI * 2, true);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(237,055,115)";
    ctx.fillStyle = ("rgb(237,055,115)");
    ctx.fill();

    //fill center blank2

    if (isTransfer == false) {
        ctx.beginPath();
        ctx.arc(CenterX, CenterY, r * 0.8, 0, Math.PI * 2, true);
        ctx.fillStyle = ("white");
        ctx.fill();
    }

    else if (isTransfer == true) {
        ctx.beginPath();
        ctx.arc(CenterX, CenterY, r * 0.8, 0, Math.PI * 2, true);
        ctx.fillStyle = ("white");
        ctx.fill();

        ctx.beginPath();
        ctx.arc(CenterX, CenterY, r * 0.5, 0, Math.PI * 2, true);
        ctx.stroke();


    }
    //fillText
    ctx.beginPath();
    ctx.font = "12px 宋体";
    ctx.fillStyle = 'black';
    ctx.textBaseline = 'bottom';
    ctx.fillText(statioName, CenterX + r * 1.5, CenterY);
}

var circleLineToM = function (ctx, statioName, isTransfer, CenterX, CenterY, r, nCenterX, nCenterY) {


    //begin to draw circle
    ctx.beginPath();
    ctx.arc(CenterX, CenterY, r, 0, Math.PI * 2, true);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(237,055,115)";
    ctx.fillStyle = ("rgb(237,055,115)");
    ctx.fill();


    //draw lintTo
    ctx.beginPath();
    ctx.moveTo(CenterX, CenterY);    //moveTo(thisCircleCenter)
    ctx.lineTo(nCenterX, nCenterY)   //lineTo(nextCircleCenter)
    ctx.lineWidth = 5;
    ctx.stroke();

    //fill center blank2

    if (isTransfer == false) {
        ctx.beginPath();
        ctx.arc(CenterX, CenterY, r * 0.8, 0, Math.PI * 2, true);
        ctx.fillStyle = ("white");
        ctx.fill();
    }

    else if (isTransfer == true) {
        ctx.beginPath();
        ctx.arc(CenterX, CenterY, r * 0.8, 0, Math.PI * 2, true);
        ctx.fillStyle = ("white");
        ctx.fill();

        ctx.beginPath();
        ctx.arc(CenterX, CenterY, r * 0.5, 0, Math.PI * 2, true);
        ctx.stroke();


    }
    //fillText
    ctx.beginPath();
    ctx.font = "12px 宋体";
    ctx.fillStyle = 'black';
    ctx.textBaseline = 'bottom';
    ctx.fillText(statioName, CenterX + r * 1.5, CenterY);

}
var draw = function () {
    var canvas = document.getElementById('tuto1');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        //开始一次绘制圆形及连线
        ctx.beginPath();
        ctx.arc(75, 140, 10, 0, Math.PI * 2, true);
        ctx.stroke();
        ctx.moveTo(75, 140);     //moveTo(thisCircleCenter)  
        ctx.lineTo(75, 100);     //lintTo(nextCircleCenter)
        ctx.stroke();

        //第二次绘制
        ctx.beginPath();
        ctx.arc(75, 100, 10, 0, Math.PI * 2, true);
        ctx.stroke();
        //moveTo(圆心)
        ctx.moveTo(75, 100);     //moveTo(thisCircleCenter)
        ctx.lineTo(50, 60);      //lintTo(nextCircleCenter)
        ctx.stroke();

        //function alphaMinus pass
        circleLineTo(ctx, 50, 60, 10, 50, 20);
        circleLineTo(ctx, 50, 20, 10, 50, 20);


    }
}

var drawMetro = function () {
    var ctx = document.getElementById("metroAlpha").getContext('2d');

    circleLineToM(ctx, "新南门", false, 150, 280, 10, 150, 200);
    circleLineToM(ctx, "春熙路", true, 150, 200, 10, 200, 150);
    circleLineToM(ctx, "市二医院", true, 200, 150, 10, 250, 80);
    circleLineToM(ctx, "红星桥", false, 250, 80, 10, 250, 80);
}

var drawGrid = function (canvasId) {
    //grid attributye
    var canvas = document.getElementById(canvasId);
    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;
    var ZONENUM = 15;
    var LENGTH;
    if (HEIGHT == WIDTH) {
        LENGTH = WIDTH / ZONENUM;
    }
    var ctx = canvas.getContext('2d');
    //grid attributye
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    ctx.fill("evenodd");

    for (var i = 0; i <= ZONENUM; i++) {
        for (var j = 0; j <= ZONENUM; j++) {
            //draw grid
            ctx.beginPath();
            ctx.strokeStyle = ("rgb(230,230,230)");
            ctx.strokeRect(LENGTH * i, LENGTH * j, LENGTH, LENGTH);
        }
    }
}

var drawGridN = function (canvasId, zoneNum) {
    //grid attributye
    var canvas = document.getElementById(canvasId);
    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;
    var ZONENUM = zoneNum;
    var LENGTH;
    if (HEIGHT == WIDTH) {
        LENGTH = WIDTH / ZONENUM;
    }
    var ctx = canvas.getContext('2d');
    //grid attributye
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    ctx.fill("evenodd");

    for (var i = 0; i <= ZONENUM; i++) {
        for (var j = 0; j <= ZONENUM; j++) {
            //draw grid
            ctx.beginPath();
            ctx.strokeStyle = ("rgb(230,230,230)");
            ctx.strokeRect(LENGTH * i, LENGTH * j, LENGTH, LENGTH);
        }
    }
}
var drawGridSetPos = function (canvasId, x, y) {
    //grid attributye
    var canvas = document.getElementById(canvasId);
    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;
    var ZONENUM = 10;
    var LENGTH;
    if (HEIGHT == WIDTH) {
        LENGTH = WIDTH / ZONENUM;
    }
    var ctx = canvas.getContext('2d');
    //grid attributye

    for (var i = 0; i <= ZONENUM; i++) {
        for (var j = 0; j <= ZONENUM; j++) {
            //draw position
            if (i == x && j == y) {
                drawPointM(ctx, "Null", false, LENGTH * i, LENGTH * j, 10);
            }
        }
    }

}
var drawGridLine = function (canvasId, CenterX, CenterY, nCenterX, nCenterY) {
    //grid attributye
    var canvas = document.getElementById(canvasId);
    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;
    var ZONENUM = 10;
    var LENGTH;
    if (HEIGHT == WIDTH) {
        LENGTH = WIDTH / ZONENUM;
    }
    var ctx = canvas.getContext('2d');
    //grid attributye

    //draw lintTo
    ctx.beginPath();
    ctx.moveTo(LENGTH * CenterX, LENGTH * CenterY);    //moveTo(thisCircleCenter)
    ctx.lineTo(LENGTH * nCenterX, LENGTH * nCenterY)   //lineTo(nextCircleCenter)
    ctx.lineWidth = 5;
    ctx.stroke();

}
var drawGridLineTo = function (canvasId, lineColor, CenterX, CenterY, statioName, isTransfer, nCenterX, nCenterY) {
    //grid attributye
    var canvas = document.getElementById(canvasId);
    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;
    var ZONENUM = 15;
    var LENGTH;

    if (HEIGHT == WIDTH) {
        LENGTH = WIDTH / ZONENUM;
    }

    var RADIUS = 10;
    var X = LENGTH * CenterX;
    var Y = LENGTH * CenterY;
    var NEXTX = LENGTH * nCenterX;
    var NEXTY = LENGTH * nCenterY;

    var ctx = canvas.getContext('2d');
    //grid attributye

    //begin to draw circle
    ctx.beginPath();
    ctx.arc(X, Y, RADIUS, 0, Math.PI * 2, true);
    ctx.lineWidth = 2;
    if (lineColor == "default") {
        ctx.strokeStyle = "pink";
        ctx.fillStyle = "pink";
    }
    if (lineColor == "chengdu3") {
        ctx.strokeStyle = "rgb(237,055,115)";
        ctx.fillStyle = "rgb(237,055,115)";
    }
    else if (lineColor == "tianjin3") {
        ctx.strokeStyle = "rgb(005,124,170)";
        ctx.fillStyle = "rgb(005,124,170)";
    }
    else if (lineColor == "tianjin1") {
        ctx.strokeStyle = "rgb(214,052,065)";
        ctx.fillStyle = "rgb(214,052,065)";
    }
    ctx.fill();

    //draw lintTo
    ctx.beginPath();
    ctx.moveTo(X, Y);    //moveTo(thisCircleCenter)
    ctx.lineTo(NEXTX, NEXTY)   //lineTo(nextCircleCenter)
    ctx.lineWidth = 5;
    ctx.stroke();

    //fill center blank2

    if (isTransfer == false) {
        ctx.beginPath();
        ctx.arc(X, Y, RADIUS * 0.8, 0, Math.PI * 2, true);
        ctx.fillStyle = ("white");
        ctx.fill();
    }

    else if (isTransfer == true) {
        ctx.beginPath();
        ctx.arc(X, Y, RADIUS * 0.8, 0, Math.PI * 2, true);
        ctx.fillStyle = ("white");
        ctx.fill();

        ctx.beginPath();
        ctx.arc(X, Y, RADIUS * 0.5, 0, Math.PI * 2, true);
        //ctx.strokeStyle = ("grey");
        ctx.stroke();


    }
    //fillText
    ctx.beginPath();
    ctx.font = "12px 宋体";
    ctx.fillStyle = 'black';
    ctx.textBaseline = 'bottom';
    ctx.fillText(statioName, X + RADIUS * 1.5, Y);

}

/*
    drawGrid系列函数需重构为类成员函数
    Grid类
    canvasId
    WIDTH
    HEIGHT
    ZONENUM
    LENGTH
*/

var generateBiTree = function (X, Y, ZONENUM) {
    if (X >= 0 && X <= ZONENUM && Y >= 0 && Y <= ZONENUM) {
        var NLX = X - 2;
        var NLY = Y + 2;
        var NRX = X + 2;
        var NRY = Y + 2;

        if (NLX >= 0 && NLX <= ZONENUM && NLY >= 0 && NLY <= ZONENUM) {
            drawGridLineTo("binaryTree", "default", X, Y, "", false, NLX, NLY);
            generateBiTree(NLX, NLY, ZONENUM)
        }

        else {
            return;
        }

        if (NRX >= 0 && NRX <= ZONENUM && NRY >= 0 && NRY <= ZONENUM) {
            drawGridLineTo("binaryTree", "default", X, Y, "", false, NRX, NRY);
            generateBiTree(NRX, NRY, ZONENUM)
        }

        else {
            return;
        }
    }

    else {
        return;
    }

}

var  darwTianjinMetroBeta= function () {
    drawGrid("metroBeta");
    drawGridLineTo("metroBeta", "tianjin3", 4, 15, "西康路", false, 7, 9);
    drawGridLineTo("metroBeta", "tianjin3", 5, 13, "营口道", true, 7, 9);
    drawGridLineTo("metroBeta", "tianjin3", 6, 11, "和平路", false, 7, 9);
    drawGridLineTo("metroBeta", "tianjin3", 7, 9, "津湾广场", false, 8, 8);
    drawGridLineTo("metroBeta", "tianjin3", 8, 8, "天津站", true, 7, 6);
    drawGridLineTo("metroBeta", "tianjin3", 7, 6, "金狮桥", false, 6, 4);
    drawGridLineTo("metroBeta", "tianjin3", 6, 4, "中山路", false, 9, 1);
    drawGridLineTo("metroBeta", "tianjin3", 9, 1, "北站", true, 9, 1);
    drawGridLineTo("metroBeta", "tianjin1", 2, 12, "鞍山道", false, 5, 13);
    drawGridLineTo("metroBeta", "tianjin1", 5, 13, "营口道", true, 9, 14);
    drawGridLineTo("metroBeta", "tianjin1", 9, 14, "小白楼", false, 9, 14);
}

var darwChengduMetroAlpha = function () {
    drawGridN("metroAlpha", 15);
    drawMetro();
}

var drawTreeAlpha = function () {
    drawGridN("binaryTree", 15);
    generateBiTree(8, 1, 15)

}


draw();
drawColorRect();
drawColorCircle();

darwTianjinMetroBeta();
darwChengduMetroAlpha();
drawTreeAlpha();