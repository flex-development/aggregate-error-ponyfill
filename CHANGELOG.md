## [2.0.0](https://github.com/flex-development/aggregate-error-ponyfill/compare/2.0.0-alpha.4...2.0.0) (2022-09-30)


### :package: Build

* require at least node.js 14 ([7ad7469](https://github.com/flex-development/aggregate-error-ponyfill/commit/7ad74691b797efcf5fa5c5f25c43da7be2617e56))
* set `typesVersions` ([745b3bf](https://github.com/flex-development/aggregate-error-ponyfill/commit/745b3bf5f21f8041519cf3d8cbca7bd2728737ba))
* use `mkbuild` to build project ([36ef910](https://github.com/flex-development/aggregate-error-ponyfill/commit/36ef9103042358ff8714c49e66dc49e2c167348e))


### :robot: Continuous Integration

* **deps:** bump actions/github-script from 6.2.0 to 6.3.0 ([#6](https://github.com/flex-development/aggregate-error-ponyfill/issues/6)) ([ad85177](https://github.com/flex-development/aggregate-error-ponyfill/commit/ad85177ab87e51afbe6148863d7e4fb759670518))
* **deps:** bump flex-development/dist-tag-action from 1.1.0 to 1.1.1 ([#8](https://github.com/flex-development/aggregate-error-ponyfill/issues/8)) ([c095a89](https://github.com/flex-development/aggregate-error-ponyfill/commit/c095a89a8aa7d0f5ab90e583c692b0ddf446d451))


### :pencil: Documentation

* built with ([bc1399f](https://github.com/flex-development/aggregate-error-ponyfill/commit/bc1399fe8436c93e11a96dd5e3762628610fde2d))


### :house_with_garden: Housekeeping

* cleanup ([5aea1d5](https://github.com/flex-development/aggregate-error-ponyfill/commit/5aea1d52da7cade5e9441f9e880dd9f68a5ad0e6))

## [2.0.0-alpha.4](https://github.com/flex-development/aggregate-error-ponyfill/compare/2.0.0-alpha.3...2.0.0-alpha.4) (2022-08-29)


### :package: Build

* include file extensions for all import specifiers ([a90400d](https://github.com/flex-development/aggregate-error-ponyfill/commit/a90400d4125c88fa2b78090112a9073a104e3f04))

## [2.0.0-alpha.3](https://github.com/flex-development/aggregate-error-ponyfill/compare/2.0.0-alpha.2...2.0.0-alpha.3) (2022-08-29)


### :package: Build

* fix tsconfig paths resolution in build files ([b753edf](https://github.com/flex-development/aggregate-error-ponyfill/commit/b753edfcc4c689b26bf12d99e2b073b6103c329c))
* include file extensions for bare specifiers ([b4de4d0](https://github.com/flex-development/aggregate-error-ponyfill/commit/b4de4d07ad2b512959445fa9fb169899bd8cbc49))
* **deps-dev:** patch graphql-config via yarn resolutions only ([9cbd061](https://github.com/flex-development/aggregate-error-ponyfill/commit/9cbd0613b25b20b7f3593ae6761ecc1641fb20a1))
* **exports:** remove `.d.ts` outputs ([86b791b](https://github.com/flex-development/aggregate-error-ponyfill/commit/86b791bc54e83c17b66646e68ca6c454e4e19ce8))


### :robot: Continuous Integration

* **workflows:** add typecheck step to ci workflow ([5373a67](https://github.com/flex-development/aggregate-error-ponyfill/commit/5373a67fa392f0f91254e339a15660c1e72cea00))


### :house_with_garden: Housekeeping

* check types during pre-commit workflow ([1111aaa](https://github.com/flex-development/aggregate-error-ponyfill/commit/1111aaab55653d8bb03542c0be51eef35776a147))
* fix `jsonc` file linting ([113ca04](https://github.com/flex-development/aggregate-error-ponyfill/commit/113ca04e086452c812f967a295f7a81d3f0ffc3d))
* remove `require.resolve` from eslint config ([3b72eb3](https://github.com/flex-development/aggregate-error-ponyfill/commit/3b72eb3800ada9a8bef94dea6789586992d28837))
* **pkg:** cleanup `test` command ([d6016b8](https://github.com/flex-development/aggregate-error-ponyfill/commit/d6016b8fc8526568244e26fc597fb2bab2be8c91))
* **vscode:** let eslint validate yaml files ([afcdd5f](https://github.com/flex-development/aggregate-error-ponyfill/commit/afcdd5fba84b6fa849f9ea62fe561f270c92d275))


### :zap: Refactors

* **ponyfill:** use es2021 abstract operations ([b08bb61](https://github.com/flex-development/aggregate-error-ponyfill/commit/b08bb61a0cceab8b9576eee6817697e967c9b491))

## [2.0.0-alpha.2](https://github.com/flex-development/aggregate-error-ponyfill/compare/2.0.0-alpha.1...2.0.0-alpha.2) (2022-08-27)


### :package: Build

* **pkg:** add `"type": "module"` ([9f53632](https://github.com/flex-development/aggregate-error-ponyfill/commit/9f53632a3c39f3bc218f37090522d4c16431b4f1))


### :house_with_garden: Housekeeping

* **pkg:** fix `package.json#author` ([29883e1](https://github.com/flex-development/aggregate-error-ponyfill/commit/29883e1ccd6fb78d83c08b62f111417286852adb))

## 2.0.0-alpha.1 (2022-08-27)

> **This project once lived in a monorepo as a subproject.\
> Most commits listed below are re-implementations of features and documentation
> that existed *before* the repo migration.**


### :robot: Continuous Integration

* add [@dependabot](https://github.com/dependabot) configuration ([d776443](https://github.com/flex-development/aggregate-error-ponyfill/commit/d776443ea4522694cdc101016176c5979fe848b7))
* **deps:** bump actions/github-script from 6.1.1 to 6.2.0 ([#1](https://github.com/flex-development/aggregate-error-ponyfill/issues/1)) ([8ae2cb4](https://github.com/flex-development/aggregate-error-ponyfill/commit/8ae2cb49e0580237a924f578779478275c156223))


### :pencil: Documentation

* **ponyfill:** usage ([0d264cf](https://github.com/flex-development/aggregate-error-ponyfill/commit/0d264cfc8f5cfcaee010d5fd094ff4ce0d69c368))
* **release:** add repo migration note to changelog ([183bde5](https://github.com/flex-development/aggregate-error-ponyfill/commit/183bde55b143d6d27802d9d0c4f88c3e7caa7243))


### :sparkles: Features

* **ponyfill:** add ponyfill ([373ce18](https://github.com/flex-development/aggregate-error-ponyfill/commit/373ce186bf2e97db0f842f5fcb3a07ca41e5875f))

## 1.0.0 (2021-11-04)

> **This project once lived in a monorepo as a subproject.\
> The commit listed below is from *before* the repo migration.**


### :hammer: Build

* **yarn:** add `aggregate-error-ponyfill` workspace ([4b6b915](https://github.com/flex-development/exceptions/commit/4b6b915f92ae12ad521409ceb4b031b2974eb745))
