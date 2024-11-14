/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe(testVal) {
      if (val !== testVal) throw new Error('Not Equal');
      return true;
    },
    notToBe(testVal) {
      if (val === testVal) throw new Error('Equal');
      return true;
    },
  };
};

var runTest = function (func) {
  try {
    const result = func();
    return { value: result };
  } catch (error) {
    return { error: error.message };
  }
};

console.log(runTest(() => expect(5).toBe(5))); // true
console.log(runTest(() => expect(5).notToBe(5))); // throws "Equal"
