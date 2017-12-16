// BOARDWIDTH = 500;
// BOARDHEIGHT = 500;
// BLOCKNUMBER = 40;
// BLOCKSIZE = BOARDWIDTH / BLOCKNUMBER;
// WIDTH = BOARDWIDTH / BLOCKSIZE;
// HEIGHT = BOARDHEIGHT / BLOCKSIZE;

function Snake(x, y) {

    this.moon=0;

    this.location = createVector(boxPosition(x), boxPosition(y));
    // this.x = boxPosition(x);
    // this.y = boxPosition(y);
    this.speed = 1;

    // moving direction
    this.direction = {x:BLOCKSIZE, y:0};
    this.prevDirection = 39;


    this.body = new Body();
    this.body.prev = this;
    this.body.index = 1;

    this.accelerate = function(val) {
        this.speed *= val;
    }

    this.move = function(xVal, yVal) {
        return {x:BLOCKSIZE*xVal, y:BLOCKSIZE*yVal};
    }
    // call this function when key is pressed.
    this.changeDirection = function() {
        if (abs(this.prevDirection - keyCode) == 2) {
            return;
        }
        this.prevDirection = keyCode;
        switch(keyCode) {
            case UP_ARROW:
                this.direction = this.move(0,-1);
                break;
            case DOWN_ARROW:
                this.direction = this.move(0, 1);
                break;
            case RIGHT_ARROW:
                this.direction = this.move(1, 0);
                break;
            case LEFT_ARROW:
                this.direction = this.move(-1, 0);
                break;
            default:
                break;
        }
    }

    this.goThroughTheWall = function() {
        if (this.location.x >= boxPosition(BLOCKNUMBER)) {
            this.location.x = boxPosition(0)
        } else if (this.location.x < boxPosition(0)) {
            this.location.x = boxPosition(BLOCKNUMBER-1)
        }
        if (this.location.y >= boxPosition(BLOCKNUMBER)) {
            this.location.y = boxPosition(0)
        } else if (this.location.y < boxPosition(0)) {
            this.location.y = boxPosition(BLOCKNUMBER-1)
        }
    }

    this.grow = function() {
        this.body.add();
    }


    this.show = function() {
        this.goThroughTheWall();
        fill(255, 105, 84);
        ellipse(this.location.x, this.location.y, BLOCKSIZE, BLOCKSIZE);
    }

    this.update = function () {
        this.body.draw();
        this.location.x += this.direction.x*this.speed;
        this.location.y += this.direction.y*this.speed;
        this.speed = 1;
    }

}

function boxPosition(val) {
    return (floor(val) * BLOCKSIZE) + (BLOCKSIZE * 0.5)
}
