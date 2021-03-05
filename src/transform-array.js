// 
'use strict';
const {
	stackTraceLimit
} = require("../extensions/custom-error");
const CustomError = require("../extensions/custom-error");
const arr = [1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5];
let index = 0;
// module.exports = function transform(arr) {
if (!Array.isArray) {
	throw new Error('Error');
}
let massive = arr;
function discardNext() {
	massive[index] = undefined;
	massive[index + 1] = undefined;
}
const methods = {
	'--discard-next': discardNext,
	'--discard-prev': discardPrev,
	'--double-next': doubleNext,
	'--double-prev': doublePrev
};

while (index < arr.length) {
	const method = methods[arr[index]] || incrementIndex;
	method();
	index++;
}


// let massive = [];
// // let arrLen = massive.length;
// let index = 0;

// function checkElem(i) {
// 	return typeof (arr[i]) === Number;
// }

// function incrementIndex() {
// 	if (checkElem(index)) {
// 		massive.push(arr[index])
// 	}
// 	// index++;
// }

// function isTheLast() {
// 	return index === arr.length - 1;
// }

// function isFirst() {
// 	return index === 0;
// }

// // function removeCurrent() {
// // 	massive.splice(index, 1);
// // }

// function discardNext() {
// 	if (!isTheLast && checkElem(index)) {
// 		index += 2;
// 	}

// }

// function discardPrev() {
// 	if (!isFirst && checkElem(index)) {
// 		massive.pop();
// 	}

// 	// index++;
// }

// function doubleNext() {
// 	if (!isTheLast && checkElem(index)) {
// 		massive.push(arr[index + 1]);
// 	}
// 	// index++;
// }

// function doublePrev() {
// 	if (!isTheLast && checkElem(index)) {
// 		massive.push(arr[index - 1]);
// 		index--;
// 	}
// }

// const methods = {
// 	'--discard-next': discardNext,
// 	'--discard-prev': discardPrev,
// 	'--double-next': doubleNext,
// 	'--double-prev': doublePrev,
// };
// // перебираем элементы пока индекс меньше длины массива сравниваем с инструкциями в объекте

// //Возвращаем массив
// return massive;
// // }