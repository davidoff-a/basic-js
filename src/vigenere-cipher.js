const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direction) {
    this.direction = direction;
    this.letters = {
      A: 0,
      B: 1,
      C: 2,
      D: 3,
      E: 4,
      F: 5,
      G: 6,
      H: 7,
      I: 8,
      J: 9,
      K: 10,
      L: 11,
      M: 12,
      N: 13,
      O: 14,
      P: 15,
      Q: 16,
      R: 17,
      S: 18,
      T: 19,
      U: 20,
      V: 21,
      W: 22,
      X: 23,
      Y: 24,
      Z: 25,
    };
  }
  encrypt(message, key) {

    let messageEncrypted = '';
    const keyCrypt = this.getCryptKey(message, key);

    messageEncrypted = message
      .toUpperCase()
      .split('')
      .map((item, i) => {
        if (this.letters[item] !== undefined) {
          let index = (this.letters[item] + this.letters[keyCrypt[i]]) % 26;
          return Object.keys(this.letters)[index];
        } else {
          return item;
        }
      })
      .join('');
    return (this.direction === false) ? messageEncrypted.split('').reverse().join('') : messageEncrypted;
  }
  decrypt(message, key) {

    const keyCrypt = this.getCryptKey(message, key);
    
    let messageEncrypted = '';

    messageEncrypted = message
      .toUpperCase()
      .split('')
      .map((item, i) => {
        if (this.letters[item] !== undefined) {
          let index = (this.letters[item] - this.letters[keyCrypt[i]] + 26) % 26;
          return Object.keys(this.letters)[index];
        } else {
          return item;
        }
      })
      .join('');
    return (this.direction === false) ? messageEncrypted.split('').reverse().join('') : messageEncrypted;
  }

  getCryptKey(message, key) {
    let count = 0;
    message = message.toUpperCase();
    key = key.repeat(Math.ceil(message.length / key.length)).toUpperCase();

    return [...message].reduce((acc, letter) => {
      const suffix = (this.letters[letter] !== undefined) ?
        key[count++] :
        letter;

      return acc += suffix;
    }, '');

  }
}


module.exports = VigenereCipheringMachine;