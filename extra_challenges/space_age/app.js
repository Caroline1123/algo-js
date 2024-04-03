// Create planet class with a constructor
class Planet {
    // creates a constructor for planet
    constructor(name, orbitalPeriod) {
        // name of the planet
        this.name = name;
        // orbital period of the planet in earth years
        this.orbitalPeriod = orbitalPeriod;
    }
}
// Initialize a bunch of planets
let mercury = new Planet("Mercury", 0.2408467);
let venus = new Planet("Venus", 0.61519726);
let earth = new Planet("Earth", 1.0);
let mars = new Planet("Mars", 1.8808158);
let jupiter = new Planet("Jupiter", 11.862615);

// Create a reference for objects
let planets = {
    mercury : mercury, 
    venus : venus,
    earth : earth,
    mars : mars,
    jupiter : jupiter,
}

// Define spaceAge function taking 2 parameters: age in seconds and planet name. 
let spaceAge = (seconds, planet) => {
    planet = planet.toLowerCase()
    let planetObj = planets[planet];
    // Returns the age in years depending on the chosen planet
    return (seconds/60/60/24/365.25) * planetObj.orbitalPeriod;
}

console.log(spaceAge(365.25 * 24 * 60 * 60, "Earth"))