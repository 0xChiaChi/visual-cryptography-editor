var pixelSize = 19;

function ASD(){
  
}
// switch(){

// }
var setting={
    // draw squares on move(移動時繪製方塊)
    move: function(event) {
      var context = event.target.getContext("2d");
      context.fillStyle ="#000000";
      // draw squares(畫正方形)
      context.fillRect(
        event.pageX - pixelSize / 2,
        event.pageY - pixelSize / 2,
        pixelSize,
        pixelSize
      );
    }
  };

interact("#imageSrc")
  .origin("self")
  //從哪裡開始(自己)
  .draggable({
    //使屬性可拖動
    max: Infinity,
    maxPerElement: Infinity,
    //每個元素的最大值
    modifiers: [
    //修改值
      interact.modifiers.snap({
        // snap(捕捉) to the corners of a grid(捕捉到網格的角落)
        targets: [
        //動態物件
          interact.snappers.grid({ x: pixelSize, y: pixelSize })
          //限制它離開一格才會畫下一格
        ],
      })
    ],
    //設定監聽器
    listeners: setting
  });


  // clear the canvas(清除畫布)
function ccc(event) {
    var image = document.getElementById("imageSrc");
    var context = image.getContext("2d");
    console.log(123);
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    // context.fillStyle ="#FFFFFF";
}
//這動作是保證頁面顯示大小與螢幕大小相同不會爆框
function resizeCanvases() {
  //用一個陣列去找叫imageSrc的ID，它下面所有子節點的canvas
  [].forEach.call(document.querySelectorAll("#imageSrc"), function(
    canvas
  ) {
    //找nav-home這DIV的寬跟高且設定這canvas和他們的寬高(有pidden不會跟DIV的寬高完全一樣)
    canvas.width = document.getElementById("nav-home").clientWidth;
    canvas.height = document.getElementById("nav-home").clientHeight;
  });
}
// interact.js can also add DOM event listeners(interact.js 還可以添加 DOM 事件監聽器)
interact(document).on("DOMContentLoaded", resizeCanvases);
interact(window).on("resize", resizeCanvases);