'use strict';
const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
	let mainStr = '',
		additionalStr = '';
	// const str = 'la';
	// const options = {
	// 	'repeatTimes':3,
	// 	'separator':'',
	// 	'addition':'',
	// 	'additionRepeatTimes':'',
	// 	'additionSeparator':'',
	// };
	if (options.separator === '' || options.separator === undefined) {
		options.separator = '+';
	}
	if (
		options.additionSeparator === '' ||
		options.additionSeparator === undefined
	) {
		options.additionSeparator = '|';
	}
	if (typeof str !== 'string') {
		str = String(str);
	}
	if (typeof options.addition !== 'string') {
		options.addition = String(options.addition);
	}
	if (options.repeatTimes === '' || options.repeatTimes === undefined) {
		options.repeatTimes = 1;
	}
	if (
		options.additionRepeatTimes === '' ||
		options.additionRepeatTimes === undefined
	) {
		options.additionRepeatTimes = 1;
	}
	for (let i = 0; i < options.additionRepeatTimes; i++) {
		additionalStr += `${options.addition}${options.additionSeparator}`;
	}
	additionalStr = additionalStr.substr(
		0,
		additionalStr.length - options.additionSeparator.length
	);
	for (let j = 0; j < options.repeatTimes; j++) {
		mainStr += `${str}${additionalStr}${options.separator}`;
	}
	mainStr = mainStr.substr(0, mainStr.length - options.separator.length);
	return mainStr;
};
