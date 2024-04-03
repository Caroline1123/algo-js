import { rand10 } from './../../modules/canvas.js';
    //  By reusing the function rand10() created in Exercise 2, write a function named multiRand(n) that returns an array of n numbers between 1 and 10. You should not modify anything in rand10() to achieve this.
    // Write a documentation for the multiRand(n) function.
    // Use that function to create a program that will ask the number of random numbers to generate then display that same number of random numbers.

// Function multirand takes an int as param and creates an array of random ints of num length.
let multiRand = (num) => {
    let array = []
    while (num > 0) {
        array.push(rand10());
        num --;
    }
    return array;
}

let arr = multiRand(Number(prompt("Write in a number: ")))
for (let elem of arr) {
    console.log(elem);
}