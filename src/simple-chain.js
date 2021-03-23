'use strict';

const CustomError = require("../extensions/custom-error");

class ChainMaker {
  constructor() {
    this.chain = [];
  }

  addLink(value) {
    this.chain.push(value);
    return this;
  }

  finishChain() {
    const chain = this.chain
      .map(v => `( ${v} )`)
      .join('~~');

    this.chain = [];
    return chain;
  }

  getLength() {
    return this.chain.length;
  }

  handleError() {
    this.chain = [];
    throw new Error();
  }

  isPositionCorrect(position) {
    return Number.isInteger(position) &&
      position > 0 &&
      position <= this.chain.length;
  }

  removeLink(position) {
    if (!this.isPositionCorrect(position)) {
      this.handleError();
    }

    this.chain.splice(position - 1, 1);
    return this;
  }

  reverseChain() {
    this.chain.reverse();
    return this;
  }
}

const chainMaker = new ChainMaker();

module.exports = chainMaker;