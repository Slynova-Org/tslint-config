'use strict'

module.exports = {
  // See https://palantir.github.io/tslint/rules/cyclomatic-complexity/
  'cyclomatic-complexity': false,

  // See https://palantir.github.io/tslint/rules/deprecation/
  'deprecation': true,

  // See https://palantir.github.io/tslint/rules/eofline/
  'eofline': true,

  // See https://palantir.github.io/tslint/rules/indent/
  'indent': [true, 'spaces', 2],

  // See https://palantir.github.io/tslint/rules/linebreak-style/
  'linebreak-style': [true, 'LF'],

  // See https://palantir.github.io/tslint/rules/max-classes-per-file/
  'max-classes-per-file': [true, 1],

  // See https://palantir.github.io/tslint/rules/max-file-line-count/
  'max-file-line-count': false,

  // See https://palantir.github.io/tslint/rules/no-default-export/
  'no-default-export': false,

  // See https://palantir.github.io/tslint/rules/no-duplicate-imports/
  'no-duplicate-imports': true,

  // See https://palantir.github.io/tslint/rules/no-mergeable-namespace/
  'no-mergeable-namespace': true,

  // See https://palantir.github.io/tslint/rules/no-require-imports/
  'no-require-imports': true,

  // See https://palantir.github.io/tslint/rules/object-literal-sort-keys/
  'object-literal-sort-keys': false,

  // See https://palantir.github.io/tslint/rules/prefer-const/
  'prefer-const': true,

  // See https://palantir.github.io/tslint/rules/prefer-readonly/
  'prefer-readonly': true,

  // See https://palantir.github.io/tslint/rules/trailing-comma/
  'trailing-comma': {
    options: {
      multiline: 'always',
      singleline: 'never',
    },
  },
}
