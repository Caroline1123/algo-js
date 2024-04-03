(() => {
    // Solution with 100 turns of loop.
    let j = 1;
    while (j < 101) {
        if (j % 2 == 0) {
            console.log(j);
        }
        j ++;
    }
    // Solution with 50 turns of loop.
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            console.log(i);
            i++;
        }
    }
})();