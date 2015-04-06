ig.module(
	'game.main'
)
.requires(
	'impact.game',
	'impact.font',
	'plugins.camera',				// UI components
	'game.levels.dungeon1'
)
.defines(function(){

MyGame = ig.Game.extend({

	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	player: {},

	init: function() {
		// Initialize your game here; bind keys etc.
		ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
		ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
		ig.input.bind(ig.KEY.UP_ARROW, 'up');
		ig.input.bind(ig.KEY.DOWN_ARROW, 'down');

		// Set up the camera. The camera's center is at a third of the screen
		// size, i.e. somewhat shift left and up. Damping is set to 3px.
		this.camera = new ig.Camera( ig.system.width/2, ig.system.height/2, 5 );

		// The camera's trap (the deadzone in which the player can move with the
		// camera staying fixed) is set to according to the screen size as well.
    	//this.camera.trap.size.x = ig.system.width/10;
    	//this.camera.trap.size.y = ig.system.height/3;

		// The lookahead always shifts the camera in walking position; you can
		// set it to 0 to disable.
    	//this.camera.lookAhead.x = ig.system.width/6;

		this.loadLevel(ig.global['Level' + 'Dungeon1']);
	},

	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		this.camera.follow(this.player);


	},
	loadLevel: function(data){

		this.parent(data);
		// Set camera's screen bounds and reposition the trap on the player
    	this.camera.max.x = this.collisionMap.pxWidth - ig.system.width;
    	this.camera.max.y = this.collisionMap.pxHeight - ig.system.height;
    	this.camera.set( this.player );
	},

	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();


		// Add your own drawing code here
		var x = ig.system.width/2,
			y = ig.system.height/2;

		this.font.draw( 'It Works!', x, y, ig.Font.ALIGN.CENTER );
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 320, 320, 1 );

});
