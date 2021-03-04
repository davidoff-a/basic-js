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
let massive = arr;
let arrLen = massive.length;
let index = 0;


function incrementIndex() {
	index++;
}

function isTheLast() {
	return index === massive.length - 1;
}

function isFirst() {
	return index === 0;
}

function removeCurrent() {
	massive.splice(index, 1);
}

function discardNext() {
  if (isTheLast()) {
    removeCurrent();
  } else {
    massive.splice(index, 2);
    arrLen = massive.length;
  }
}

function discardPrev() {
  if (isFirst()) {
    removeCurrent();
  } else {
    massive.splice(index - 1, 2);
    arrLen = massive.length;
		index--;
  }
}

function doubleNext() {
  if (isTheLast()) {
    removeCurrent();
  } else {
    massive[index] = massive[index + 1];
    arrLen = massive.length;
  }
}

function doublePrev() {
  if (isFirst()) {
    removeCurrent();
  } else {
    massive[index] = massive[index - 1];
    arrLen = massive.length;
  }
}

const methods = {
	'--discard-next': discardNext,
	'--discard-prev': discardPrev,
	'--double-next': doubleNext,
	'--double-prev': doublePrev,
};
// перебираем элементы пока индекс меньше длины массива сравниваем с инструкциями в объекте
while (index < arrLen) {
	// динамическая функция. если элемент равен названию метода, то назначается функция из объекта, иначе назначается функция инкремента индекса

	const method = methods[massive[index]] || incrementIndex;
	// вызываем метод
	method();
}
// console.log(massive);
//Возвращаем массив
return massive = massive.filter();




// }