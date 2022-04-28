const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = ''
  let counter = 1
  let previousLetter = str[0] || ''

  for (let i = 1; i < str.length; i++) {
    if (str[i] === previousLetter) {
      counter += 1
    } else {
      counter < 2
        ? (result += `${previousLetter}`)
        : (result += `${counter}${previousLetter}`)
      counter = 1
      previousLetter = str[i]
    }
  }
  counter < 2
    ? (result += `${previousLetter}`)
    : (result += `${counter}${previousLetter}`)
  return result
}

module.exports = {
  encodeLine,
}
