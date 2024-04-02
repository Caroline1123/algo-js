(() => {
    // Write a program that will add all the elements of an array.
    // Test it with the following arrays:
    // [1, 2, 3, 4, 5] => 15
    // [100, 101, 102] => 303

    let nums = [100, 101, 102];
    console.log(nums.reduce((sum, number)=> sum + number));

    // OR

    let total = 0;
    for (let num of nums) {
        total += num;
    }
    console.log(total)
})();