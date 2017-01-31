# eslint-config-paazmaya

> Shared ESLint configuration between my projects since it is possible

[![Build Status](https://travis-ci.org/paazmaya/eslint-config-paazmaya.svg?branch=master)](https://travis-ci.org/paazmaya/eslint-config-paazmaya)

## Usage

Install via `npm`, along with [ESLint](http://eslint.org/):

```sh
npm install --save-dev eslint eslint-config-paazmaya
```

Change the `.eslintrc.json` to contain the configuration for the shared configuration:

```json
{
  "extends": "paazmaya"
}
```

For further details see [ESLint documentation for Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs).

For example when [`babel-eslint` parser](https://github.com/babel/babel-eslint) would be needed:

```json
{
  "extends": "paazmaya",
  "parser": "babel-eslint"
}
```

## Contributing

["A Beginner's Guide to Open Source: The Best Advice for Making your First Contribution"](http://hf.heidilabs.com/blog/a-beginners-guide-to-open-source-making-your-first-contribution)

[Also there is a blog post about "45 Github Issues Dos and Don’ts"](https://davidwalsh.name/45-github-issues-dos-donts).

Linting is done with [ESLint](http://eslint.org) and can be executed with `npm test`.
There should be no errors appearing after any JavaScript file changes.

## Version history

* `v3.1.0` (2016-11-12)
  - Now there is ESLint `v3.10.2` already out. Updated all rules since previous release, namely three new rules
* `v3.0.0` (2016-09-14)
  - Adding rules in use that are available in and up to [ESLint `v3.5.0`](http://eslint.org/blog/2016/09/eslint-v3.5.0-released), hence that is the minimum supported version
* `v2.3.1` (2016-07-22)
  - Removed ESLint from being a peer dependency as it prevents using with `grunt-eslint` or similar
* `v2.3.0` (2016-07-10)
  - Had to change `object-curly-newline` configuration to allow more variation
* `v2.2.0` (2016-07-05)
  - Updated to include rules introduced since 2.10, but before 3.0
  - Update ESLint peer dependency to be at least `v2.12.0` and less that `v4.0.0`
* `v2.1.0` (2016-05-14)
  - [ESLint 2.10.0 was released](http://eslint.org/blog/2016/05/eslint-v2.10.0-released) and its new rule taken in use
  - Marked ESLint as a peer dependency
* `v2.0.0` (2016-05-13)
  - Removed `babel-eslint` parser since most of the projects needs to run directly on Node.js `v4.2.0` (LTS)
  - Start testing against itself and automate via Travis CI
* `v1.0.1` (2016-05-02)
  - [`babel-eslint`](https://github.com/babel/babel-eslint) was marked as parser but was not a dependency
* `v1.0.0` (2016-05-02)
  - Initial rule set taken from [`tarita`](https://github.com/paazmaya/tarita)

## License

Copyright (c) [Juga Paazmaya](https://paazmaya.fi) <paazmaya@yahoo.com>

Licensed under [the MIT license](./LICENSE).
