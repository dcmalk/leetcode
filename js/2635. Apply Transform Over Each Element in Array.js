/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  const newArr = [];
  //arr.forEach((val, index) => newArr.push(fn(val, index)));
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i], i));
  }
  return newArr;
};

const arr = [1, 2, 3];
const fn = function plusI(n, i) {
  return n + i;
};
console.log(map(arr, fn));
