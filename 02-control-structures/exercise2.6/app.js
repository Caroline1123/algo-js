(() => {
    // Make a program that ask the user to enter a number between 1 and 7. Depending on the number, display the day of the week that correspond. (1 => Monday, 2 => Tuesday, etc...)

    // Create an array with days of the week
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    // Prompt user for a number between 1 and 7. Keep asking until input is valid.
    let num = parseInt(prompt("Type in a number between 1 and 7"));
    while(num < 1 || num > 7) {
        num = parseInt(prompt("BETWEEEN 1 AND 7: "));
    }

    console.log(days[num-1])
})();