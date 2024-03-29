(() => {
    let num = parseInt(prompt("Type in your favourite number:"));
    while (num != 42) {
        num = parseInt(prompt("Are you sure? \nType in your favourite number:"));
    }
})();