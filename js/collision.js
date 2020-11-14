export function detectCollision(ball, gameElement) {
	let bottomBall = ball.position.y + ball.size;
	let topBall = ball.position.y;
	let topElement = gameElement.position.y;
	let leftElement = gameElement.position.x;
	let rightElement = gameElement.position.x + gameElement.width;
	let bottomElement = gameElement.position.y + gameElement.height;

	return bottomBall >= topElement 
		&& topBall <= bottomElement
		&& ball.position.x >= leftElement 
		&& ball.position.x + ball.size <= rightElement;
}
