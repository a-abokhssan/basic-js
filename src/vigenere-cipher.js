const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(arg = true) {
    this.direct = arg
    this.alphabet = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ]
    this.matrix = new Array(26)
      .fill(this.alphabet)
      .map((alpha, index) => alpha.slice(index).concat(alpha.slice(0, index)))
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error(`Incorrect arguments!`)

    let keyOfMessageLength = key
      .repeat(Math.ceil(message.length / key.length) + 1)
      .toUpperCase()
    let arrayOfMessage = message.split('')

    const result = []

    for (let i = 0, k = 0; i < arrayOfMessage.length; i++) {
      let letterUp = arrayOfMessage[i].toUpperCase()

      if (!this.alphabet.includes(letterUp)) {
        result.push(letterUp)
        continue
      }

      let row = this.matrix[this.alphabet.indexOf(letterUp)]
      let newLetter = row[this.alphabet.indexOf(keyOfMessageLength[k])]
      k += 1

      result.push(newLetter)
    }

    return this.direct ? result.join('') : result.reverse().join('')
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error(`Incorrect arguments!`)
    let keyOfMessageLength = key
      .repeat(Math.ceil(message.length / key.length) + 1)
      .toUpperCase()
    let arrayOfMessage = message.split('')

    const result = []

    for (let i = 0, k = 0; i < arrayOfMessage.length; i++) {
      let letterUp = arrayOfMessage[i].toUpperCase()

      if (!this.alphabet.includes(letterUp)) {
        result.push(letterUp)
        continue
      }

      let row = this.matrix[this.alphabet.indexOf(keyOfMessageLength[k])]
      let oldLetter = this.alphabet[row.indexOf(letterUp)]
      k += 1

      result.push(oldLetter)
    }

    return this.direct ? result.join('') : result.reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine,
}
