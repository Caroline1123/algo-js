(() => {
    // Creates function that takes 2 params : 
    // coordinates of street/aveA and street/aveB and calculates the Manhattan distance between those 2.

    let manhattan = (streetA, avenueA, streetB, avenueB) => {
        return Math.abs(streetA - streetB) + Math.abs(avenueA - avenueB);
    }

    console.log(manhattan(1, 1, 2, 2));
})();