// BOARDWIDTH = 500;
// BOARDHEIGHT = 500;
// BLOCKNUMBER = 40;
// BLOCKSIZE = BOARDWIDTH / BLOCKNUMBER;
// WIDTH = BOARDWIDTH / BLOCKSIZE;
// HEIGHT = BOARDHEIGHT / BLOCKSIZE;

function Mouse() {

    this.location = createVector(boxPosition(random(0, BLOCKNUMBER-1)),boxPosition(random(0, BLOCKNUMBER-1)));
    this.velocity = createVector(1.0, 1.0);
    // this.x = boxPosition(random(0, BLOCKNUMBER-1));
    // this.y = boxPosition(random(0, BLOCKNUMBER-1));

    // this.speed = 2;


    this.show = function() {
        fill(255, 255, 0);
        // ellipse(this.x, this.y, BLOCKSIZE, BLOCKSIZE);
        ellipse(this.location.x, this.location.y, BLOCKSIZE, BLOCKSIZE);

    }

    this.update = function(x, y) {
        // this.x += x*this.speed;
        // this.y += y*this.speed;
        // if (this.x < 0 || this.x > BOARDWIDTH || this.y < 0 || this.y > BOARDHEIGHT) {
        //     this.reappear();
        //
        // }
        this.acceleration = p5.Vector.random2D();
        this.acceleration.mult(2);
        this.acceleration.mult(random(2));
        this.velocity.add(this.acceleration);
        this.velocity.limit(10);
        this.location.add(this.velocity);
        // this.location.x += x*this.speed;
        // this.location.y += y*this.speed;
        if (this.location.x < 0 || this.location.x > BOARDWIDTH || this.location.y < 0 || this.location.y > BOARDHEIGHT) {
            this.reappear();

        }

    }

    this.reappear = function() {
        // this.x = boxPosition(random(0, BLOCKNUMBER-1));
        // this.y = boxPosition(random(0, BLOCKNUMBER-1));
        this.location = createVector(boxPosition(random(0, BLOCKNUMBER-1)),boxPosition(random(0, BLOCKNUMBER-1)));
        this.velocity.normalize();
    }


}
