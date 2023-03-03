const magicNum = (3 * Math.sqrt(3)) / 2

function hexArea(sideLenth) {
  return magicNum * sideLenth**2
}

function hexSide(area) {
  return Math.sqrt(area / magicNum)
}

module.exports = {
  hexArea,
  hexSide,
}
