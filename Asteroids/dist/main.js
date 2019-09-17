/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\")\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\nconst DEFAULTS = {\n    COLOR: \"#484848\",\n};\nfunction Asteroid (options) {\n    let radius = Math.floor(Math.random() * 40) + 10;\n    let args = [options.pos, options.vel, radius, DEFAULTS.COLOR, options.game];\n    MovingObject.apply(this, args);\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.prototype.collideWith = function (otherObject) {\n    if (otherObject instanceof Ship) {\n        otherObject.relocate();\n        //move to ship\n    } else if (otherObject instanceof Bullet) {\n\t\tthis.game.remove(otherObject);\n\t\tthis.game.remove(this);\n    }\n};\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n// const Asteroid = require(\"./asteroid\")\n\nconst DEFAULTS = {\n    RADIUS: 2,\n    COLOR: \"#FF1493\"\n};\n\nfunction Bullet(options) {\n    let args = [options.pos, options.vel, DEFAULTS.RADIUS, DEFAULTS.COLOR, options.game];\n    MovingObject.apply(this, args);\n}\n\nUtil.inherits(Bullet, MovingObject);\n\nBullet.prototype.collideWith = function (otherObject) {\n  // if (otherObject instanceof Asteroid) {\n  //   this.game.remove(otherObject);\n  //   this.game.remove(this);\n  // }\n};\n\nBullet.prototype.move = function () {\n  this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];\n  if (this.game.isOutOfBounds(this.pos)) {\n    this.game.remove(this);\n  }\n};\n\nmodule.exports = Bullet;\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\nconst DEFAULTS = {\n  DIM_X: 1000,\n  DIM_Y: 600,\n  NUM_ASTEROIDS: 50\n};\n\nfunction Game() {\n  this.DIM_X = DEFAULTS.DIM_X;\n  this.DIM_Y = DEFAULTS.DIM_Y;\n  this.NUM_ASTEROIDS = DEFAULTS.NUM_STEROIDS;\n  this.asteroids = [];\n  this.addAsteroids();\n  this.ship = new Ship({pos: this.randomPosition(), game: this});\n  this.bullets = [];\n}\n\nGame.prototype.add = function (obj) {\n  if (obj instanceof Asteroid) {\n    this.asteroids.push(obj);\n  } else if (obj instanceof Bullet) {\n    this.bullets.push(obj);\n  }\n}\n\nGame.prototype.remove = function (obj) {\n  if (obj instanceof Asteroid) {\n    let i = this.asteroids.indexOf(obj);\n    this.asteroids.splice(i, 1);\n  } else if (obj instanceof Bullet) {\n    let j = this.bullets.indexOf(obj);\n    this.bullets.splice(j, 1);\n  }\n};\n\nGame.prototype.allObjects = function () {\n  let objects = this.asteroids.concat(this.ship).concat(this.bullets);\n  return objects;\n};\n\nGame.prototype.randomPosition = function() {\n  let x = Math.floor(Math.random() * DEFAULTS.DIM_X);\n  let y = Math.floor(Math.random() * DEFAULTS.DIM_Y);\n  let xNeg = Math.floor(Math.random() * 2);\n  let yNeg = Math.floor(Math.random() * 2);\n\n  x = (xNeg === 1) ? (-1 * x) : x;\n  y = (yNeg === 1) ? (-1 * y) : y;\n  return [x, y];\n}\n\nGame.prototype.randomVelocity = function () {\n  let x = Math.floor(Math.random() * 1.5) + 2;\n  let y = Math.floor(Math.random() * 1.5) + 2;\n  let xNeg = Math.floor(Math.random() * 2);\n  let yNeg = Math.floor(Math.random() * 2);\n\n  x = (xNeg === 1) ? (-1 * x) : x;\n  y = (yNeg === 1) ? (-1 * y) : y;\n  return [x, y];\n}\n\n//requestAnimationFrame\n// goes in game view\n// ties fps with phsyics\n// window.requestAnimationFrame(step) ????????\n\nGame.prototype.addAsteroids = function() {\n  while (this.asteroids.length < DEFAULTS.NUM_ASTEROIDS) {\n    this.asteroids.push( new Asteroid({pos: this.randomPosition(), vel: this.randomVelocity(), game: this}) );\n  }\n}\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0, 0, DEFAULTS.DIM_X, DEFAULTS.DIM_Y);\n  const img = new Image();\n  img.src = \"space.png\";\n  ctx.drawImage(img, 0, 0, DEFAULTS.DIM_X, DEFAULTS.DIM_Y);\n  this.allObjects().forEach( obj => obj.draw(ctx) );\n}\n\nGame.prototype.moveObjects = function() {\n  this.allObjects().forEach( obj => obj.move() );\n}\n\nGame.prototype.wrap = function(pos) {\n  let newPos = pos;\n  if (pos[0] < 0) {\n    newPos = [DEFAULTS.DIM_X, pos[1]];\n  } else if ( pos[0] > DEFAULTS.DIM_X ){  \n    newPos = [1, pos[1]];\n  } else if ( pos[1] < 0 ) {\n    newPos = [pos[0], DEFAULTS.DIM_Y - 1];\n  } else if (pos[1] > DEFAULTS.DIM_Y) {\n    newPos = [pos[0], 1];\n  }\n\n  return newPos;\n}\n\nGame.prototype.isOutOfBounds = function (pos) {\n\tif (pos[0] < 0) {\n\t\treturn true;\n\t} else if (pos[0] > DEFAULTS.DIM_X) {\n\t\treturn true;\n\t} else if (pos[1] < 0) {\n\t\treturn true;\n\t} else if (pos[1] > DEFAULTS.DIM_Y) {\n\t\treturn true;\n\t}\n\n\treturn false;\n}\n\n\n\nGame.prototype.checkCollisions = function () {\n    const objects = this.allObjects().slice(0);\n    for (let i = 0; i < objects.length - 1; i++) {\n        for (let j = i + 1; j < objects.length; j++) {\n            if (objects[i].isCollidedWith(objects[j])) {\n              objects[i].collideWith(objects[j]);\n            }\n        }\n    }\n};\n\nGame.prototype.step = function () {\n    this.moveObjects();\n    this.checkCollisions();\n};\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function GameView(game, ctx) {\n  this.game = game;\n  this.ship = this.game.ship;\n  this.ctx = ctx;\n  this.start();\n\n}\n\nGameView.prototype.start = function() {\n  let game = this.game;\n  let ctx = this.ctx;\n  let that = this;\n  that.bindKeyHandlers();\n  setInterval( function() { \n    //game.moveObjects();\n    game.step();\n    game.draw(ctx);\n  }, 20);\n};\n\nGameView.prototype.bindKeyHandlers = function() { \n  let that = this;\n  key('w', function () { that.ship.power([0, -1]) });\n  key('d', function() {that.ship.power([1, 0])});\n  key('a', function () { that.ship.power([-1, 0]) });\n  key('s', function () { that.ship.power([0, 1]) });\n  key('space', function () { that.ship.fireBullet(); });\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\")\nconst AsteroidObject = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    let currentCtx = document.getElementById(\"game-canvas\");\n    const ctx = currentCtx.getContext(\"2d\");\n    // const movingObject = new MovingObject([20, 20], [0], 10, \"#00ff00\",);\n    // movingObject.draw(ctx);\n    // const asteroidObject = new AsteroidObject({ pos: [500, 400]});\n    // asteroidObject.draw(ctx);\n    const game = new Game();\n    const gameView = new GameView(game, ctx);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(pos, vel, radius, color, game) {\n    this.pos = pos;\n    this.vel = vel;\n    this.radius = radius;\n    this.color = color;\n    this.game = game;\n}\n\nMovingObject.prototype.draw = function (ctx) {\n    const x = this.pos[0];\n    const y = this.pos[1];\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(x, y, this.radius, 0, 2*Math.PI);\n    ctx.strokeStyle = this.color;\n    ctx.stroke();\n\n    ctx.fill();\n};\n\nMovingObject.prototype.move = function () {\n    let newPos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];\n    this.pos = this.game.wrap(newPos);\n};\n\nMovingObject.prototype.isCollidedWith = function (otherObject) {\n    let distanceCenter = Math.sqrt(Math.pow(this.pos[0] - otherObject.pos[0], 2)) \n    + Math.sqrt(Math.pow(this.pos[1] - otherObject.pos[1], 2));\n\n    return (distanceCenter < (this.radius + otherObject.radius))\n};\n\nMovingObject.prototype.collideWith = function(otherObject) {\n    // if (this instanceof Asteroid && otherObject instanceof Bullet) { \n    //     this.game.remove(otherObject);\n    //     this.game.remove(this);\n    // }\n};\n\nmodule.exports = MovingObject;\n\n// Define a property MovingObject.prototype.isWrappable <---- not needed PHASE 5\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\nconst DEFAULTS = {\n    RADIUS: 10,\n    COLOR: \"#7FFF00\",\n    VEL: [0, 0],\n};\n\nfunction Ship(options) {\n    let args = [options.pos, DEFAULTS.VEL, DEFAULTS.RADIUS, DEFAULTS.COLOR, options.game];\n    MovingObject.apply(this, args);\n};\n\nUtil.inherits(Ship, MovingObject);\n\nShip.prototype.relocate = function () {\n    this.pos = this.game.randomPosition();\n    this.vel = DEFAULTS.VEL;\n};\n\nShip.prototype.power = function(impulse) {\n  let x = this.vel[0] + impulse[0];\n  let y = this.vel[1] + impulse[1];\n  this.vel = [x, y];\n};\n\nShip.prototype.fireBullet = function () {\n    let vel = [this.vel[0] * 5, this.vel[1] * 5];\n    if (!( vel[0] === 0 && vel[1] === 0 )) { \n      const bullet = new Bullet({pos: this.pos, vel: vel, game: this.game});\n      this.game.add(bullet);\n    }\n};\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n    inherits(childClass, parentClass){\n        function Surrogate() {};\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    },\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n\n};\n\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });