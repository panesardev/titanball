import { InputHandler } from './input.js';
import { Paddle } from './paddle.js';
import { Ball } from './ball.js';		
import { buildLevel, level1, level2 } from './levels.js';

const GAME_STATE = {
	PAUSED: 0,
	RUNNING: 1,
	MENU: 2,
	GAMEOVER: 3,
	NEWLEVEL: 4
};

export class Game {
	constructor(gameWidth, gameHeight) {
		this.gameWidth = gameWidth;
		this.gameHeight = gameHeight;		
		this.gameState = GAME_STATE.MENU;
		this.gameElements = [];
		
		this.bricks = [];
		this.lives = 3;
		this.levels = [level1, level2];
		this.currentLevel = 0;

		this.paddle = new Paddle(this);
		this.ball = new Ball(this);
		new InputHandler(this, this.paddle);
	}

	init() {		
		if (this.gameState != GAME_STATE.MENU
			&& this.gameState != GAME_STATE.NEWLEVEL
		) return;

		this.bricks = buildLevel(this, this.levels[this.currentLevel]);
		this.gameElements = [this.paddle, this.ball];

		this.ball.reset();

		this.gameState = GAME_STATE.RUNNING;
	}

	update(dt) {
		if (this.lives === 0) {
			this.gameState = GAME_STATE.GAMEOVER;
		}

		if (this.gameState === GAME_STATE.PAUSED 
			|| this.gameState === GAME_STATE.MENU
			|| this.gameState === GAME_STATE.GAMEOVER
		) return;

		if (this.bricks.length === 0) {
			this.currentLevel++;
			this.gameState = GAME_STATE.NEWLEVEL;
			this.init();
		}

		[...this.gameElements, ...this.bricks].forEach(e => e.update(dt));

		this.bricks = this.bricks.filter(brick => !brick.gotHit);
	}

	draw(ctx) {
		[...this.gameElements, ...this.bricks].forEach(e => e.draw(ctx));

		if (this.gameState === GAME_STATE.PAUSED) {
			ctx.rect(0, 0, this.gameWidth, this.gameHeight);
			ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
			ctx.fill();

			ctx.font = '40px arial';
			ctx.fillStyle = 'white';
			ctx.textAlign = 'center';
			ctx.fillText('Paused', this.gameWidth / 2, this.gameHeight / 2);			
		}
		
		if (this.gameState === GAME_STATE.MENU) {
			ctx.rect(0, 0, this.gameWidth, this.gameHeight);
			ctx.fillStyle = 'black';
			ctx.fill();

			ctx.font = '40px arial';
			ctx.fillStyle = 'white';
			ctx.textAlign = 'center';
			ctx.fillText('Press ENTER to Start!', this.gameWidth / 2, this.gameHeight / 2);			
		}
		
		if (this.gameState === GAME_STATE.GAMEOVER) {
			ctx.rect(0, 0, this.gameWidth, this.gameHeight);
			ctx.fillStyle = 'black';
			ctx.fill();

			ctx.font = '40px arial';
			ctx.fillStyle = 'white';
			ctx.textAlign = 'center';
			ctx.fillText('GAME OVER!', this.gameWidth / 2, this.gameHeight / 2);			
		}
	}

	togglePause() {
		if (this.gameState == GAME_STATE.PAUSED) {
			this.gameState = GAME_STATE.RUNNING;
		} else {
			this.gameState = GAME_STATE.PAUSED;
		}
	}
}
