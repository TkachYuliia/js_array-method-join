'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    if (this.length === 0) {
      return result;
    }

    for (let i = 0; i < this.length; i++) {
      const element = this[i];

      if (element === null || element === undefined) {
        result += '';
      } else {
        result += element;
      }

      if (i < this.length - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
