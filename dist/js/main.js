(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var gameWidth = window.innerWidth;
var gameHeight = window.innerHeight;

var bootState = require('./states/boot');
var highscoreState = require('./states/highscore');
var menuState = require('./states/menu');
var playState = require('./states/play');
var preloadState = require('./states/preload');

var game = new Phaser.Game(640, 480, Phaser.CANVAS, 'tappy-unicorn');

// Game States
game.state.add('boot', bootState);
game.state.add('highscore', highscoreState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('preload', preloadState);


game.state.start('boot');

},{"./states/boot":3,"./states/highscore":4,"./states/menu":5,"./states/play":6,"./states/preload":7}],2:[function(require,module,exports){
'use strict';

var Scoreboard = function(game) {

  var gameover;

  Phaser.Group.call(this, game);

  this.cloud1 = this.game.add.tileSprite(this.game.width/2,400,128,71,'cloud1');
  // gameover = this.create(this.game.width / 2, 100, 'gameover');
  // gameover.anchor.setTo(0.5, 0.5);

  // this.scoreboard = this.create(this.game.width / 2, 200, 'scoreboard');
  // this.scoreboard.anchor.setTo(0.5, 0.5);

  // this.scoreText = this.game.add.bitmapText(this.scoreboard.width, 180, 'flappyfont', '', 18);
  // this.add(this.scoreText);

  // this.bestText = this.game.add.bitmapText(this.scoreboard.width, 230, 'flappyfont', '', 18);
  // this.add(this.bestText);

  // // add our start button with a callback
  // this.startButton = this.game.add.button(this.game.width/2, 300, 'startButton', this.startClick, this);
  // this.startButton.anchor.setTo(0.5,0.5);

  // this.add(this.startButton);

  // this.y = this.game.height;
  // this.x = 0;

};

Scoreboard.prototype = Object.create(Phaser.Group.prototype);
Scoreboard.prototype.constructor = Scoreboard;

Scoreboard.prototype.show = function(score) {
//   var coin, bestScore;
//   this.scoreText.setText(score.toString());
//   if(!!localStorage) {
//     bestScore = localStorage.getItem('bestScore');
//     if(!bestScore || bestScore < score) {
//       bestScore = score;
//       localStorage.setItem('bestScore', bestScore);
//     }
//   } else {
//     bestScore = 'N/A';
//   }

//   this.bestText.setText(bestScore.toString());

//   if(score >= 10 && score < 20)
//   {
//     coin = this.game.add.sprite(-65 , 7, 'medals', 1);
//   } else if(score >= 20) {
//     coin = this.game.add.sprite(-65 , 7, 'medals', 0);
//   }

//   this.game.add.tween(this).to({y: 0}, 1000, Phaser.Easing.Bounce.Out, true);

//   if (coin) {

//     coin.anchor.setTo(0.5, 0.5);
//     this.scoreboard.addChild(coin);

//      // Emitters have a center point and a width/height, which extends from their center point to the left/right and up/down
//     var emitter = this.game.add.emitter(coin.x, coin.y, 400);
//     this.scoreboard.addChild(emitter);
//     emitter.width = coin.width;
//     emitter.height = coin.height;


//     //  This emitter will have a width of 800px, so a particle can emit from anywhere in the range emitter.x += emitter.width / 2
//     // emitter.width = 800;

//     emitter.makeParticles('particle');

//     // emitter.minParticleSpeed.set(0, 300);
//     // emitter.maxParticleSpeed.set(0, 600);

//     emitter.setRotation(-100, 100);
//     emitter.setXSpeed(0,0);
//     emitter.setYSpeed(0,0);
//     emitter.minParticleScale = 0.25;
//     emitter.maxParticleScale = 0.5;
//     emitter.setAll('body.allowGravity', false);

//     emitter.start(false, 1000, 1000);

//   }
};

Scoreboard.prototype.startClick = function() {
  this.game.state.start('play');
};





Scoreboard.prototype.update = function() {
  // write your prefab's specific update code here
};

module.exports = Scoreboard;

},{}],3:[function(require,module,exports){
'use strict';

function Boot() {
}

Boot.prototype = {
  preload: function() {
    this.load.image('preloader', 'assets/images/preloader.gif');
  },
  create: function() {
    this.game.input.maxPointers = 1;
    this.game.state.start('preload');
  }
};

module.exports = Boot;

},{}],4:[function(require,module,exports){

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{"../prefabs/scoreboard":2}],7:[function(require,module,exports){
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

},{}]},{},[1])