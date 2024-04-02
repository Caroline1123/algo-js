(() => {
    // Write a program that will create a duplicate of a given array.

    // Bonus: make a first version that will only do it using push(). Make a second version that uses a single method call to perform the copy. (You'll have to search on MDN or Google for this one.)

    let arr = ["foo", "bar", "baz"];

    let newArr = [];
    for (let element of arr) {
        newArr.push(element)
    }
    console.log(newArr)

    // OR
    let altArr = [...arr];
    console.log(altArr);

})();