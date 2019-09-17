const Asteroid = require("./asteroid");
const Ship = require("./ship");
const Bullet = require("./bullet");

const DEFAULTS = {
  DIM_X: 1000,
  DIM_Y: 600,
  NUM_ASTEROIDS: 50
};

function Game() {
  this.DIM_X = DEFAULTS.DIM_X;
  this.DIM_Y = DEFAULTS.DIM_Y;
  this.NUM_ASTEROIDS = DEFAULTS.NUM_STEROIDS;
  this.asteroids = [];
  this.addAsteroids();
  this.ship = new Ship({pos: this.randomPosition(), game: this});
  this.bullets = [];
}

Game.prototype.add = function (obj) {
  if (obj instanceof Asteroid) {
    this.asteroids.push(obj);
  } else if (obj instanceof Bullet) {
    this.bullets.push(obj);
  }
}

Game.prototype.remove = function (obj) {
  if (obj instanceof Asteroid) {
    let i = this.asteroids.indexOf(obj);
    this.asteroids.splice(i, 1);
  } else if (obj instanceof Bullet) {
    let j = this.bullets.indexOf(obj);
    this.bullets.splice(j, 1);
  }
};

Game.prototype.allObjects = function () {
  let objects = this.asteroids.concat(this.ship).concat(this.bullets);
  return objects;
};

Game.prototype.randomPosition = function() {
  let x = Math.floor(Math.random() * DEFAULTS.DIM_X);
  let y = Math.floor(Math.random() * DEFAULTS.DIM_Y);
  let xNeg = Math.floor(Math.random() * 2);
  let yNeg = Math.floor(Math.random() * 2);

  x = (xNeg === 1) ? (-1 * x) : x;
  y = (yNeg === 1) ? (-1 * y) : y;
  return [x, y];
}

Game.prototype.randomVelocity = function () {
  let x = Math.floor(Math.random() * 1.5) + 5;
  let y = Math.floor(Math.random() * 1.5) + 5;
  let xNeg = Math.floor(Math.random() * 2);
  let yNeg = Math.floor(Math.random() * 2);

  x = (xNeg === 1) ? (-1 * x) : x;
  y = (yNeg === 1) ? (-1 * y) : y;
  return [x, y];
}

//requestAnimationFrame
// goes in game view
// ties fps with phsyics
// window.requestAnimationFrame(step) ????????

Game.prototype.addAsteroids = function() {
  while (this.asteroids.length < DEFAULTS.NUM_ASTEROIDS) {
    this.asteroids.push( new Asteroid({pos: this.randomPosition(), vel: this.randomVelocity(), game: this}) );
  }
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, DEFAULTS.DIM_X, DEFAULTS.DIM_Y);
  const img = new Image();
  img.src = "space.png";
  ctx.drawImage(img, 0, 0, DEFAULTS.DIM_X, DEFAULTS.DIM_Y);
  this.allObjects().forEach( obj => obj.draw(ctx) );
}

Game.prototype.moveObjects = function() {
  this.allObjects().forEach( obj => obj.move() );
}

Game.prototype.wrap = function(pos) {
  let newPos = pos;
  if (pos[0] < 0) {
    newPos = [DEFAULTS.DIM_X, pos[1]];
  } else if ( pos[0] > DEFAULTS.DIM_X ){  
    newPos = [1, pos[1]];
  } else if ( pos[1] < 0 ) {
    newPos = [pos[0], DEFAULTS.DIM_Y - 1];
  } else if (pos[1] > DEFAULTS.DIM_Y) {
    newPos = [pos[0], 1];
  }

  return newPos;
}

Game.prototype.isOutOfBounds = function (pos) {
	if (pos[0] < 0) {
		return true;
	} else if (pos[0] > DEFAULTS.DIM_X) {
		return true;
	} else if (pos[1] < 0) {
		return true;
	} else if (pos[1] > DEFAULTS.DIM_Y) {
		return true;
	}

	return false;
}



Game.prototype.checkCollisions = function () {
    const objects = this.allObjects().slice(0);
    for (let i = 0; i < objects.length - 1; i++) {
        for (let j = i + 1; j < objects.length; j++) {
            if (objects[i].isCollidedWith(objects[j])) {
              objects[i].collideWith(objects[j]);
            }
        }
    }
};

Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
};

module.exports = Game;