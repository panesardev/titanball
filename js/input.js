export class InputHandler {
	constructor(game, paddle) {
		document.addEventListener('keydown', (e) => {
			switch(e.key) {
				case 'ArrowRight': 
					paddle.moveRight();
					break;
				case 'ArrowLeft': 
					paddle.moveLeft();
					break;
				case 'Escape':
					game.togglePause();
					break;
				case 'Enter':
					game.init();
					break;
			}
		});

		document.addEventListener('keyup', (e) => {
			switch(e.key) {
				case 'ArrowRight': 
					if (paddle.speed > 0) paddle.stop();
					break;
				case 'ArrowLeft': 
					if (paddle.speed < 0) paddle.stop();
					break;
			}
		});
	}


}