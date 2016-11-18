# eslint-plugin-immutable-js

[![npm version](https://badge.fury.io/js/eslint-plugin-immutable-js.svg)](https://www.npmjs.com/package/eslint-plugin-immutable-js) [![build status](https://api.travis-ci.org/dingbat/eslint-plugin-immutable-js.svg)](https://travis-ci.org/dingbat/eslint-plugin-immutable-js)

ESLint for Immutable.js

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-immutable-js`:

```
$ npm install eslint-plugin-immutable-js --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-immutable-js` globally.

## Usage

Add `immutable-js` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "immutable-js"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "immutable-js/no-get-get": 2
    }
}
```

## Supported Rules

* [no-get-get](docs/rules/no-get-get.md): Prefer `getIn` to chaining `get`s
