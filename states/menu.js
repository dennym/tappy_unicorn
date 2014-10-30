'use strict';
function Menu() {}

Menu.prototype = {
  preload: function() {

  },
  create: function() {
    var gameWidth = this.game.width;
    var gameHeight = this.game.height;

    this.game.stage.backgroundColor = '#d0f4f7';

    this.cloud1 = this.game.add.tileSprite(gameWidth/4,50, 128,71,'cloud1');
    this.cloud2 = this.game.add.tileSprite(gameWidth/1.5,gameHeight/3, 128,71,'cloud2');

    this.ground = this.game.add.tileSprite(0,gameHeight - 100, gameWidth,63,'ground_b');
    this.ground.autoScroll(-30,0);
    this.ground_c = this.game.add.tileSprite(0,gameHeight - 40, gameWidth,40,'ground_c');
    this.ground_c.autoScroll(-200,0);

    this.music = this.game.add.audio('background');
    this.music.play('',0,1,true);

    this.title = this.game.add.image(gameWidth/2, gameHeight/4, 'title');
    this.title.anchor.setTo(0.5,0.5);


    this.startButton = this.game.add.button(gameWidth/2, gameHeight - 220, 'startButton', this.startClick, this);
    this.startButton.anchor.setTo(0.5,0.5);
    this.startText = this.game.add.bitmapText(gameWidth/2, gameHeight - 220, 'kenpixel', 'Start Game', 16);
    this.startText.align = 'center';
    this.startText.x = gameWidth / 2 - this.startText.textWidth / 2;
    this.startText.y = gameHeight - 216 - this.startText.textHeight / 2;

    this.optionButton = this.game.add.button(gameWidth/2, gameHeight - 165, 'greyButton', this.startClick, this);
    this.optionButton.scale.setTo(1, 0.8);
    this.optionButton.anchor.setTo(0.5,0.5);
    this.optionText = this.game.add.bitmapText(gameWidth/2, gameHeight - 165, 'kenpixel', 'Options', 12);
    this.optionText.align = 'center';
    this.optionText.x = gameWidth / 2 - this.optionText.textWidth / 2;
    this.optionText.y = gameHeight - 162 - this.optionText.textHeight / 2;

    // this.creditButton = this.game.add.button(gameWidth/2, gameHeight - 115, 'greyButton', this.startClick, this);
    // this.creditButton.scale.setTo(1, 0.8);
    // this.creditButton.anchor.setTo(0.5,0.5);
    // this.creditText = this.game.add.bitmapText(gameWidth/2, gameHeight - 115, 'kenpixel', 'Credits', 12);
    // this.creditText.align = 'center';
    // this.creditText.x = gameWidth / 2 - this.creditText.textWidth / 2;
    // this.creditText.y = gameHeight - 112 - this.creditText.textHeight / 2;

    // this.unicorn = this.add.sprite(gameWidth / 2,500,'unicorn');
    // this.unicorn.scale.setTo(1.2,1.2);
    // this.unicorn.anchor.setTo(.5,.5);
    // this.unicorn.scale.x *= -1;

    // this.unicorn.animations.add('flap');
    // this.unicorn.animations.play('flap', 11, true);

    this.game.add.tween(this.title).to({y:115}, 350, Phaser.Easing.Linear.NONE, true, 0, 1000, true);

  },
  startClick: function() {
    this.game.state.start('play');
  }
};

module.exports = Menu;
