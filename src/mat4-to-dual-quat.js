var mat3FromMat4 = require('gl-mat3/from-mat4')
var quatMultiply = require('gl-quat/multiply')
var quatFromMat3 = require('gl-quat/fromMat3')
var quatScale = require('gl-quat/scale')

module.exports = convertMatrixToDualQuat

// Convert a 4x4 matrix4x4 into a dual quaternion
//  recommended reading: https://www.cs.utah.edu/~ladislav/kavan07skinning/kavan07skinning.pdf
function convertMatrixToDualQuat (matrix4x4) {
  var rotationmatrix4x4 = mat3FromMat4([], matrix4x4)
  var rotationQuat = quatFromMat3([], rotationmatrix4x4)

  var transVec = [matrix4x4[12], matrix4x4[13], matrix4x4[14], 0]
  var transQuat = quatScale([], quatMultiply([], transVec, rotationQuat), 0.5)

  return [
    rotationQuat[0],
    rotationQuat[1],
    rotationQuat[2],
    rotationQuat[3],
    transQuat[0],
    transQuat[1],
    transQuat[2],
    transQuat[3]
  ]
}
