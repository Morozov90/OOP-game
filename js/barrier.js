
function Barrier() {
    var left;
    var affect;
    var image;

    this.getLeft = function () {
        return left;
    }

    this.setLeft = function (value) {
        left = value;
    }

    this.getAffect = function () {
        return affect;
    }

    this.setAffect = function (value) {
        affect = value;
    }

    this.getImage = function () {
        return image;
    }

    this.setImage = function (value) {
        image = value;
    }
}

Barrier.prototype.init = function (track , value) {

    this.arr = ['kamen', 'yagoda'];
    this.rand = Math.floor(Math.random() * this.arr.length);
    this.a = this.arr[this.rand];
    this.setAffect(this.a);
    this.setImage(this.a);
    this.getAffect();
    this.newBarrier = document.createElement('div');
    this.newBarrier.classList.add("barrier");
    this.newBarrier.classList.add(this.getImage());
    track.appendChild(this.newBarrier);
    this.newBarrier.style.left = this.newBarrier.offsetLeft + parseInt(value)+ 100 + "px";

}

Barrier.prototype.destroy = function () {
    var allBarrier = document.querySelectorAll('.barrier');
    for(var i = 0; i < allBarrier.length; i++) {
        allBarrier[i].parentNode.removeChild(allBarrier[i]);
    }
}