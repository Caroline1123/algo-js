(() => {
    // Write a program that will display the minimum and maximum elements of a given array.

    let arr = [5,6,11,1,10];
    arr.sort((a,b) => a - b);
    console.log('Minimum: ' + arr[0]);
    console.log('Maximum: ' + arr[arr.length-1]); 
    
    // OR (thanks google)
    console.log(Math.min(...arr))
    console.log(Math.max(...arr))

})();