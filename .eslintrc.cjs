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
  root: true,
  extends: ['./.eslintrc.base.cjs'],
  overrides: [
    ...require('./.eslintrc.base.cjs').overrides,
    {
      files: ['src/index.ts'],
      rules: {
        /**
         * mkdist converts `exports.default` to `module.exports = _default`.
         *
         * `exports.default` statements are only output if `export default ...`
         * is used for default exports.
         *
         * this means that `export { default } from '...'` should **not** be
         * used where default exports should be supported, as with the package
         * entry point.
         *
         * @see https://github.com/unjs/mkdist/blob/v0.3.13/src/loaders/js.ts#L40
         */
        'unicorn/prefer-export-from': 0
      }
    }
  ]
}

module.exports = config
