import { Game } from './game.js';

const canvas = document.getElementById('game-screen');
const ctx = canvas.getContext('2d');

const WIDTH = 800;
const HEIGHT = 500;

const game = new Game(WIDTH, HEIGHT);

let lastTime = 0;

function gameLoop(timeStamp) {
	let dt = timeStamp - lastTime;
	lastTime = timeStamp;

	ctx.clearRect(0, 0, WIDTH, HEIGHT);

	game.update(dt);
	game.draw(ctx);

	requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
