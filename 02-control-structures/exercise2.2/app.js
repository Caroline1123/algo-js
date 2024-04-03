(() => {
    let min = parseInt(prompt("Enter a minimum value:"));
    let max = parseInt(prompt("Enter a maximum value:"));
    if (min > max ) {
        alert('Something (aka you) went wrong. Check the console logs to view error details after closing this pop-up.')
        throw "Oops. Min value entered higher than max. Please try again. Bye now!"
    }
    let current = parseInt(prompt("Enter the current value:"));

    if (current < max && current > min) {
        console.log(current);
    }
})();