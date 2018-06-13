'use strict'

module.exports = {
  extends: [
    './rules/ts',
    './rules/functionality',
    './rules/maintainability',
    './rules/style',
  ].map(require.resolve),
}
