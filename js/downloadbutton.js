// 下載按鈕
var downloadbutton = document.getElementById("downloadbutton");

downloadbutton.addEventListener("click", function(){
    if(checkEmpty()!=true){
    var canvas = document.getElementById('imageSrc');
    console.log(123);
    var anchor = document.createElement('a');
    anchor.href = canvas.toDataURL("image/png");
    anchor.download = "imageSrc.png";
    anchor.click();
    }
})

downloadbutton.addEventListener("click", function(){
    if(checkEmpty2()!=true){
    var canvas = document.getElementById('Share1Layer');
    console.log(123);
    var anchor = document.createElement('a');
    anchor.href = canvas.toDataURL("image/png");
    anchor.download = "Share1Layer.png";
    anchor.click();
    }
})

downloadbutton.addEventListener("click", function(){
    if(checkEmpty2()!=true){
    var canvas = document.getElementById('Share2Layer');
    console.log(123);
    var anchor = document.createElement('a');
    anchor.href = canvas.toDataURL("image/png");
    anchor.download = "Share2Layer.png";
    anchor.click();
    }
})

downloadbutton.addEventListener("click", function(){
    if(checkEmpty2()!=true){
    var canvas = document.getElementById('verificLayer');
    console.log(123);
    var anchor = document.createElement('a');
    anchor.href = canvas.toDataURL("image/png");
    anchor.download = "verificLayer.png";
    anchor.click();
    }
})

//驗證canvas畫布是否為空函數
    function isCanvasBlank(checkcanvas) {
    var blank = document.createElement('canvas');//系統獲取一個空canvas對象
    blank.width = checkcanvas.width;
    blank.height = checkcanvas.height;
    return checkcanvas.toDataURL() == blank.toDataURL();//比較值相等則為空
}
//調用
//表單非空驗證
function checkEmpty() {
    var check=document.getElementById("imageSrc"); // 獲取html的canvas對象，我這個id="imageSrc"
    if(isCanvasBlank(check)){
        return true;
    }
}

function checkEmpty2() {
    var check2=document.getElementById("Share1Layer"); // 獲取html的canvas對象，我這個id="Share1Layer"
    if(isCanvasBlank(check2)){
        return true;
    }
}

// 作者：Rain_
// 鏈接：https://juejin.cn/post/6844904067999727630
// 來源：稀土掘金
// 著作權歸作者所有。商業轉載請聯繫作者獲得授權，非商業轉載請註明出處。