var test = require('tape')

var mat4ToDualQuat = require('../')

test('Identity matrix to dual quat', function (t) {
  var convertedQuat = mat4ToDualQuat(
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
  )

  t.deepEqual(convertedQuat, [0, 0, 0, 1, 0, 0, 0, 0])
  t.end()
})
