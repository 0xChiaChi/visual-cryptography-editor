	const grid=document.querySelector('.pixel_canvas');
	const cleaning=document.querySelector('.quick_fill');
	function block_capture() {
	  html2canvas(grid).then(function (canvas) {
	    a = document.createElement("a");
	    a.href = canvas
	      .toDataURL("image/jpeg", 0.92)
	      .replace("image/jpeg", "image/octet-stream");
	    a.download = "image.jpg";
	    a.click();
	  });
	}
   function mkgrid(h,w){
	   	while(grid.firstChild){
	   		grid.removeChild(grid.firstChild);
	   	}
		for (let i = 1; i <= h; i++) {
			let gridrow=document.createElement('tr');
			grid.appendChild(gridrow);
	   		for (let j = 1; j <= w; j++) {
	   			let gridcol=document.createElement('td');
	   			gridrow.appendChild(gridcol);
	   			gridcol.addEventListener('mousedown', function() {
	        	const color = document.querySelector('.color_picker').value;
	       		this.style.backgroundColor = color;
	   			})
	   		}
	   }
   }
let down=false;
grid.addEventListener('mousedown',function(e){
	down=true;
	grid.addEventListener('mouseup',function(){
		down=false;
	});
	grid.addEventListener('mouseleave',function(){
		down=false;
	});
	grid.addEventListener('mouseover',function(e){
	const color =document.querySelector('.color_picker').value;
		if(down){
			if (e.target.tagName==='TD') {
				e.target.style.backgroundColor = color;		
			}
		}
	});
})
cleaning.addEventListener('click', function(e) {
  e.preventDefault();
  grid.querySelectorAll('td').forEach(td => td.style.backgroundColor = "#FFFFFF");
});