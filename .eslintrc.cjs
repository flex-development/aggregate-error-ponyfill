/**
 * @file ESLint Configuration - Root
 * @module config/eslint
 * @see https://eslint.org/docs/user-guide/configuring
 */

/**
 * @type {import('eslint').Linter.Config}
 * @const config - ESLint configuration object
 */
const config = {
  extends: ['./.eslintrc.base.cjs'],
  overrides: [
    ...require('./.eslintrc.base.cjs').overrides,
    {
      files: ['src/ponyfill.ts'],
      rules: {
        '@typescript-eslint/class-literal-property-style': 0,
        '@typescript-eslint/prefer-as-const': 0
      }
    },
    {
      files: ['typings/es-abstract/**/*.ts'],
      rules: {
        'unicorn/filename-case': 0
      }
    }
  ],
  root: true
}

module.exports = config
