import { Rectangle } from './../../modules/canvas.js'

// Create empty array to store all the generated rectangle objects
let rectangles = []
// Generate 1000 instances of rectangles
for (let i = 0; i < 1000; i ++) {
    // Generate random dimensions
    let topLeftXPos = Math.floor(Math.random()*1000)
    let topLeftYPos = Math.floor(Math.random()*1000)
    let width = Math.ceil(Math.random()*10)
    let length = Math.ceil(Math.random()*10)
    rectangles.push(new Rectangle(topLeftXPos, topLeftYPos, width, length))
}
// Create another array to store any rectangle that did collide with another
let collidingRectangles = []
for (let i = 0  ; i < rectangles.length; i ++ ) {
    for (let j = i +1; j < rectangles.length; j ++ ){
        if (rectangles[j].collides(rectangles[i])) {
            collidingRectangles.push(rectangles[j])
        }
    }
}

// print in the console any objects that collided.
for (let collisions of collidingRectangles) {
    console.log(collisions)
}