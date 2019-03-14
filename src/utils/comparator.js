/**
 *  Created By ChrisWen
 *  2019/03/14
 *  Comparator
 */
class Comparator {
  constructor(compareFunction) {
    this.compare = compareFunction || Comparator.defaultCompareFunction;
  }

  static defaultCompareFunction(a, b) {
    let result = 0;
    if (a === b) { result = 0; }
    if (a < b) { result = -1; }
    if (a > b) { result = 1; }
    return result;
  }

  equal(a, b) {
    const result = this.compare(a, b) === 0;
    return result;
  }

  lessThan(a, b) {
    const result = this.compare(a, b) === -1;
    return result;
  }

  greaterThan(a, b) {
    const result = this.compare(a, b) === 1;
    return result;
  }
}

module.exports = Comparator;
