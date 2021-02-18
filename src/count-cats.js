'use strict';
module.exports = function countCats(matrix) {
	let countCats = 0,
		cat = '^^';
	matrix.map((elem) => {
		elem.map((item) => {
			if (item === cat) {
				countCats++;
			}
		});
	});
	return countCats;
};
