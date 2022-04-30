const { NotImplementedError } = require('../extensions/index.js')

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  }

  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) {
    throw new Error('Invalid date!')
  }

  const month = date.getMonth()
  let season = ''

  if (month <= 4) {
    month <= 1 ? (season = 'winter') : (season = 'spring')
  } else {
    if (month <= 7) {
      season = 'summer'
    } else {
      month === 11 ? (season = 'winter') : (season = 'autumn')
    }
  }

  return season
}

module.exports = {
  getSeason,
}
