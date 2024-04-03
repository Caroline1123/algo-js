//     Create a class named Circle with attributes xPos, yPos and radius. Add a method named move(xOffset, yOffset) that will adjust the position of the circle. Add a getter accessor named surface that will return the surface of the circle.
//     Test its method and accessors by modifying the values and checking if everything is consistent.
class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    get surface() {
        return Math.PI*(this.radius*2)
    }
    move(xOffset, yOffset) {
        this.xPos = xOffset;
        this.yPos = yOffset;
    }
}
let obj1 = new Circle(1, 1 , 9);
obj1.move(5,5)
console.log(obj1.surface + "\n" + obj1.xPos + "\n" + obj1.yPos)