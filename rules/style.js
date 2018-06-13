'use strict'

module.exports = {
  // See https://palantir.github.io/tslint/rules/align/
  'align': {
    options: [
      'parameters',
      'statements',
    ],
  },

  // See https://palantir.github.io/tslint/rules/array-type/
  'array-type': [true, 'array-simple'],

  // See https://palantir.github.io/tslint/rules/arrow-parens/
  'arrow-parens': true,

  // See https://palantir.github.io/tslint/rules/arrow-return-shorthand/
  'arrow-return-shorthand': true,

  // See https://palantir.github.io/tslint/rules/binary-expression-operand-order/
  'binary-expression-operand-order': true,

  // See https://palantir.github.io/tslint/rules/callable-types/
  'callable-types': true,

  // See https://palantir.github.io/tslint/rules/class-name/
  'class-name': true,

  // See https://palantir.github.io/tslint/rules/comment-format/
  'comment-format': [true, 'check-space']

  // See https://palantir.github.io/tslint/rules/completed-docs/
  'completed-docs': false,

  // See https://palantir.github.io/tslint/rules/encoding/
  'encoding': true,

  // See https://palantir.github.io/tslint/rules/import-spacing/
  'import-spacing': true,

  // See https://palantir.github.io/tslint/rules/interface-name/
  'interface-name': [true, 'always-prefix'],

  // See https://palantir.github.io/tslint/rules/interface-over-type-literal/
  'interface-over-type-literal': true,

  // See https://palantir.github.io/tslint/rules/jsdoc-format/
  'jsdoc-format': true,

  // See https://palantir.github.io/tslint/rules/match-default-export-name/
  'match-default-export-name': true,

  // See https://palantir.github.io/tslint/rules/newline-before-return/
  'newline-before-return': true,

  // See https://palantir.github.io/tslint/rules/newline-per-chained-call/
  'newline-per-chained-call': false,

  // See https://palantir.github.io/tslint/rules/new-parens/
  'new-parens': true,

  // See https://palantir.github.io/tslint/rules/no-angle-bracket-type-assertion/
  'no-angle-bracket-type-assertion': true,

  // See https://palantir.github.io/tslint/rules/no-boolean-literal-compare/
  'no-boolean-literal-compare': true,

  // See https://palantir.github.io/tslint/rules/no-consecutive-blank-lines/
  'no-consecutive-blank-lines': true,

  // See https://palantir.github.io/tslint/rules/no-irregular-whitespace/
  'no-irregular-whitespace': true,

  // See https://palantir.github.io/tslint/rules/no-parameter-properties/
  'no-parameter-properties': true,

  // See https://palantir.github.io/tslint/rules/no-redundant-jsdoc/
  'no-redundant-jsdoc': true,

  // See https://palantir.github.io/tslint/rules/no-reference-import/
  'no-reference-import': true,

  // See https://palantir.github.io/tslint/rules/no-trailing-whitespace/
  'no-trailing-whitespace': true,

  // See https://palantir.github.io/tslint/rules/no-unnecessary-initializer/
  'no-unnecessary-initializer': true,

  // See https://palantir.github.io/tslint/rules/object-literal-key-quotes/
  'object-literal-key-quotes': [true, 'as-needed'],

  // See https://palantir.github.io/tslint/rules/object-literal-shorthand/
  'object-literal-shorthand': true,

  // See https://palantir.github.io/tslint/rules/one-line/
  'one-line': {
    options: [
      'check-catch',
      'check-else',
      'check-finally',
      'check-open-brace',
      'check-whitespace',
    ],
  },

  // See https://palantir.github.io/tslint/rules/one-variable-per-declaration/
  'one-variable-per-declaration': true,

  // See https://palantir.github.io/tslint/rules/ordered-imports/
  'ordered-imports': {
    options: {
      'import-sources-order': 'case-insensitive',
      'module-source-path': 'full',
      'named-imports-order': 'case-insensitive',
    },
  },

  // See https://palantir.github.io/tslint/rules/prefer-function-over-method/
  'prefer-function-over-method': false,

  // See https://palantir.github.io/tslint/rules/prefer-method-signature/
  'prefer-method-signature': true,

  // See https://palantir.github.io/tslint/rules/prefer-switch/
  'prefer-switch': false,

  // See https://palantir.github.io/tslint/rules/prefer-template/
  'prefer-template': true,

  // See https://palantir.github.io/tslint/rules/prefer-while/
  'prefer-while': true,

  // See https://palantir.github.io/tslint/rules/quotemark/
  'quotemark': [true, 'single', 'jsx-double', 'avoid-escape'],

  // See https://palantir.github.io/tslint/rules/return-undefined/
  'return-undefined': true,

  // See https://palantir.github.io/tslint/rules/semicolon/
  'semicolon': [true, 'never'],

  // See https://palantir.github.io/tslint/rules/space-before-function-paren/
  'space-before-function-paren': [true, 'always'],

  // See https://palantir.github.io/tslint/rules/variable-name/
  'variable-name': {
    options: [
      'ban-keywords',
      'check-format',
      'allow-pascal-case',
    ],
  },

  // See https://palantir.github.io/tslint/rules/whitespace/
  'whitespace': {
    options: [
      'check-branch',
      'check-decl',
      'check-operator',
      'check-separator',
      'check-type',
      'check-typecast',
    ],
  },
}
