//以id获取值 测试log
let btnGenerateLog = document.getElementById("generateMazeLog");
let logInfo = document.getElementById("logInfo");

//测试log点击
btnGenerateLog.onclick = function () {
    logInfo.innerHTML = "Connnect Successful";
    let mazeRow = document.getElementById("row").value;
    let mazeCol = document.getElementById("col").value;

    var displayMazeStr = initArray(mazeRow, mazeCol);
    logInfo.innerHTML = displayMazeStr;
};

//初始化maze数组并赋值 返回是数组的字符串带换行符 要分离
function initArray(row, col) {
    var mazeArray = new Array();
    for (let i = 0; i < row; i++) {
        mazeArray[i] = new Array();
        for (let j = 0; j < col; j++)
            mazeArray[i][j] = 0;
    }

    var mazeStr = "";
    for (let i = 0; i < row; i++) {
        mazeStr += mazeArray[i];
        mazeStr +="<br/>";
    }
    /*
    for (var key in mazeArray) {
        mazeStr += mazeArray;
    }
    */

    return mazeStr;
}
