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
