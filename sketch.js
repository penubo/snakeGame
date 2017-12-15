BOARDWIDTH = 500;
BOARDHEIGHT = 500;
BLOCKNUMBER = 40;
BLOCKSIZE = BOARDWIDTH / BLOCKNUMBER;
WIDTH = BOARDWIDTH / BLOCKSIZE;
HEIGHT = BOARDHEIGHT / BLOCKSIZE;
GAMESPEED = 10;




function setup() {
    frameRate(GAMESPEED);
    createCanvas(BOARDWIDTH, BOARDHEIGHT);
    snake = new Snake(20, 20);
    mouse = new Mouse();
}

function draw() {
    background(91);

    // draw field line
    for(i = 0; i < width; i += BLOCKSIZE) {
        stroke(255, 15);
        line(i, 0, i, height);
    }
    for(i = 0; i < height; i += BLOCKSIZE) {
        stroke(255, 15);
        line(0, i, width, i);
    }

    // if snake eat mouse
    if ( dist(snake.x, snake.y, mouse.x, mouse.y) < BLOCKSIZE ) {
        console.log("hit");
        snake.grow();
        mouse.reappear();
    }

    for(i = 1; i < snake.body.count(); i++) {
        if ( snake.x == snake.body.pos(i)[0] && snake.y == snake.body.pos(i)[1] ) {
            snake.body.delete(i);
        }
    }

    snake.update();
    snake.show();


    // draw mouse
    xDirection = takeSign(mouse.x - snake.x);
    yDirection = takeSign(mouse.y - snake.y);
    mouse.update(x = xDirection, y = yDirection);
    mouse.show();



}

function takeSign(number) {
    if(number > 0) {
        return 1;
    } else if (number < 0) {
        return -1;
    } else {
        return null;
    }
}

function keyPressed() {
    snake.changeDirection();
}
