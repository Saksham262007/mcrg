var square


function setup(){
    createCanvas(400,400);
square = createSprite(200,200,20,20);
square.shapeColor = "red";
}


function draw(){
    background("white");
    drawSprites();
    if (keyDown (UP_ARROW)){
        changePosition (0,-1)
    }
else if(keyDown (DOWN_ARROW)){
    changePosition(0,+1)
}
else if (keyDown(LEFT_ARROW)){
    changePosition(-1,0)
}
else if (keyDown(RIGHT_ARROW)){
    changePosition(+1,0)
}

}

function changePosition(x,y){
    square.x = square.x + x;
    square.y = square.y + y;
}