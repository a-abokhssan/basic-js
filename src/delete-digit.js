const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const strOfN = String(n)
  let result = 0

  for (let i = 0; i < String(n).length; i++) {
    let str = strOfN.slice(0, i) + strOfN.slice(i + 1)
    if (+str > result) {
      result = +str
    }
  }
  return result
}

module.exports = {
  deleteDigit,
}
