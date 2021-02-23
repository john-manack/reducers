'use strict';

// array.reduce(callback, initialValue)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const numbersArray = [1, 2, 3, 4];
const letterArray = ['j', 'o', 'h', 'n'];

// the 'accumulator' below holds the updated values (like a counter); the 'item' refers to each item in the original array (just like naming each item in a map method)
const reducerCallback = (accumulator, item) => {
    return accumulator + item;
}

// the number '0' below is NOT an index, it is the starting point of the 'accumulator' (aka the counter) above
const total = numbersArray.reduce(reducerCallback, 0);
const newString = letterArray.reduce(reducerCallback, '');

// console.log("The total is: ", total);
// console.log("The string is : ", newString);

const stateReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return state + action.item;
        case 'RESET':
            return '';
        default:
            return state;
    }
}

let wordStore = '';

// our stateReducer stakes a current state (wordStore), and an action type ('ADD'), and an action item ('r')
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'r' });
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'e' });
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'd' });
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'u' });
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'x' });

console.log(wordStore);