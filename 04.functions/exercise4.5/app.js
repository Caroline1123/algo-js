(() => {
    //     Create a function named calcDistance which takes the coordinates of two different points A and B in a 2D space. That function must return the distance between those two points.

    // Examples results:

    // Point A = [1, 1], point B = [2, 2] => 1.41
    // Point A = [1, 1], point B = [3, 1] => 2
    // Point A = [4, 1], point B = [1, 1] => 3
    // Point A = [-2, 2], point B = [2, -2] => 5.65
    // Create a program to use that function.

    // Write a documentation for the calcDistance function.

    // Note: You probably need to make some search on Google to learn the mathematical formula to do that. You will also probably need to search for useful functions in JavaScript to help you making complex mathematical formulas...

    /**
     * calcDistance calculates the distance between 2 coordinates given as parameter.
     * @param {*} coordA -> an array constituting a geographical point [x1,x2]
     * @param {*} coordB -> an array constituting a second geographical point [y1,y2]
     * @returns a float representing the distance betwween the coords. Formula used : sqrt(((array2[0]-array1[0])^2)+((array2[1]-array1[1])^2))
     */

    let calcDistance = (coordA, coordB) => {
        return Math.sqrt((((coordB[0] - coordA[0])**2) + ((coordB[1] - coordA[1])**2)))
    }

    console.log(calcDistance([-2, 2], [2, -2]).toFixed(2))

})();