var last_position_of_x = 0;
var last_position_of_y = 0;
var mouseEvent="empty";

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
width = 1;

canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown(e){

    color = document.getElementById("colors").value;
    width = document.getElementById("widthofline").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e){

    current_x_position = e.clientX - canvas.offsetLeft;
    current_y_position = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        console.log("The last positions of the x and y are: ");
        console.log("x = "+last_position_of_x+" y = "+last_position_of_y);
        ctx.moveTo(last_position_of_x , last_position_of_y);

        console.log("The current positions of the x and y are: ");
        console.log("x = "+current_x_position+" y = "+current_y_position);
        ctx.lineTo(current_x_position , current_y_position);
        ctx.stroke();
    }

    last_position_of_x = current_x_position;
    last_position_of_y = current_y_position;
}

function clearArea(){
    ctx.clearRect(0 , 0 , ctx.canvas.width , ctx.canvas.height);
}