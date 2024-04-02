(() => {
    // Create a class named Rectangle with attributes topLeftXPos, topLeftYPos, width and length. Add a method named collides(otherRectangle) that returns true only if the current rectangle collides with otherRectangle.

    // Test the collides(otherRectangle) method by using multiple test cases.

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

    let baseRectangle = new Rectangle(1, 5, 3, 4);
    let otherRectangle = new Rectangle(2, 5, 3, 4);
    console.log(baseRectangle.collides(otherRectangle))
})();