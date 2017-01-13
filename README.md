mat4-to-dual-quat [![npm version](https://badge.fury.io/js/mat4-to-dual-quat.svg)](http://badge.fury.io/js/mat4-to-dual-quat) [![Build Status](https://travis-ci.org/chinedufn/mat4-to-dual-quat.svg?branch=master)](https://travis-ci.org/chinedufn/mat4-to-dual-quat)
===============

> Convert a 4x4 matrix into a dual quaternion. Useful for skeletal animation

## Background / Initial Motivation

This module was made to help with [dual quaternion linear blending](https://www.cs.utah.edu/~ladislav/kavan07skinning/kavan07skinning.pdf).

## To Install

```sh
$ npm install --save mat4-to-dual-quat
```

## Usage

```js
var mat4ToDualQuat = require('mat4-to-dual-quat')

var dualQuat = mat4ToDualQuat([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])

console.log(dualQuat)
// [0, 0, 0, 1, 0, 0, 0, 0]
// The first 4 elements are the rotation quaternion
// The last 4 elements are they translation quaternion
```

## API

### `mat4ToDualQuat(matrix)` -> `Array[8]`

#### matrix

*Requred*

Type: `Array[16]`

The 4x4 matrix that you would like to convert into a dual quaternion

## See Also

- [skeletal-animation-system](https://github.com/chinedufn/skeletal-animation-system)

## References

- http://cs.gmu.edu/~jmlien/teaching/cs451/uploads/Main/dual-quaternion.pdf
  - 4x4 matrix to dual quaternion formula is in Section 7.1.6

## License

MIT
