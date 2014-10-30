'use strict';
function Preload() {
  this.asset = null;
  this.ready = false;
}

Preload.prototype = {
  preload: function() {
    this.asset = this.add.sprite(this.game.width/2,this.game.height/2, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);
    this.load.image('ground_b', 'assets/images/ground_b.png');
    this.load.image('ground_c', 'assets/images/ground_c.png');
    this.load.image('obstacle', 'assets/images/obstacle.png');
    this.load.image('cloud1', 'assets/images/cloud1.png');
    this.load.image('cloud2', 'assets/images/cloud2.png');
    this.load.image('startButton', 'assets/images/yellow_button_up.png');
    this.load.image('greyButton', 'assets/images/grey_button_up.png');
    this.load.image('title', 'assets/images/title.png');

    this.load.spritesheet('unicorn', 'assets/images/unicorn.png', 40,50,5);

    this.load.audio('jump', 'assets/audio/jump.wav');
    this.load.audio('background', 'assets/audio/background.mp3');

    this.load.bitmapFont('kenpixel', 'assets/fonts/kenpixel.png', 'assets/fonts/kenpixel.fnt');
    this.load.bitmapFont('kenpixel_blocks', 'assets/fonts/kenpixel_blocks.png', 'assets/fonts/kenpixel_blocks.fnt');

    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  },
  create: function() {
    this.asset.cropEnabled = false;
  },
  update: function() {
    if(!!this.ready) {
      this.game.state.start('menu');
    }
  },
  onLoadComplete: function() {
    this.ready = true;
  }
};

module.exports = Preload;
