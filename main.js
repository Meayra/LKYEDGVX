var mouse_event = "empty";
var last_position_of_x , last_position_of_y;

canvas = document.getElementById ('myCanvas');
ctx = canvas.getContext ("2d");

color = "black";
width_of_line = 1;

canvas.addEventListener ("mousedown", my_mousedown);

function my_mousedown (e)
{
    color = document.getElementById ("color").value ;
    width_of_line = document.getElementById ("width_of_line").value ;
    mouse_event = "mouseDown";
}

canvas.addEventListener ("mousemove", my_mousemove);

function my_mousemove (e)
{
    current_positon_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_positon_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouse_event == "mouseDown")
    {
        ctx.beginPath ();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log ("last positon of x and y coordinate= ");
        console.log ("x= "+ last_position_of_x + "y= "+ last_position_of_y);
        ctx.moveTo (last_position_of_x, last_position_of_y);
        
        console.log ("current positon of x and y coordinate= ");
        console.log ("x= "+ current_positon_of_mouse_x + "y= "+ current_positon_of_mouse_y);
        ctx.lineTo (current_positon_of_mouse_x, current_positon_of_mouse_y);
        ctx.stroke ();
    }

    last_position_of_x = current_positon_of_mouse_x;
    last_position_of_y = current_positon_of_mouse_y;
}

canvas.addEventListener ("mouseup", my_mouseup);

function my_mouseup (e)
{
    mouse_event = "mouseUp"
}

canvas.addEventListener ("mouseleave", my_mouseleave);

function my_mouseleave (e)
{
    mouse_event = "mouseLeave"
}

function clearArea()
{
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

