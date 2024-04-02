(() => {
    // Write a program that will calculate the average value of a given array.
    // Test it with the following arrays:
    // [1, 2, 3, 4, 5] => 3
    // [100, 101, 102] => 101

    let nums = [100, 101, 102];
    let sum = nums.reduce((total, num) => total + num )
    console.log(sum/nums.length)

})();