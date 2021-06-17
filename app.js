const canvas = document.getElementById("jsCanvas");

let paining = false;

function stopPainting(){
    painting = false;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    
}

function onMouseDown(event){
    painting = true;

}

function onMouseUp(event){
    stopPainting();
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onmousedown);
    canvas.addEventListener("mouseup", onmouseup);
    canvas.addEventListener("mouseleave", stopPainting;
}