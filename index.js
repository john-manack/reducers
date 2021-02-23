'use strict';

// array.reduce(callback, initialValue)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const numbersArray = [1, 2, 3, 4];
const letterArray = ['j', 'o', 'h', 'n'];

// the 'accumulator' below holds the updated values (like a counter); the 'item' refers to each item in the original array (just like naming each item in a map method)
const reducerCallback = (accumulator, item) => {
    console.log('accumulator, item :', accumulator, item);
    return accumulator + item;
}

// the number '0' below is NOT an index, it is the starting point of the 'accumulator' (aka the counter) above
const total = numbersArray.reduce(reducerCallback, 0);
const newString = letterArray.reduce(reducerCallback, '');

console.log("The total is: ", total);
console.log("The string is : ", newString);