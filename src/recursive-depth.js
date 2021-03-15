const CustomError = require("../extensions/custom-error");

module.exports = class depthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    arr.map(item => {
      if (Array.isArray(item)) {
        const currentLevel = this.calculateDepth(item) + 1;
          depth = Math.max(depth, currentLevel);
      }
    });
    return depth;
  }
};