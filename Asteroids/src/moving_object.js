function MovingObject(pos, vel, radius, color, game) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
    this.game = game;
}

MovingObject.prototype.draw = function (ctx) {
    const x = this.pos[0];
    const y = this.pos[1];
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(x, y, this.radius, 0, 2*Math.PI);
    ctx.strokeStyle = this.color;
    ctx.stroke();

    ctx.fill();
};

MovingObject.prototype.move = function () {
    let newPos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    this.pos = this.game.wrap(newPos);
};

MovingObject.prototype.isCollidedWith = function (otherObject) {
    let distanceCenter = Math.sqrt(Math.pow(this.pos[0] - otherObject.pos[0], 2)) 
    + Math.sqrt(Math.pow(this.pos[1] - otherObject.pos[1], 2));

    return (distanceCenter < (this.radius + otherObject.radius))
};

MovingObject.prototype.collideWith = function(otherObject) {
    // if (this instanceof Asteroid && otherObject instanceof Bullet) { 
    //     this.game.remove(otherObject);
    //     this.game.remove(this);
    // }
};

module.exports = MovingObject;

// Define a property MovingObject.prototype.isWrappable <---- not needed PHASE 5