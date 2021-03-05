//
'use strict';
// const {
//   stackTraceLimit
// } = require("../extensions/custom-error");
// const CustomError = require("../extensions/custom-error");
const arr = [1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5];
// module.exports = function transform(arr) {
if (!Array.isArray) {
	throw new Error('Error');
}
function isNum(elem) {
	return typeof elem === 'number';
}
// const methods = {
// 	'--discard-next': discardNext,
// 	'--discard-prev': discardPrev,
// 	'--double-next': doubleNext,
// 	'--double-prev': doublePrev,
// };

let massive;
massive = arr.map(function (item, index) {
	if (isNum(item)) {
		console.log(item);
	} else {
    console.log(index);
  }
});
// console.log(massive);

// }
