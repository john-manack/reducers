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

// our stateReducer stakes a current state (wordStore), and an action type ('ADD'), and an action item ('r'); item is your payload
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'r' });
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'e' });
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'd' });
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'u' });
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'x' });

console.log('wordStore is now: ', wordStore);

wordStore = stateReducer(wordStore, { type: 'RESET' });

console.log('wordStore, after RESET is: ', wordStore);

// BEGIN NUMBER EXAMPLES
const stateReducerCopy = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return state + action.item;
        case 'DIFF':
            return state - action.item;
        case 'MULT':
            return state * action.item;
        case 'PROD':
            return state / action.item;
        case 'RESET':
            return 0;
        default:
            return state;
    }
}

let numStore = 0;

numStore = stateReducerCopy(numStore, { type: 'ADD', item: 1 });
numStore = stateReducerCopy(numStore, { type: 'ADD', item: 2 });
numStore = stateReducerCopy(numStore, { type: 'ADD', item: 3 });
numStore = stateReducerCopy(numStore, { type: 'ADD', item: 4 }); // numStore is now 10

console.log('numStore is now: ', numStore);

numStore = stateReducerCopy(numStore, { type: 'MULT', item: 5 }); // numStore is now 50
numStore = stateReducerCopy(numStore, { type: 'PROD', item: 2 }); // numStore is now 25

console.log('numStore is now: ', numStore);

numStore = stateReducerCopy(numStore, { type: 'RESET' });

console.log('numStore, after RESET is: ', numStore);