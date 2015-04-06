ig.module(
    'game.entities.player'
)
.requires(
    'impact.entity'
)
.defines(function() {

    EntityPlayer = ig.Entity.extend({

        size: { x: 24, y: 24 },
		maxVel: {x: 100, y: 100},
		friction: {x: 100, y: 100},
		step: {x:320,y:320},
		speed: 100,

        collides: ig.Entity.COLLIDES.PASSIVE,

        animSheet: new ig.AnimationSheet('media/player.png', 24, 24),

        init: function (x, y, settings) {

			ig.game.player = this;

            this.parent(x, y, settings);

            this.addAnim('init', 1, [0]);
        },

        update: function() {

            this.parent();

        	if (ig.input.pressed('left')) {
				//this.vel.x -= this.step.x;
				this.pos.x -= this.step.x;
			}
			else
			if (ig.input.pressed('right')) {
				//this.vel.x += this.step.x;
				this.pos.x += this.step.x;
			}
			else
			if (ig.input.pressed('up')) {
				//this.vel.y -= this.step.y;
				this.pos.y -= this.step.y;
			}
			else
			if (ig.input.pressed('down')) {
				//this.vel.y += this.step.y
				this.pos.y += this.step.y;
			}
        }
    });
});
