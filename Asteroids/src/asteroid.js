const Util = require("./utils")
const MovingObject = require("./moving_object");
const Ship = require("./ship");
const Bullet = require("./bullet");
const DEFAULTS = {
    COLOR: "#484848",
};
function Asteroid (options) {
    let radius = Math.floor(Math.random() * 40) + 10;
    let args = [options.pos, options.vel, radius, DEFAULTS.COLOR, options.game];
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