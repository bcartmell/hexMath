const magicNum = (3 * Math.sqrt(3)) / 2

function hexArea(sideLenth) {
  return magicNum * sideLenth**2
}

function hexSide(area) {
  return Math.sqrt(area / magicNum)
}

// find the area of any regular convex polygon
function polygonArea(apothem, perimeter) {
  return (apothem * perimeter) / 2
}

module.exports = {
  hexArea,
  hexSide,
}
