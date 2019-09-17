const MovingObject = require("./moving_object");
const Util = require("./utils");
// const Asteroid = require("./asteroid")

const DEFAULTS = {
    RADIUS: 2,
    COLOR: "#FF1493"
};

function Bullet(options) {
    let args = [options.pos, options.vel, DEFAULTS.RADIUS, DEFAULTS.COLOR, options.game];
    MovingObject.apply(this, args);
}

Util.inherits(Bullet, MovingObject);

Bullet.prototype.collideWith = function (otherObject) {
  // if (otherObject instanceof Asteroid) {
  //   this.game.remove(otherObject);
  //   this.game.remove(this);
  // }
};

Bullet.prototype.move = function () {
  this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
  if (this.game.isOutOfBounds(this.pos)) {
    this.game.remove(this);
  }
};

module.exports = Bullet;