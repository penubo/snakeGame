// BOARDWIDTH = 500;
// BOARDHEIGHT = 500;
// BLOCKNUMBER = 40;
// BLOCKSIZE = BOARDWIDTH / BLOCKNUMBER;
// WIDTH = BOARDWIDTH / BLOCKSIZE;
// HEIGHT = BOARDHEIGHT / BLOCKSIZE;

function Mouse() {

    this.x = boxPosition(random(0, BLOCKNUMBER-1));
    this.y = boxPosition(random(0, BLOCKNUMBER-1));

    this.show = function() {
        fill(255, 255, 0);
        rect(this.x, this.y, BLOCKSIZE, BLOCKSIZE);
    }

    this.update = function() {
        this.x = boxPosition(random(0, BLOCKNUMBER-1));
        this.y = boxPosition(random(0, BLOCKNUMBER-1));
    }


}
