'use strict';

var Scoreboard = require('../prefabs/scoreboard');

function Play() {}

Play.prototype = {
  create: function() {
    var gameWidth = this.game.width;
    var gameHeight = this.game.height;

    this.cloud1 = this.game.add.tileSprite(gameWidth/4,50, 128,71,'cloud1');
    this.cloud2 = this.game.add.tileSprite(gameWidth/1.5,gameHeight/3, 128,71,'cloud2');

    this.ground = this.game.add.tileSprite(0,gameHeight - 100, gameWidth,63,'ground_b');
    this.ground.autoScroll(-30,0);
    this.ground_c = this.game.add.tileSprite(0,gameHeight - 40, gameWidth,40,'ground_c');
    this.ground_c.autoScroll(-200,0);

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.unicorn = this.add.sprite(gameWidth / 3,gameHeight / 2,'unicorn');
    this.unicorn.scale.setTo(1.2,1.2);
    this.unicorn.anchor.setTo(.5,.5);
    this.unicorn.scale.x *= -1;

    this.game.physics.arcade.enable(this.unicorn);

    this.unicorn.body.gravity.y = 0;
    // this.unicorn.animations.add('flap');
    // this.unicorn.animations.play('flap', 11, true);

    this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    this.spaceKey.onDown.add(this.jump, this);

    this.game.input.onTap.add(this.jump, this);

    this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);

    this.score = 0;
    this.scoreText = this.game.add.bitmapText(gameWidth/2, 50,'kenpixel_blocks', this.score.toString(), 42);
  },
  update: function() {
    if (this.unicorn.inWorld == false)
      this.deathHandler();
  },
  jump: function() {
    // Add a vertical velocity to the bird
    this.unicorn.body.velocity.y = -350;
  },
  deathHandler: function() {
    this.scoreboard = new Scoreboard(this.game);
    this.game.add.existing(this.scoreboard);
    this.scoreboard.show(this.score);
  }
};

module.exports = Play;
