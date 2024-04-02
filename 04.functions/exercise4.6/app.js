(() => {
    // Create a function factorial(a) that returns the factorial of a number.
    // That function must be recursive.
    let factorial = (n) => {
        if (n == 1) {
            return 1
        }
        else {
            return n + factorial(n-1);
        }
    }

    console.log(factorial(3))
})();