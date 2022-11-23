# aggregate-error-ponyfill

[![npm](https://img.shields.io/npm/v/@flex-development/aggregate-error-ponyfill.svg)](https://npmjs.com/package/@flex-development/aggregate-error-ponyfill)
[![module type: cjs+esm](https://img.shields.io/badge/module%20type-cjs%2Besm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/aggregate-error-ponyfill.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits&logoColor=ffffff)](https://conventionalcommits.org/)
[![github actions](http://img.shields.io/badge/-github%20actions-2088ff?style=flat&logo=github-actions&logoColor=ffffff)](https://github.com/features/actions)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript&logoColor=ffffff)](https://typescriptlang.org/)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat&logo=vitest&logoColor=ffffff)](https://vitest.dev/)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat&logo=yarn&logoColor=ffffff)](https://yarnpkg.com/)

[`AggregateError`][1] [ponyfill][2].

## Contents

- [What is this?](#what-is-this)
- [When should I use this?](#when-should-i-use-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
- [Types](#types)
- [Contribute](#contribute)

## What is this?

This package is an ECMAScript Proposal spec-compliant [ponyfill][2] for [`AggregateError`][1].

## When should I use this?

Use this package when you want to throw `AggregateError` objects in unsupported environments (`< es2021`).

## Install

```sh
yarn add @flex-development/aggregate-error-ponyfill
```

From Git:

```sh
yarn add @flex-development/aggregate-error-ponyfill@flex-development/aggregate-error-ponyfill
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/features/protocols#git'>Git - Protocols | Yarn</a>
    &nbsp;for details on requesting a specific branch, commit, or tag.
  </small>
</blockquote>

## Use

```javascript
import AggregateError from '@flex-development/aggregate-error-ponyfill'

try {
  throw new AggregateError([new Error('some error')], 'oh no!')
} catch (e) {
  console.debug(e instanceof AggregateError) // true
  console.error(e.name)                      // 'AggregateError'
  console.error(e.message)                   // 'oh no!'
  console.error(e.errors)                    // [Error: 'some error']
}
```

## API

This package exports no identifiers. The default export is `AggregateError`.

### <h4>`new AggregateError<T, C>(errors: Iterable<T>, message?: string, options?: Options<C>)`</h4>

Wrap several errors in a single error so that multiple errors can be reported by an operation.

#### `errors`

An iterable of errors.

#### `message`

An optional human-readable description of the aggregate error.

#### `options`

An object that has the following properties:

##### `cause`

The specific cause of the aggregate error.

When catching and re-throwing an error with a more-specific or useful error message, this property can be used to pass
the original error.

## Types

This package is fully typed with [TypeScript][3].

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AggregateError
[2]: https://github.com/sindresorhus/ponyfill
[3]: https://www.typescriptlang.org
