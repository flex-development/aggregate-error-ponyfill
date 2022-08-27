# aggregate-error-ponyfill

[![conventional commits](https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![npm](https://img.shields.io/npm/v/@flex-development/aggregate-error-ponyfill.svg)](https://npmjs.com/package/@flex-development/aggregate-error-ponyfill)
[![license](https://img.shields.io/github/license/flex-development/aggregate-error-ponyfill.svg)](LICENSE.md)
[![typescript](https://badgen.net/badge/-/typescript?color=2a72bc&icon=typescript&label)](https://typescriptlang.org)

> **ES Proposal spec-compliant [ponyfill][1] for [`AggregateError`][2]**.\
> The `AggregateError` object represents an error when several errors need to be
> wrapped in a single error. It is thrown when multiple errors need to be
> reported by an operation, for example by [`Promise.any()`][3], when all
> promises passed to it reject.

## Install

```sh
yarn add @flex-development/aggregate-error-ponyfill
```

### GitHub Package Registry

To install from the GitHub Package Registry, setup a `.npmrc` or `.yarnrc.yml`
file to authenticate with the registry. A [Personal Access Token with at least
the `read:packages` scope][4] is required.

#### `.npmrc`

```utf-8
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
@flex-development:registry=https://npm.pkg.github.com/
```

#### `.yarnrc.yml`

```yaml
npmRegistries:
  //npm.pkg.github.com:
    npmAlwaysAuth: true
    npmAuthToken: ${GITHUB_TOKEN}

npmScopes:
  flex-development:
    npmRegistryServer: https://npm.pkg.github.com
```

### Git

See [npm-install][5] or [Git - Protocols | Yarn][6] for details on requesting a
specific branch, commit, or tag.

#### NPM

```sh
npm i flex-development/aggregate-error-ponyfill
```

#### Yarn

```sh
yarn add @flex-development/aggregate-error-ponyfill@flex-development/aggregate-error-ponyfill
```

## Usage

```typescript
import AggregateError from '@flex-development/aggregate-error-ponyfill'

try {
  throw new AggregateError([new Error('err1'), new Error('err2')], 'oh no!')
} catch (e) {
  console.error(e.message) // 'oh no!'
  console.error(e.name) // 'AggregateError'
  console.error(e.errors) // [new Error('err1'), new Error('err2')]
}
```

### Native

Depending on your environment, you can use the native `AggregateError` instead
of the ponyfill:

```typescript
import AggregateError from '@flex-development/aggregate-error-ponyfill/native'
```

[1]: https://github.com/sindresorhus/ponyfill
[2]:
    https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AggregateError
[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise/any
[4]:
  https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries
[5]: https://docs.npmjs.com/cli/v8/commands/npm-install#description
[6]: https://yarnpkg.com/features/protocols#git
