// ------------------ visual-cryptography-grid-system ------------------ //

var cv = window.cv;
let imgElement = document.getElementById("imageSrc");
let inputElement = document.getElementById("fileInput");

// -------------------------------------------------------------------- //

inputElement.addEventListener(
  "change",
  (e) => {
    imgElement.src = URL.createObjectURL(e.target.files[0]);
  },
  false
);

imgElement.onload = function () {
  main();
};

// -------------------------------------------------------------------- //

function main() {
  let src = cv.imread(imgElement);
  cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
  cv.threshold(src, src, 0, 255, cv.THRESH_BINARY | cv.THRESH_OTSU);
  console.log(src.data);
  cv.imshow("Share1Layer", src);
  src.delete();
}

// ---------------------------- Reference ---------------------------- //
// - https://docs.opencv.org/3.4.3/de/d06/tutorial_js_basic_ops.html
// - https://docs.opencv.org/3.3.1/dd/d4d/tutorial_js_image_arithmetics.html
// - https://www.cnblogs.com/bjxqmy/p/12766075.html
