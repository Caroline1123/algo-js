import { Rectangle } from './../../modules/canvas.js'
// Create a class named Rectangle with attributes topLeftXPos, topLeftYPos, width and length. Add a method named collides(otherRectangle) that returns true only if the current rectangle collides with otherRectangle.
// Test the collides(otherRectangle) method by using multiple test cases.
let baseRectangle = new Rectangle(1, 5, 3, 4);
let otherRectangle = new Rectangle(2, 5, 3, 4);
console.log(baseRectangle.collides(otherRectangle))