/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    let result = '';

    if (i % 3 === 0) result += 'Fizz';
    if (i % 5 === 0) result += 'Buzz';

    answer.push(result || i.toString());
  }
  return answer;
};

console.log(fizzBuzz(15));
