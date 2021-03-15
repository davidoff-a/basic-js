'use strict';
const CustomError = require("../extensions/custom-error");

// const chainMaker = {
//   getLength() {
//     return chainMaker.chain.length;
//   },
//   addLink(value) {
//     if (value !== undefined && typeof value !== 'string') {
//       value = String(value);
//     }
//     chainMaker.chain.push(`( ${value} )`);
//   },
//   removeLink(position) {
//     chainMaker.chain.splice(position - 1, 1);
//   },
//   reverseChain() {
//     chainMaker.chain.reverse();
//   },
//   finishChain() {
//     return chainMaker.chain.join(`~~`);
//   },
//   chain: []
// };
// chainMaker.addLink(function () {}).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain();

class ChainMaker {
  chain = [];

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

  removeLink(position) {
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


