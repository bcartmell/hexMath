/*
 * 
 *        a___h.____b
 *        /|        \
 *       / |         \ 
 *    f /__|__g.__LD__\ c
 *      \SD|   |\     /
 *       \ | AP| \CR /
 *        \|___|__\_/
 *        e         d
 * 
 *    Side = a<->b, b<->c, etc...
 *    LD = Long Diagonal = f<->c
 *
 *    SD = Short Diagonal = f<->b
 *
 *    CR = Circumcircle radius = a|b|c|d|e|f<->G
 *    the radius of the circumference that contains all the 
 *    vertices of the regular hexagon.
 *
 *    AP = Apothem = H<->G
 *    AKA: Inradius
 *    the radius of the biggest circle contained entirely within the hexagon
 */

// Creates a regular Hexagon.  
// Will try to generalize this and create
// a RegularHexagon class later.
class Hexagon {
  constructor(params) {
    // size represents side length as well as circumcircle radius

    if (!params.size && !params.area) { 
      throw new Error('Size or Area is required to create a Hexagon')
    }

    const targetSize = params.size || this.calcSizeFromArea(params.area)

    this.size = targetSize;
  }

  get sideLenth() {
    return this.size
  }

  get cRadius() {
    return this.size
  }

  get area() {
    return this.apothem * this.perimeter / 2
  }

  get perimeter() {
    return this.size * 6
  }

  get longDiagonal() {
    return this.size * 2
  }

  get shortDiagonal() {
    return this.size * Math.sqrt(3)
  }

  get apothem() {
    return this.size * Math.sqrt(3) / 2
  }

  calcSizeFromArea(area) {
    return Math.sqrt(area / ((3 * Math.sqrt(3)) / 2))
  }

}

module.exports = { Hexagon }
