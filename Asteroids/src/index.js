const MovingObject = require("./moving_object")
const AsteroidObject = require("./asteroid");
const GameView = require("./game_view");
const Game = require("./game");


document.addEventListener("DOMContentLoaded", function () {
    let currentCtx = document.getElementById("game-canvas");
    const ctx = currentCtx.getContext("2d");
    // const movingObject = new MovingObject([20, 20], [0], 10, "#00ff00",);
    // movingObject.draw(ctx);
    // const asteroidObject = new AsteroidObject({ pos: [500, 400]});
    // asteroidObject.draw(ctx);
    const game = new Game();
    const gameView = new GameView(game, ctx);
});