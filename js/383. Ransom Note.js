/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let letterHash = {};
  for (let m of magazine) {
    letterHash[m] = (letterHash[m] || 0) + 1;
  }

  for (let r of ransomNote) {
    if (!letterHash[r]) return false;
    letterHash[r]--;
  }

  return true;
};

let ransomNote = 'aa';
let magazine = 'baa';

console.log(canConstruct(ransomNote, magazine));
