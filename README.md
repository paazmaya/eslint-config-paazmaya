# eslint-config-paazmaya

> Shared ESLint configuration between my projects since it is possible

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

In case the `npm` version used is below 3.0, the parser `babel-eslint` needs to be installed separately, `npm install --save-dev babel-eslint`.

For further details see [ESLint documentation for Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs).

## Version history

* `v1.0.1` (2016-05-02)
    - [`babel-eslint`](https://github.com/babel/babel-eslint) was marked as parser but was not a dependency
* `v1.0.0` (2016-05-02)
    - Initial rule set taken from [`tarita`](https://github.com/paazmaya/tarita)

## License

Copyright (c) [Juga Paazmaya](http://paazmaya.fi) <paazmaya@yahoo.com>

Licensed under [the MIT license](./LICENSE).
