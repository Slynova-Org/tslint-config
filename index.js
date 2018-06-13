'use strict'

const rules = [
  './rules/ts',
  './rules/functionality',
  './rules/maintainability',
  './rules/style',
].map(require)

module.exports = Object.assign({}, ...rules)
