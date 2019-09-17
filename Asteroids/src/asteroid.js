const Util = require("./utils")
const MovingObject = require("./moving_object");
const Ship = require("./ship");
const Bullet = require("./bullet");
const DEFAULTS = {
    COLOR: "#484848",
    RADIUS: Math.floor(Math.random() * 30) + 15
};
function Asteroid (options) {
    let args = [options.pos, options.vel, DEFAULTS.RADIUS, DEFAULTS.COLOR, options.game];
    MovingObject.apply(this, args);
}

Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Ship) {
        otherObject.relocate();
        //move to ship
    } else if (otherObject instanceof Bullet) {
		this.game.remove(otherObject);
		this.game.remove(this);
    }
};

module.exports = Asteroid;