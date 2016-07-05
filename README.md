# eslint-config-paazmaya

> Shared ESLint configuration between my projects since it is possible

[![Build Status](https://travis-ci.org/paazmaya/eslint-config-paazmaya.svg?branch=master)](https://travis-ci.org/paazmaya/eslint-config-paazmaya)

## Usage

Install via `npm`:

```sh
npm install --save-dev eslint-config-paazmaya
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

## Version history

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

Copyright (c) [Juga Paazmaya](http://paazmaya.fi) <paazmaya@yahoo.com>

Licensed under [the MIT license](./LICENSE).
