(() => {
    /* Make a program that ask the user to enter a number named n. Then ask him n time to enter a new number. At the end display the sum of all the numbers collected this way.
    Example: If the user enters 3 for n then 1, 2 and 3, the program should display 6.*/

    // Ask user for a number n which will determine the number of nums they'll have to input.
    let n = parseInt(prompt("Type in a number below. Not too big for your own sake."))
    // Iniatialize sum to 0
    let sum = 0;

    // Ask n number inputs and add input to summ
    for (n > 0; n--;) {
        let numToSum = parseInt(prompt("Type in a number to add:"));
        sum += numToSum;
    }
    console.log(sum);
})();