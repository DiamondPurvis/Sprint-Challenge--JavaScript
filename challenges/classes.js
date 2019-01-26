// 1. Copy and paste your prototype in here and refactor into class syntax.
/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
// function CuboidMaker(properties) {
//     this.length = properties.length
//     this.width = properties.width
//     this.height = properties.height
//   };
class CuboidMaker {
    constructor(properties){
      this.length = properties.length
      this.width = properties.width
      this.height = properties.height
    }

  /* == Step 2: Volume Method ==
    Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
    
    Formula for cuboid volume: length * width * height
  */
//   CuboidMaker.prototype.volume = function() {
//     return this.length * this.width * this.height;
//   };
volume() {
    return this.length * this.width *this.height;
  }
  
// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.