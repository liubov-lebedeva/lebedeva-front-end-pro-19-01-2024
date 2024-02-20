let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this;
    },
    down: function () {
        this.step--;
        return this;
    },
    showStep: function () {
        console.log(this.step);
        return this;
    }
};

function Ladder(step) {
    this.step = step;
    this.up = function () {
        this.step++;
        return this;
    };
    this.down = function () {
        this.step--;
        return this;
    };
    this.showStep = function () {
        console.log(this.step);
        return this;
    }
}

let ladder1 = new Ladder(0);
ladder1.up().up().showStep().down().down().showStep();