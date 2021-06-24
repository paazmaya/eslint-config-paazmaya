# Version history for eslint-config-paazmaya

This changelog covers the version history and possible upcoming changes.
It follows the guidance from https://keepachangelog.com/en/1.0.0/.

## Unreleased
- Move testing with Node.js version 14 to GitHub Actions, away from Travis CI, since Travis has now stricter limitations on usage. Travis in now used to test only with Node.js version 16.
- Minimum supported Node.js version lifted from `10.13.0` to `14.15.0`

## `v7.2.0` (2021-01-28)
- Get new rules up to ESLint `v7.18.0`, total of two new rules

## `v7.1.0` (2020-10-16)
- Get new rules up to ESLint `v7.11.0`, total of three new rules
- Run tests also against Node.js version 14. Now versions 10, 12, and 14 of Node.js are covered at Travis CI

## `v7.0.0` (2020-05-15)
- Get new rules up to ESLint `v7.0.0`, total of 11 new rules
- Dropped support for Node.js version 8, since ESLint did that too

## `v6.1.0` (2019-09-13)
- Get new rules up to ESLint `v6.3.0`, total of one new rule and one new configuration option

## `v6.0.0` (2019-07-03)
- ESLint [`v6.0.0` has been released](https://eslint.org/blog/2019/06/eslint-v6.0.0-released) and it is now the minimum version requirement

## `v5.3.0` (2019-05-07)
- Get new rules up to ESLint `v5.16.0`, total of one new rule
- Changed [`prefer-destructuring`](https://eslint.org/docs/rules/prefer-destructuring) configuration from `off` to `warn`

## `v5.2.0` (2019-01-26)
- Remove `jsdoc` related rules, as per [deprecation in ESLint](https://eslint.org/blog/2018/11/jsdoc-end-of-life)
- Get new rules up to ESLint `v5.12.0`, total of one new rule

## `v5.1.0` (2018-11-08)
- Require [`arrow-parens`](https://eslint.org/docs/rules/arrow-parens) to be used always, due to consistency
- Get new rules up to ESLint `v5.8.0`, total of zero new rules

## `v5.0.0` (2018-08-15)
- Paired with [ESLint `v5.0.0`](https://eslint.org/blog/2018/06/eslint-v5.0.0-released). Added its three new rules
- Get new rules up to ESLint `v5.3.0`, total of four new rules

## `v4.3.0` (2017-12-11)
- Get new rules up to ESLint `v4.13.0`, total of one new rule

## `v4.2.0` (2017-10-17)
- Get new rules up to ESLint `v4.9.0`, total of three new rules

## `v4.1.0` (2017-07-10)
- Get new rules up to ESLint `v4.2.0`, total of one new rule
- Changed `capitalized-comments` to `off` as it is violated often on purpose

## `v4.0.0` (2017-06-12)
- Paired with [ESLint `v4.0.0`](http://eslint.org/blog/2017/06/eslint-v4.0.0-released). Added its seven new rules

## `v3.2.0` (2017-03-09)
- Now there is ESLint `v3.17.1` already out. Added nine new rules

## `v3.1.0` (2016-11-12)
- Now there is ESLint `v3.10.2` already out. Updated all rules since previous release, namely three new rules

## `v3.0.0` (2016-09-14)
- Adding rules in use that are available in and up to [ESLint `v3.5.0`](http://eslint.org/blog/2016/09/eslint-v3.5.0-released), hence that is the minimum supported version

## `v2.3.1` (2016-07-22)
- Removed ESLint from being a peer dependency as it prevents using with `grunt-eslint` or similar

## `v2.3.0` (2016-07-10)
- Had to change `object-curly-newline` configuration to allow more variation

## `v2.2.0` (2016-07-05)
- Updated to include rules introduced since 2.10, but before 3.0
- Update ESLint peer dependency to be at least `v2.12.0` and less than `v4.0.0`

## `v2.1.0` (2016-05-14)
- [ESLint 2.10.0 was released](http://eslint.org/blog/2016/05/eslint-v2.10.0-released) and its new rule taken in use
- Marked ESLint as a peer dependency

## `v2.0.0` (2016-05-13)
- Removed `babel-eslint` parser since most of the projects needs to run directly on Node.js `v4.2.0` (LTS)
- Start testing against itself and automate via Travis CI

## `v1.0.1` (2016-05-02)
- [`babel-eslint`](https://github.com/babel/babel-eslint) was marked as parser but was not a dependency

## `v1.0.0` (2016-05-02)
- Initial rule set taken from [`tarita`](https://github.com/paazmaya/tarita)
