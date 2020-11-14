import { detectCollision } from './collision.js';

export class Brick {
	constructor(game, position) {
		this.image = document.getElementById('img-brick');
		this.game = game;		
		this.position = position;
		this.width = 80;
		this.height = 50;
		this.gotHit = false;
	}

	draw(ctx) {
		ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
	}

	update(dt) {
		if (detectCollision(this.game.ball, this)) {
			this.game.ball.speed.y = -this.game.ball.speed.y;
			this.gotHit = true;
		}
	}
}