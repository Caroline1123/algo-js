// Create a function pickLearner(inputAr, n) that takes 2 parameters.
// inputAr : An array of learners (the one you created in exercise 3.0 for example)
// n : A number, that should be greater than 0 and less than the length of inputAr
// The function should return an array of randomly selected learners.
let pickLearner = (inputAr, n) => {
    let result = [];
    while (n > 0) {
        let randItem = inputAr[Math.floor(Math.random()*inputAr.length)]
        while (result.includes(randItem)){
            randItem = inputAr[Math.floor(Math.random()*inputAr.length)]
        }
        result.push(randItem);
        n --;
    }
    return result
}

let arr = ["Harry", "Ron", "Hermione", "Draco", "Neville"]
let n = Number(prompt("Type in a number between 1 and "+ arr.length))
while (n > arr.length || n < 1) {
    n = Number(prompt('BETWEEN 1 AND ' + arr.length))
}

console.log(pickLearner(arr, n))