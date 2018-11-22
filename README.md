# frontis

[![npm (scoped)](https://img.shields.io/npm/v/:scope/:package.svg)](https://github.com/litenkod/frontis)

Small gulp boilerplate for frontend projects

## Install
```
$ npm install @litenkod/frontis
```

## Usage

### console2
structure console.log
console.log('xx:' + xx);
```js
const {console2} = require("@litenkod/frontis");

//console.log with finess
console2(array, object, var, const, let, etc);

console2();
//=> Uncaught TypeError: console2 wants something!
```

