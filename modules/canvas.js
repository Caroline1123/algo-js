// returns a random int between 1 and 10
let rand10 = () => {
    return Math.ceil(Math.random()*10);
}

let askTvSerie = () => {
    // Asking user for TV series details
    let name = prompt("What's your favourite TV series' name?");
    let productionYear = Number(prompt("In what year was it launched?"));
    let castMembers = []
    let input = ''
    do {
        input = prompt("Add a cast member. When you wish to stop, input a 0:")
        if (input != '0') {
            castMembers.push(input);
        }
    }
    while (input != '0')

    // Initializing the tvSeries object
    let tvSeries = {
        name : name,
        productionYear : productionYear,
        castMembers: castMembers,
    }
    return tvSeries
}

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

export { rand10, askTvSerie, Rectangle };