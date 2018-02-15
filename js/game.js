//console.log ( '%c%s', 'color: green; font: 46px Tahoma;', 'Пора писать логику игры' );

function Game() {
    var track1;
    var track2;

    this.getTrack1 = function () {
        return track1;
    }

    this.getTrack2 = function () {
        return track2;
    }

    this.setTrack1 = function (track) {
        track1 = track;
    }

    this.setTrack2 = function (track) {
        track2 = track;
    }
}

Game.CEIL_WIDTH = 55;

Game.prototype.init = function () {
    this.zaec = new Zaec();
    this.volk = new Volk();
    this.barrier = new Barrier();
    this.setTrack1(document.querySelector('#track1'));
    this.setTrack2(document.querySelector('#track2'));
    this.zaec.init(this.getTrack1());
    this.volk.init(this.getTrack2());


    document.querySelector('.btn.run').addEventListener("click", () => {

            this.barrier.destroy();
            this.barrier.init(this.getTrack1(), this.zaec.getLeft());
            this.one = this.barrier.getAffect();
            this.barrier.init(this.getTrack2(), this.volk.getLeft());
            this.two = this.barrier.getAffect();
            this.run();

    if (parseInt(this.zaec.getLeft()) >= (document.querySelector('#track1').offsetWidth)-105) {
        alert('Выиграл заец');
        this.restart();
    } else  if ((this.volk.getLeft() != 0 ) && (this.zaec.getLeft() != 0) && (parseInt(this.volk.getLeft()) >= parseInt(this.zaec.getLeft()))){
            alert('Волк сьел зайца');
            this.restart();
    }
    });
}

Game.prototype.run = function () {
    this.zaec.run(this.one);
    this.volk.run(this.two);
}

Game.prototype.restart = function () {
    location.reload();
}

var game = new Game();
game.init();