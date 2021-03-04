// 
'use strict';
const {
  stackTraceLimit
} = require("../extensions/custom-error");
const CustomError = require("../extensions/custom-error");
// const arr = [1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5];
module.exports = function transform(arr) {
if (!Array.isArray) {
  throw new Error('Error');
}
const massive = arr;
// объявляем объект с инструкциями поле - инструкция, значение - метод обработки
const methods = {
  '--discard-next': discardNext,
  '--discard-prev': discardPrev,
  '--double-next': doubleNext,
  '--double-prev': doublePrev
};
// объявляем общий индекс
let index = 0;
// перебираем элементы пока индекс меньше длины массива сравниваем с инструкциями в объекте 
while (index < massive.length) {
  // динамическая функция. если элемент равен названию метода, то назначается функция из объекта, иначе назначается функция инкремента индекса
  const method = methods[massive[index]] || incrementIndex;
  // вызываем метод
  method();
}
console.log(massive);
//Возвращаем массив
return massive;



function discardNext() {
  if (isTheLast()) {
    removeCurrent();
  } else {
    massive.splice(index, 2);
  }
}

function discardPrev() {
  if (isFirst()) {
    removeCurrent();
  } else {
    massive.splice(index - 1, 2);
  }
}

function doubleNext() {
  if (isTheLast()) {
    removeCurrent();
  } else {
    massive[index] = massive[index + 1];
  }
}

function doublePrev() {
  if (isFirst()) {
    removeCurrent();
  } else {
    massive[index] = massive[index - 1];
  }
}

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
}