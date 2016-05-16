/**
 * eslint-config-paazmaya
 * https://github.com/paazmaya/eslint-config-paazmaya
 *
 * Shared ESLint configuration between my projects since it is possible
 *
 * Copyright (c) Juga Paazmaya <paazmaya@yahoo.com> (http://paazmaya.fi)
 * Licensed under the MIT license
 */
'use strict';

module.exports = {
  'rules': {
    'array-bracket-spacing': 2,
    'block-scoped-var': 0,
    'brace-style': [2, 'stroustrup'],
    'camelcase': 0,
    'comma-dangle': 2,
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],
    'comma-style': [2, 'last'],
    'complexity': [1, 12],
    'computed-property-spacing': [2, 'never'],
    'consistent-return': 2,
    'consistent-this': [2, '_self'],
    'curly': 2,
    'default-case': 2,
    'dot-notation': 1,
    'eol-last': 1,
    'eqeqeq': 2,
    'func-names': 1,
    'func-style': [2, 'expression'],
    'guard-for-in': 1,
    'handle-callback-err': 2,
    'indent': [2, 2],
    'key-spacing': 2,
    'keyword-spacing': 2,
    'max-depth': [1, 4],
    'max-len': [1, 120, 4],
    'max-nested-callbacks': [1, 2],
    'max-params': [1, 3],
    'max-statements': [1, 10],
    'new-cap': 2,
    'new-parens': 2,
    'no-alert': 2,
    'no-array-constructor': 2,
    'no-bitwise': 0,
    'no-caller': 2,
    'no-catch-shadow': 2,
    'no-cond-assign': 2,
    'no-console': 0,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-delete-var': 2,
    'no-div-regex': 0,
    'no-dupe-keys': 2,
    'no-else-return': 0,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-eq-null': 0,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': 2,
    'no-extra-semi': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 0,
    'no-func-assign': 2,
    'no-implied-eval': 2,
    'no-inline-comments': 0,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-lonely-if': 2,
    'no-loop-func': 2,
    'no-mixed-requires': [1, true],
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': 2,
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-nested-ternary': 1,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-path-concat': 2,
    'no-plusplus': 0,
    'no-process-env': 1,
    'no-process-exit': 1,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-restricted-modules': 0,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-self-compare': 0,
    'no-sequences': 2,
    'no-shadow': 1,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 1,
    'no-sparse-arrays': 2,
    'no-sync': 0,
    'no-ternary': 0,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-undefined': 1,
    'no-underscore-dangle': 0,
    'no-unreachable': 2,
    'no-unused-expressions': 1,
    'no-unused-vars': [2, 'local'],
    'no-use-before-define': 1,
    'no-void': 2,

    // Sometimes need to have FIXME or TODO
    'no-warning-comments': 1,

    'no-with': 2,
    'object-curly-spacing': [2, 'never'],
    'object-property-newline': 2,
    'one-var': 0,
    'operator-assignment': [2, 'always'],
    'prefer-const': 2,
    'quote-props': [1, 'as-needed'],
    'quotes': [2, 'single'],
    'radix': 2,
    'semi': 2,
    'semi-spacing': [2, {
      'before': false,
      'after': true
    }],
    'sort-vars': 0,
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': 1,
    'spaced-comment': [0, 'always'],
    'strict': 0,
    'use-isnan': 2,
    'valid-jsdoc': 1,
    'valid-typeof': 2,
    'vars-on-top': 0,
    'wrap-iife': [2, 'inside'],
    'wrap-regex': 0,
    'yoda': [2, 'never']
  },
  'env': {
    'node': true,
    'es6': true
  }
};
