// BOARDWIDTH = 500;
// BOARDHEIGHT = 500;
// BLOCKNUMBER = 40;
// BLOCKSIZE = BOARDWIDTH / BLOCKNUMBER;
// WIDTH = BOARDWIDTH / BLOCKSIZE;
// HEIGHT = BOARDHEIGHT / BLOCKSIZE;

function Mouse() {

    this.x = boxPosition(random(0, BLOCKNUMBER-1));
    this.y = boxPosition(random(0, BLOCKNUMBER-1));

    this.speed = 2;


    this.show = function() {
        fill(255, 255, 0);
        ellipse(this.x, this.y, BLOCKSIZE, BLOCKSIZE);
    }

    this.update = function(x, y) {
        this.x += x*this.speed;
        this.y += y*this.speed;
        if (this.x < 0 || this.x > BOARDWIDTH || this.y < 0 || this.y > BOARDHEIGHT) {
            this.reappear();
            
        }

    }

    this.reappear = function() {
        this.x = boxPosition(random(0, BLOCKNUMBER-1));
        this.y = boxPosition(random(0, BLOCKNUMBER-1));
    }


}
