const MovingObject = require("./moving_object");
const Util = require("./utils");
const Bullet = require("./bullet");

const DEFAULTS = {
    RADIUS: 10,
    COLOR: "#7FFF00",
    VEL: [0, 0],
};

function Ship(options) {
    let args = [options.pos, DEFAULTS.VEL, DEFAULTS.RADIUS, DEFAULTS.COLOR, options.game];
    MovingObject.apply(this, args);
};

Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = DEFAULTS.VEL;
};

Ship.prototype.power = function(impulse) {
  let x = this.vel[0] + impulse[0];
  let y = this.vel[1] + impulse[1];
  this.vel = [x, y];
};

Ship.prototype.fireBullet = function () {
    let vel = [this.vel[0] * 5, this.vel[1] * 5];
    if (!( vel[0] === 0 && vel[1] === 0 )) { 
      const bullet = new Bullet({pos: this.pos, vel: vel, game: this.game});
      this.game.add(bullet);
    }
};

module.exports = Ship;