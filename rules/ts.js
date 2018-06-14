'use strict'

module.exports = {
  // See https://palantir.github.io/tslint/rules/adjacent-overload-signatures/
  'adjacent-overload-signatures': true,

  // See https://palantir.github.io/tslint/rules/ban-types/
  'ban-types': {
    options: [
      ['Object', 'Avoid using the `Object` type. Did you mean `object`?'],
      ['Boolean', 'Avoid using the `Boolean` type. Did you mean `boolean`?'],
      ['Number', 'Avoid using the `Number` type. Did you mean `number`?'],
      ['String', 'Avoid using the `String` type. Did you mean `string`?'],
      ['Symbol', 'Avoid using the `Symbol` type. Did you mean `symbol`?'],
    ],
  },

  // See https://palantir.github.io/tslint/rules/member-access/
  'member-access': true,

  // See https://palantir.github.io/tslint/rules/member-ordering/
  'member-ordering': [
    true,
    {
      'alphabetize': true,
      'order': [
        'public-static-field',
        'protected-static-field',
        'private-static-field',
        'public-instance-field',
        'protected-instance-field',
        'private-instance-field',
        'public-constructor',
        'protected-constructor',
        'private-constructor',
        'public-static-method',
        'protected-static-method',
        'private-static-method',
        'public-instance-method',
        'protected-instance-method',
        'private-instance-method',
      ],
    },
  ],

  // See https://palantir.github.io/tslint/rules/no-any/
  'no-any': false,

  // See https://palantir.github.io/tslint/rules/no-empty-interface/
  'no-empty-interface': true,

  // See https://palantir.github.io/tslint/rules/no-import-side-effect/
  'no-import-side-effect': true,

  // See https://palantir.github.io/tslint/rules/no-inferrable-types/
  'no-inferrable-types': true,

  // See https://palantir.github.io/tslint/rules/no-internal-module/
  'no-internal-module': true,

  // See https://palantir.github.io/tslint/rules/no-magic-numbers/
  'no-magic-numbers': false,

  // See https://palantir.github.io/tslint/rules/no-namespace/
  'no-namespace': true,

  // See https://palantir.github.io/tslint/rules/no-non-null-assertion/
  'no-non-null-assertion': true,

  // See https://palantir.github.io/tslint/rules/no-parameter-reassignment/
  'no-parameter-reassignment': false,

  // See https://palantir.github.io/tslint/rules/no-reference/
  'no-reference': true,

  // See https://palantir.github.io/tslint/rules/no-unnecessary-type-assertion/
  'no-unnecessary-type-assertion': true,

  // See https://palantir.github.io/tslint/rules/no-var-requires/
  'no-var-requires': true,

  // See https://palantir.github.io/tslint/rules/only-arrow-functions/
  'only-arrow-functions': {
    options: [
      'allow-declarations',
      'allow-named-functions',
    ],
  },

  // See https://palantir.github.io/tslint/rules/prefer-for-of/
  'prefer-for-of': true,

  // See https://palantir.github.io/tslint/rules/promise-function-async/
  'promise-function-async': true,

  // See https://palantir.github.io/tslint/rules/typedef/
  'typedef': false,

  // See https://palantir.github.io/tslint/rules/typedef-whitespace/
  'typedef-whitespace': {
    options: [
      {
        'call-signature': 'nospace',
        'index-signature': 'nospace',
        'parameter': 'nospace',
        'property-declaration': 'nospace',
        'variable-declaration': 'nospace',
      }, {
        'call-signature': 'onespace',
        'index-signature': 'onespace',
        'parameter': 'onespace',
        'property-declaration': 'onespace',
        'variable-declaration': 'onespace',
      },
    ],
  },

  // See https://palantir.github.io/tslint/rules/unified-signatures/
  'unified-signatures': true,
}
