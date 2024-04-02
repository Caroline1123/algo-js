(() => {
    // Create a function named calcSurface that takes the length and width of a rectangle and returns its surface. Then create a program that asks the length and width of a rectangle to the user then displays the surface of that rectangle. That program must use the function you created.

    // Write a documentation for the calcSurface function.

    let calcSurface = (length, width) => {
        return length * width;
    }

    let l = Number(prompt("Type in a length: "));
    let w = Number(prompt("Type in a width: "));
    alert('The surface is '+ calcSurface(l,w));

})();