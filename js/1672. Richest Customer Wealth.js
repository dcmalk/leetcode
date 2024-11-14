/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let max = 0;
  for (let account of accounts) {
    let total = account.reduce((a, b) => a + b, 0);
    max = Math.max(max, total);
  }
  return max;
};

let accounts = [
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
];
console.log(maximumWealth(accounts));
