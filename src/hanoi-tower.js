'use strict';
const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let answer={
    turns:'',
    seconds:''
  };
  answer.turns = Math.pow(2, disksNumber) - 1;
  
  // console.log(turnsSpeed / 3600);
  answer.seconds = Math.floor(answer.turns / (turnsSpeed / 3600));
  return answer;
};
