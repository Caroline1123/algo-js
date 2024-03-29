(() => {
    let age = prompt("What's your age?");
    age = parseInt(age);
    if (age > 17) {
        console.log("You are an adult.")
    }
    else {
        console.log("You are not an adult yet.")
    }

})();