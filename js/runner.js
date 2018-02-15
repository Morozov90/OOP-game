
function Runner() {
    var speed;
    var left = 0;
    var image;

    this.getSpeed = function () {
        return speed;
    }

    this.setSpeed = function (value) {
        if(value >= 0) {
            speed = value;
        }
    }

    this.getLeft = function () {
        return left;
    }

    this.setLeft = function (value) {
        left = value;
    }

    this.getImage = function () {
        return image;
    }

    this.setImage = function (value) {
        image = value;
    }
}

Runner.prototype.init = function (track) {
    this.hero = document.createElement('div');
    this.hero.classList.add("player");
    this.hero.classList.add(this.getImage());
    track.appendChild(this.hero);
}

Runner.prototype.run = function (affect) {
        switch (affect) {
            case 'kamen':
                this.speedRunner = this.getSpeed() - 2;
                break;
            case 'yagoda':
                this.speedRunner = this.getSpeed() + 2;
                break;
        }


    this.hero.style.left = this.hero.offsetLeft + Game.CEIL_WIDTH * this.speedRunner + "px";

    if (parseInt(this.hero.style.left) > 1050){
        this.hero.style.left = 1050+'px';
    }
        this.setLeft(this.hero.style.left);


}





