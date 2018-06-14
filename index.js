'use strict'

const rules = [
  './rules/ts',
  './rules/functionality',
  './rules/maintainability',
  './rules/style',
].map(require)

module.exports = {
  rules: Object.assign({}, ...rules)
}
