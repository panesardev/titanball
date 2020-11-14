export class Paddle {
	constructor(game) {
		this.image = document.getElementById('img-paddle');

		this.gameWidth = game.gameWidth;

		this.width = 100;
		this.height = 30;

		this.maxSpeed = 8;
		this.speed = 0;

		this.position = {
			x: game.gameWidth / 2 - this.width / 2,
			y: game.gameHeight - this.height - 10
		}

		this.game = game;
	}

	moveLeft() {
		this.speed = -this.maxSpeed;
	}

	moveRight() {
		this.speed = this.maxSpeed;
	}

	stop() {
		this.speed = 0;
	}

	draw(ctx) {
		ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
	}

	update(dt) {
		this.position.x += this.speed;
		
		if (this.position.x + this.width > this.gameWidth)
			this.position.x = this.gameWidth - this.width;

		if (this.position.x < 0) 
			this.position.x = 0;
	}
}
