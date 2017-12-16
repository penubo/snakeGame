BOARDWIDTH = 500;
BOARDHEIGHT = 500;
BLOCKNUMBER = 40;
BLOCKSIZE = BOARDWIDTH / BLOCKNUMBER;
WIDTH = BOARDWIDTH / BLOCKSIZE;
HEIGHT = BOARDHEIGHT / BLOCKSIZE;
GAMESPEED = 15;




function setup() {
    frameRate(GAMESPEED);
    createCanvas(BOARDWIDTH, BOARDHEIGHT);
    snake = new Snake(20, 20);
    mouse = [];
    for(i = 0; i < 10; i++) {
        mouse.push(new Mouse());
    }

    score = 1;
}

function draw() {
    score += snake.body.count() * 0.1;
    // frameRate(GAMESPEED + score * 0.1);
    // console.log(score);
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
    for(i = 0; i < 10; i++) {
        if ( dist(snake.location.x, snake.location.y, mouse[i].location.x, mouse[i].location.y) < BLOCKSIZE ) {
            console.log("hit");
            snake.grow();
            mouse[i].reappear();
        }
    }

    // if snake eat its body accidently
    for(i = 1; i < snake.body.count(); i++) {
        if ( snake.location.x == snake.body.pos(i)[0] && snake.location.y == snake.body.pos(i)[1] ) {
            snake.body.delete(i);
        }
    }

    snake.update();
    snake.show();


    // draw mouse
    for(i = 0; i < 10; i++) {
        xDirection = takeSign(mouse[i].location.x - snake.x); // 1 or -1
        yDirection = takeSign(mouse[i].location.y - snake.y); // 1 or -1
        mouse[i].update(x = xDirection, y = yDirection);
        mouse[i].show();
    }


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
    if(keyCode == 32) {
        snake.accelerate(3);
    }
    snake.changeDirection();
}
