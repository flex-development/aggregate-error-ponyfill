## [3.1.1](https://github.com/flex-development/aggregate-error-ponyfill/compare/3.1.0...3.1.1) (2023-03-12)


### :package: Build

* **cjs:** default export `module.exports.default` ([07016e5](https://github.com/flex-development/aggregate-error-ponyfill/commit/07016e53e7d72a6c63feaebc741b205339075613))
* **deps:** Bump es-abstract from 1.20.4 to 1.21.1 ([#33](https://github.com/flex-development/aggregate-error-ponyfill/issues/33)) ([80aeac9](https://github.com/flex-development/aggregate-error-ponyfill/commit/80aeac9b48db55140c0e88b3f31dd1daac54d8a3))
* **nvm:** set minimum node version to `>=14.21.3` ([8fb0b8c](https://github.com/flex-development/aggregate-error-ponyfill/commit/8fb0b8cff7fa866df6595a15c48a6bab0d170336))
* **ts:** remove `typesVersions` ([759a6ef](https://github.com/flex-development/aggregate-error-ponyfill/commit/759a6ef1065caf3277512f1506669b68e6d40b04))


### :robot: Continuous Integration

* [[@dependabot](https://github.com/dependabot)] configure private registry ([bb5d463](https://github.com/flex-development/aggregate-error-ponyfill/commit/bb5d463cc0854b8f3aa3ed0d9b8e3dfb2af4958f))
* **deps:** Bump actions/add-to-project from 0.4.0 to 0.4.1 ([#32](https://github.com/flex-development/aggregate-error-ponyfill/issues/32)) ([51071a3](https://github.com/flex-development/aggregate-error-ponyfill/commit/51071a359162813c0c8ece355275c0027144e0f6))
* **deps:** Bump actions/checkout from 3.1.0 to 3.2.0 ([#27](https://github.com/flex-development/aggregate-error-ponyfill/issues/27)) ([8481f70](https://github.com/flex-development/aggregate-error-ponyfill/commit/8481f7076d16cd11ac63fb470667ac90e8380dd5))
* **deps:** Bump actions/checkout from 3.2.0 to 3.3.0 ([#28](https://github.com/flex-development/aggregate-error-ponyfill/issues/28)) ([5f4ef20](https://github.com/flex-development/aggregate-error-ponyfill/commit/5f4ef20dc67fd2f16a93b15ccddbf964d21edce7))
* **deps:** Bump actions/github-script from 6.3.3 to 6.4.0 ([#31](https://github.com/flex-development/aggregate-error-ponyfill/issues/31)) ([ff6e130](https://github.com/flex-development/aggregate-error-ponyfill/commit/ff6e130383ed2cc21be554d7d280ddfd666ebf0f))
* **deps:** Bump actions/setup-node from 3.5.1 to 3.6.0 ([#29](https://github.com/flex-development/aggregate-error-ponyfill/issues/29)) ([629d386](https://github.com/flex-development/aggregate-error-ponyfill/commit/629d3862786ace0927bbc2c720a2d56135192021))
* **deps:** Bump dependabot/fetch-metadata from 1.3.5 to 1.3.6 ([#30](https://github.com/flex-development/aggregate-error-ponyfill/issues/30)) ([21549b6](https://github.com/flex-development/aggregate-error-ponyfill/commit/21549b66b6ad7df02c7ff613593604d0cbdbb778))
* **deps:** Bump dessant/lock-threads from 3.0.0 to 4.0.0 ([#26](https://github.com/flex-development/aggregate-error-ponyfill/issues/26)) ([2ee2e78](https://github.com/flex-development/aggregate-error-ponyfill/commit/2ee2e78a274ed6eaf84e4a74b0d3ddee7df8baef))
* **workflows:** [`add-to-project`] add items from repo admin account ([4f8e84a](https://github.com/flex-development/aggregate-error-ponyfill/commit/4f8e84afbcafbe12010a56d1450228ddb4c149b1))
* **workflows:** [`add-to-project`] run workflow when pr is synchronized ([74ae34c](https://github.com/flex-development/aggregate-error-ponyfill/commit/74ae34cf2e3e6d34db94907837f2a4abd03feb59))
* **workflows:** [`approve-pr`] refactor approval step conditional ([58ece42](https://github.com/flex-development/aggregate-error-ponyfill/commit/58ece4266c36a0ec2360f54bc744d9f56d0a9361))
* **workflows:** [`ci`] split `ci` job into multiple jobs ([9198259](https://github.com/flex-development/aggregate-error-ponyfill/commit/919825907918fcf30af8b174155fe1c6249a0985))
* **workflows:** [`ci`] upload coverage report to codecov ([ce6b89c](https://github.com/flex-development/aggregate-error-ponyfill/commit/ce6b89c2711828b7bb187f6f1774d36531182a6d))
* **workflows:** [`dependabot-auto`] sign lockfile fix commit ([990f02e](https://github.com/flex-development/aggregate-error-ponyfill/commit/990f02e709917d2afb037adbb8bee6f30a445b80))
* **workflows:** [`integrity`] update `pull_request` event activity types ([856a040](https://github.com/flex-development/aggregate-error-ponyfill/commit/856a0400a32819825eb0cabb17314c0f4025148f))
* **workflows:** add `auto-merge` ([5446aef](https://github.com/flex-development/aggregate-error-ponyfill/commit/5446aefa8f71ea20132b8cfa82c2824316f39f1d))
* **workflows:** add `infrastructure` ([56ea166](https://github.com/flex-development/aggregate-error-ponyfill/commit/56ea166c1b367856b78f299a40056a739d6ab26a))
* **workflows:** use environment files ([4e7f8e2](https://github.com/flex-development/aggregate-error-ponyfill/commit/4e7f8e23493882e7411148d1aa2c986d711116bc))


### :pencil: Documentation

* add "contributor covenant code of conduct" ([aed7f7d](https://github.com/flex-development/aggregate-error-ponyfill/commit/aed7f7dfba3b6c54c1d863e7498872f89f86bfae))
* interfaces ([f0a7eb1](https://github.com/flex-development/aggregate-error-ponyfill/commit/f0a7eb1607ec6593dd1ab6dd417a5eade3ce40aa))
* reformat "api" section ([240b915](https://github.com/flex-development/aggregate-error-ponyfill/commit/240b915d742d356863be781c8a03e7e9602349d9))


### :bug: Fixes

* **install:** [git] make `postinstall` script work with git install ([336906a](https://github.com/flex-development/aggregate-error-ponyfill/commit/336906ae3771a7d96f2383b2226a9ad7e77f168c))


### :house_with_garden: Housekeeping

* update project architecture ([0225225](https://github.com/flex-development/aggregate-error-ponyfill/commit/0225225a726c14e732d395d64e0c47234ac47026))
* **github:** add "package manager" dropdown to bug report template ([b7ae310](https://github.com/flex-development/aggregate-error-ponyfill/commit/b7ae3103a258f99a2ade84bbf65c27b8abfe76b0))
* **github:** add "typescript version" input to bug report template ([687cd86](https://github.com/flex-development/aggregate-error-ponyfill/commit/687cd86ac1708bd7d01f3e4fe9b50c634d343c0c))
* **github:** configure sponsor button ([5437bf9](https://github.com/flex-development/aggregate-error-ponyfill/commit/5437bf9d504696a0f2b1a789304b40662ed0b509))
* **github:** remove "tests" section from pull request template ([880e3b6](https://github.com/flex-development/aggregate-error-ponyfill/commit/880e3b6c5e3a8046885d7b023db6b46dcefebaa7))
* **tests:** codecov integration ([e7b0994](https://github.com/flex-development/aggregate-error-ponyfill/commit/e7b09942281224c8d2700d580bea60309eb8f89a))


### :white_check_mark: Testing

* **ts:** add type tests ([8a2b64f](https://github.com/flex-development/aggregate-error-ponyfill/commit/8a2b64f75e1a3e313867c5ed0998d3dd11ba28b5))

## [3.1.0](https://github.com/flex-development/aggregate-error-ponyfill/compare/3.0.0...3.1.0) (2022-11-23)


### :robot: Continuous Integration

* **deps:** Bump actions/add-to-project from 0.3.0 to 0.4.0 ([#24](https://github.com/flex-development/aggregate-error-ponyfill/issues/24)) ([3a4abcb](https://github.com/flex-development/aggregate-error-ponyfill/commit/3a4abcbb98a17a61be129a6d63bd66b42137239b))
* **deps:** Bump flex-development/dist-tag-action from 1.1.1 to 1.1.2 ([#23](https://github.com/flex-development/aggregate-error-ponyfill/issues/23)) ([8cb5c80](https://github.com/flex-development/aggregate-error-ponyfill/commit/8cb5c802032773a3dcdebf70b1cce227070f45bb))
* **deps:** bump hmarr/debug-action from 2.0.1 to 2.1.0 ([#15](https://github.com/flex-development/aggregate-error-ponyfill/issues/15)) ([34b87c2](https://github.com/flex-development/aggregate-error-ponyfill/commit/34b87c20cb358ea17466d8b9560886db36f89c71))


### :sparkles: Features

* **ponyfill:** `AggregateError.prototype.cause` support ([d321773](https://github.com/flex-development/aggregate-error-ponyfill/commit/d321773d166f27c7bbfee9a17cdb38211fe92a82))


### :house_with_garden: Housekeeping

* sync project template changes ([c5c99eb](https://github.com/flex-development/aggregate-error-ponyfill/commit/c5c99ebdf053653aa76a1f17dc74627f034d2748))

## [3.0.0](https://github.com/flex-development/aggregate-error-ponyfill/compare/2.0.1...3.0.0) (2022-11-22)


### ⚠ BREAKING CHANGES

* remove `native` module

### :package: Build

* require node `>=14.16` ([abc02cf](https://github.com/flex-development/aggregate-error-ponyfill/commit/abc02cfa8d62b213428b95f07520139304dcfdef))
* **deps:** bump es-abstract from 1.19.1 to 1.20.4 ([49d606f](https://github.com/flex-development/aggregate-error-ponyfill/commit/49d606fb2632f3eaea572d5050cd264ec0e9f67b))


### :robot: Continuous Integration

* **deps:** bump actions/checkout from 3.0.2 to 3.1.0 ([#14](https://github.com/flex-development/aggregate-error-ponyfill/issues/14)) ([ab7cde6](https://github.com/flex-development/aggregate-error-ponyfill/commit/ab7cde6ab78b520ecd4b7ba0c356c76aae4e919b))
* **deps:** bump actions/github-script from 6.3.0 to 6.3.3 ([#19](https://github.com/flex-development/aggregate-error-ponyfill/issues/19)) ([7342ac4](https://github.com/flex-development/aggregate-error-ponyfill/commit/7342ac4b5a875c8402226138f4864a1c1995a7ba))
* **deps:** bump actions/setup-node from 3.4.1 to 3.5.1 ([#18](https://github.com/flex-development/aggregate-error-ponyfill/issues/18)) ([8848b85](https://github.com/flex-development/aggregate-error-ponyfill/commit/8848b851f9b89d431a2c05ecc88f4a06286f4ed4))
* **deps:** Bump crazy-max/ghaction-import-gpg from 5.1.0 to 5.2.0 ([#20](https://github.com/flex-development/aggregate-error-ponyfill/issues/20)) ([c89d660](https://github.com/flex-development/aggregate-error-ponyfill/commit/c89d660810ef977bc93704afaccfb8b3d04c47bc))
* **deps:** Bump dependabot/fetch-metadata from 1.3.4 to 1.3.5 ([#21](https://github.com/flex-development/aggregate-error-ponyfill/issues/21)) ([5db5d52](https://github.com/flex-development/aggregate-error-ponyfill/commit/5db5d52eefd51b10f988db8da6849aed6076fbe0))
* **deps:** bump octokit/graphql-action from 2.2.22 to 2.2.23 ([#16](https://github.com/flex-development/aggregate-error-ponyfill/issues/16)) ([d5ef350](https://github.com/flex-development/aggregate-error-ponyfill/commit/d5ef350e16176ed8ca590cd63c14124e6eff7b4d))


### :house_with_garden: Housekeeping

* update project architecture ([9730408](https://github.com/flex-development/aggregate-error-ponyfill/commit/9730408cdcc8b65a576604ed131011bc0ed7dc7a))


### :zap: Refactors

* remove `native` module ([1bfa22a](https://github.com/flex-development/aggregate-error-ponyfill/commit/1bfa22aeed91ed263fe39258090b67ff981036e7))

## [2.0.1](https://github.com/flex-development/aggregate-error-ponyfill/compare/2.0.0...2.0.1) (2022-10-02)


### :package: Build

* **deps-dev:** bump @flex-development/mkbuild from 1.0.0-alpha.3 to 1.0.0-alpha.6 ([e8f11bb](https://github.com/flex-development/aggregate-error-ponyfill/commit/e8f11bb1325a656e660bfb7aa09bd084f3b52705))


### :robot: Continuous Integration

* **deps:** bump dependabot/fetch-metadata from 1.3.3 to 1.3.4 ([#11](https://github.com/flex-development/aggregate-error-ponyfill/issues/11)) ([9cf4fac](https://github.com/flex-development/aggregate-error-ponyfill/commit/9cf4fac3a0bd3f5ea0101f3a4125282e19b20f53))


### :bug: Fixes

* missing `default` exports ([#12](https://github.com/flex-development/aggregate-error-ponyfill/issues/12)) ([0f3239b](https://github.com/flex-development/aggregate-error-ponyfill/commit/0f3239b2fbbd14199800880058413d1567bb7716))


### :house_with_garden: Housekeeping

* **github:** add label `status:triaged` ([04fa1d3](https://github.com/flex-development/aggregate-error-ponyfill/commit/04fa1d34e4e67f8c2cfb56f6a86b20a937ee8cb3))

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
