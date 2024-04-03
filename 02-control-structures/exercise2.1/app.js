(() => {
    let age = parseInt(prompt("What's your age?"));
    // Option 1
    if (age > 17) {
        console.log("You are an adult.")
    }
    else {
        console.log("You are not an adult yet.")
    }

    // Option 2 : readability--
    age> 17? console.log("You are an adult.") : console.log("You are not an adult yet.");
    

})();