function GameView(game, ctx) {
  this.game = game;
  this.ship = this.game.ship;
  this.ctx = ctx;
  this.start();

}

GameView.prototype.start = function() {
  let game = this.game;
  let ctx = this.ctx;
  let that = this;
  that.bindKeyHandlers();
  setInterval( function() { 
    //game.moveObjects();
    game.step();
    game.draw(ctx);
  }, 20);
};

GameView.prototype.bindKeyHandlers = function() { 
  let that = this;
  key('w', function () { that.ship.power([0, -1]) });
  key('d', function() {that.ship.power([1, 0])});
  key('a', function () { that.ship.power([-1, 0]) });
  key('s', function () { that.ship.power([0, 1]) });
  key('space', function () { that.ship.fireBullet(); });
};

module.exports = GameView;