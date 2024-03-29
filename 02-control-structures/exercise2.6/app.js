(() => {
    // Make a program that ask the user to enter a number between 1 and 7. Depending on the number, display the day of the week that correspond. (1 => Monday, 2 => Tuesday, etc...)

    let num = parseInt(prompt("Type in a number between 1 and 7"));
    while(num < 1 || num > 7) {
        num = parseInt(prompt("BETWEEEN 1 AND 7, you ape: "));
    }

    if (num == 1) {
        console.log('Monday');
    }
    else if (num == 2) {
        console.log('Tuesday');
    }
    else if (num == 3) {
        console.log('Wednesday');
    }
    else if (num == 4) {
        console.log('Thursday');
    }
    else if (num == 5) {
        console.log('Friday');
    }
    else if (num == 6) {
        console.log('Saturday');
    }
    else {
        console.log('Sunday');
    }

})();