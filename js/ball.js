import { detectCollision } from './collision.js';

export class Ball {
	constructor(game) {
		this.image = document.getElementById('img-ball');
		
		this.gameWidth = game.gameWidth;
		this.gameHeight = game.gameHeight;
		
		this.game = game;
		
		this.speed = { x: 5, y: -5 };
		this.position = {	x: 200, y: 200 };
		
		this.size = 30;

		this.reset();
	}

	reset() {
		this.speed = { x: 5, y: -5 };
		this.position = {	x: 200, y: 200 };
	}

	draw(ctx) {
		ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
	}

	update(dt) {
		this.position.x += this.speed.x;
		this.position.y += this.speed.y;

		if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
			this.speed.x = -this.speed.x;
		}
		
		if (this.position.y < 0) {
			this.speed.y = -this.speed.y;
		}

		if (this.position.y + this.size > this.gameHeight) {
			this.game.lives--;
			this.reset();
		}

		if (detectCollision(this, this.game.paddle)) {
				this.speed.y = -this.speed.y;
				this.position.y = this.game.paddle.position.y - this.size;
		}
	}

}