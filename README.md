# frontis

[![npm (scoped)](https://img.shields.io/npm/v/:scope/:package.svg)](https://github.com/litenkod/frontis)

Small fancy console.log to show typeof and element values, console.log('typeof:' + element);

## Install
```
$ npm install @litenkod/frontis
```

## Usage

### Require

```js
const frontis = require("@litenkod/frontis");
frontis.console2(xxx);

//or
const {console2} = require("@litenkod/frontis");
console2(xxx);
```

### How to use

```js
//console.log with finess
console2(string, array, object, boolean, undefined);

var test1 = 'test';
var test2 = ['test1', 'test2', 'test3'];
var test3 = {test1: '1 test', test2: false};
var test4 = true;

console2(test1);
// string
// test

console2(test2);
// [array]
// 0: test1
// 1: test2
// 2: test3

console2(test3);
// {object}
// key: test1, val: 1 test
// key: test2, val: false

console2(test4);
// boolean
// true

//ERROR
console2();
//=> console2 wants something to log!
```

