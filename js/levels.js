import { Brick } from './brick.js';

export function buildLevel(game, level) {
	let bricks = [];

	level.forEach((row, rowIndex) => {
		row.forEach((brick, brickIndex) => {
			if (brick == 1) {
				let position = { x: 80 * brickIndex, y: 50 * rowIndex };

				bricks.push(new Brick(game, position));
			}
		});
	});
	return bricks;
}

// 1 means brick, 0 means empty space
export const level1 = [
	[1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
	// [1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
	// [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	// [0, 0, 1, 1, 0, 0, 1, 0, 1, 0]
];

export const level2 = [
	[1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
	[1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[0, 0, 1, 1, 0, 0, 1, 0, 1, 0]
];