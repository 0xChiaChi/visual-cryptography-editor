// 下載按鈕

var downloadbutton = document.getElementById("downloadbutton");


downloadbutton.addEventListener("click", function(){
    if(checkEmpty()!=true){
    var canvas = document.getElementById('imageSrc');
    console.log(123);
    var anchor = document.createElement('a');
    anchor.href = canvas.toDataURL("image/png");
    anchor.download = "IMAGE.PNG";
    anchor.click();
    }
})


downloadbutton.addEventListener("click", function(){
    if(checkEmpty2()!=true){
    var canvas = document.getElementById('Share1Layer');
    console.log(123);
    var anchor = document.createElement('a');
    anchor.href = canvas.toDataURL("image/png");
    anchor.download = "IMAGE.PNG";
    anchor.click();
    }
})

downloadbutton.addEventListener("click", function(){
    if(checkEmpty2()!=true){
    var canvas = document.getElementById('Share2Layer');
    console.log(123);
    var anchor = document.createElement('a');
    anchor.href = canvas.toDataURL("image/png");
    anchor.download = "IMAGE.PNG";
    anchor.click();
    }
})

downloadbutton.addEventListener("click", function(){
    if(checkEmpty2()!=true){
    var canvas = document.getElementById('verificLayer');
    console.log(123);
    var anchor = document.createElement('a');
    anchor.href = canvas.toDataURL("image/png");
    anchor.download = "IMAGE.PNG";
    anchor.click();
    }
})



//验证canvas画布是否为空函数
    function isCanvasBlank(checkcanvas) {
    var blank = document.createElement('canvas');//系统获取一个空canvas对象
    blank.width = checkcanvas.width;
    blank.height = checkcanvas.height;
    return checkcanvas.toDataURL() == blank.toDataURL();//比较值相等则为空
}
//调用
//表单非空验证
function checkEmpty() {
    var check=document.getElementById("imageSrc"); // 获取html的canvas对象，我这个id="canvas"
    if(isCanvasBlank(check)){
        return true;
    }
}

function checkEmpty2() {
    var check2=document.getElementById("Share1Layer"); // 获取html的canvas对象，我这个id="canvas"
    if(isCanvasBlank(check2)){
        return true;
    }
}

// 作者：Rain_
// 链接：https://juejin.cn/post/6844904067999727630
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。