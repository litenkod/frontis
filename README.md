# frontis

[![npm (scoped)](https://img.shields.io/npm/v/:scope/:package.svg)](https://github.com/litenkod/frontis)

Small fancy console.log to show typeof and elements.

## Install
```
$ npm install @litenkod/frontis
```

## Usage

### console2
structure console.log
console.log('typeof:' + element);
```js
const {console2} = require("@litenkod/frontis");

//console.log with finess
console2(string, array, object, boolean, undefined);

console2();
//=> Uncaught TypeError: console2 wants something to log!
```

