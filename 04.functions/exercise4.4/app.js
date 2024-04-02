(() => {
    // Create a function pickLearner(inputAr, n) that takes 2 parameters.
    // inputAr : An array of learners (the one you created in exercise 3.0 for example)
    // n : A number, that should be greater than 0 and less than the length of inputAr
    // The function should return an array of randomly selected learners.

    let pickLearner = (inputAr, n) => {
        let newArray = [];
        while (n > 0) {
            let randNum = Math.ceil(Math.random()*(inputAr.length-1))
            newArray.push(inputAr[randNum]);
            n--;
        }
        console.log(newArray);
        return newArray;
    }

    let array = ["Hermione", "Ron", "Harry", "Neville", "Draco"]
    let number = 0;
    do {    
        number = Number(prompt('Type in a number between 1 and '+ array.length));
    }
    while (number < 1 || number > array.length);

    let newArr = pickLearner(array, number);
    for (learner of newArr) {
        console.log(learner)
    }
})();