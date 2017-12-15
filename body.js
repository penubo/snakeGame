// BOARDWIDTH = 500;
// BOARDHEIGHT = 500;
// BLOCKNUMBER = 40;
// BLOCKSIZE = BOARDWIDTH / BLOCKNUMBER;
// WIDTH = BOARDWIDTH / BLOCKSIZE;
// HEIGHT = BOARDHEIGHT / BLOCKSIZE;
// GAMESPEED = 10;



function Body() {
    this.x;
    this.y;
    this.next = null;
    this.prev = null;
    this.index;

    this.add = function() {
        if (this.next == null) {
            this.next = new Body();
            this.next.prev = this;
            this.next.index = this.index + 1;
        } else {
            this.next.add();
        }
    }

    this.delete = function(targetIndex) {
        if(this.next != null) {
            if(this.index == targetIndex) {
                this.next = null;
            } else {
                this.next.delete(targetIndex);
            }
        }
    }

    this.pos = function(targetIndex) {
        if(targetIndex > this.count()) {
            return 'error';
        }
        if(this.index == targetIndex) {
            return [this.x, this.y];
        }
        return this.next.pos(targetIndex);
    }

    this.count = function() {
        if(this.next == null) {
            return int(this.index);
        }
        return this.next.count();
    }

    this.isCollide = function() {

    }

    this.update = function(x, y) {
        this.x = x;
        this.y = y;
    }

    this.draw = function() {
        fill(255)
        if (this.next != null) {
            this.next.draw();
        }
        this.update(this.prev.x, this.prev.y);
        ellipse(this.x, this.y, BLOCKSIZE, BLOCKSIZE);
    }


}
