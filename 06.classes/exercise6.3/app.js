(() => {
    // Create a program that will re-use the Rectangle class you created previously. It should generate 1000 random instances of Rectangle with random positions and sizes. Then it will display all colliding rectangles amongst those that were generated that way.
    class Rectangle {
        constructor(topLeftXPos, topLeftYPos, width, length) {
            this.topLeftXPos = topLeftXPos;
            this.topLeftYPos = topLeftYPos;
            this.width = width;
            this.length = length;
        }
        collides(otherRectangle) {
            let collides_x  = false;
            // Check if other rectangle collides on X values
            // check if other rectangle top left x value is between min and max x values of rectangle.
            if (otherRectangle.topLeftXPos >= this.topLeftXPos && otherRectangle.topLeftXPos <= (this.topLeftXPos + this.width)) {
                collides_x = true;
            }
            // check if other rectangle top right x value is between min and max x values of rectangle.
            else if ((otherRectangle.topLeftXPos + otherRectangle.width) >= this.topLeftXPos &&  (otherRectangle.topLeftXPos + otherRectangle.width) <= (this.topLeftXPos + this.width)) {
                collides_x = true;
            }
            let collides_y = false;
            if (otherRectangle.topLeftYPos >= this.topLeftYPos && otherRectangle.topLeftYPos <= (this.topLeftYPos + this.length)) {
                collides_y = true;
            }
            else if ((otherRectangle.topLeftYPos + otherRectangle.length) >= this.topLeftYPos &&  (otherRectangle.topLeftYPos + otherRectangle.length) <= (this.topLeftYPos + this.length)) {
                collides_y = true;
            }
            if (collides_x && collides_y) {
                return true;
            }
            else {
                return false;
            }
        }
    }

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
    
    for (collisions of collidingRectangles) {
        console.log(collisions)
    }

})();