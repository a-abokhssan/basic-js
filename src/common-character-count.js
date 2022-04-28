const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s1Chars = s1
    .split('')
    .reduce(
      (acc, char) =>
        acc[char] ? { ...acc, [char]: acc[char] + 1 } : { ...acc, [char]: 1 },
      {}
    )
  let s2Chars = s2
    .split('')
    .reduce(
      (acc, char) =>
        acc[char] ? { ...acc, [char]: acc[char] + 1 } : { ...acc, [char]: 1 },
      {}
    )

  let result = 0

  for (let char in s1Chars) {
    if (s2Chars[char]) {
      result += Math.min(s1Chars[char], s2Chars[char])
    }
  }

  return result
}

module.exports = {
  getCommonCharacterCount,
}
