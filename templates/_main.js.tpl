'use strict';

var gameWidth = window.innerWidth;
var gameHeight = window.innerHeight;

<% _.forEach(gameStates, function(gameState) { %>var <%= gameState.shortName %>State = require('./states/<%= gameState.shortName %>');
<% }); %>
var game = new Phaser.Game(<%= (gameHeight > gameWidth) ? gameHeight : gameWidth %>, <%= (gameHeight > gameWidth) ? gameWidth : gameHeight %>, Phaser.<%= phaserType %>, '<%= _.slugify(projectName) %>');

// Game States
<% _.forEach(gameStates, function(gameState) {  %>game.state.add('<%= gameState.shortName %>', <%= gameState.shortName %>State);
<% }); %>

game.state.start('boot');
