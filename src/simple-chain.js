const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value = ' ') {
    this.chain.push(`( ${String(value)} )`)
    return this
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position > this.getLength() ||
      position < 1
    ) {
      this.chain.length = 0
      throw new Error(`You can't remove incorrect link!`)
    } else {
      this.chain = this.chain.filter((el, index) => index + 1 !== position)

      return this
    }
  },
  reverseChain() {
    this.chain = this.chain.reverse()
    return this
  },
  finishChain() {
    const finishChain = this.chain.join('~~')
    this.chain.length = 0
    return finishChain
  },
}

module.exports = {
  chainMaker,
}
