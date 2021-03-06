//
'use strict';
const { stackTraceLimit } = require('../extensions/custom-error');
const CustomError = require('../extensions/custom-error');
// const arr = [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5];
module.exports = function transform(arr) {
	if (!Array.isArray) {
		throw new Error('Error');
	}

	let massive = arr.slice(),
		index = 0,
		arrLen = massive.length;

	function isFirst() {
		return index === 0;
	}

	function isLast() {
		return index === arrLen;
	}

	function discardNext() {
		if (!isLast()) {
			massive.splice(index, 2, undefined, undefined);
			index += 2;
		} else {
			massive[index] = undefined;
			incrementIndex();
		}
	}

	function discardPrev() {
		if (!isFirst()) {
			massive.splice(index - 1, 2, undefined, undefined);
			index++;
		} else {
			massive[index] = undefined;
			incrementIndex();
		}
	}

	function doubleNext() {
		if (!isLast()) {
			massive[index] = massive[index + 1];
			incrementIndex();
		} else {
			massive[index] = undefined;
			incrementIndex();
		}
	}

	function doublePrev() {
		if (!isFirst()) {
			massive[index] = massive[index - 1];
			incrementIndex();
		} else {
			massive[index] = undefined;
			incrementIndex();
		}
	}

	function incrementIndex() {
		index++;
	}

	const methods = {
		'--discard-next': discardNext,
		'--discard-prev': discardPrev,
		'--double-next': doubleNext,
		'--double-prev': doublePrev,
	};

	while (index < arrLen) {
		const changeArr = methods[massive[index]] || incrementIndex;
		changeArr();
		arrLen = massive.length;
	}

	let mass = massive.filter((elem) => {
		return elem !== undefined;
	});
	return mass;
};
