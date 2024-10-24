import { isAscending, isDescending } from "./test/helper/sorting.js";

// // const coba = (max, min) =>{
//     const array = []

//     for (let i = 0; i < 10; i++) {
//         // const x = Math.random() * (max - min) + min;
//         array.push(i);
//     }
//     console.log(array);
//     return isAscending(array);
// // }


// // console.log(coba(10,0));
const numbersArr = ['3', '10', '4', '21', '5', '9', '2', '6', '5', '3', '5'];

// Ascending Order
numbersArr.sort((a, b) => a - b);
console.log(isAscending(numbersArr));
console.log(numbersArr); // Output: [2,3,3,4,5,5,5,6,9,10,21]

// Descending Order
numbersArr.sort((a, b) => b - a);
console.log(isDescending(numbersArr));
console.log(numbersArr); // Output: [21,10,9,6,5,5,5,4,3,3,2]

// const price = [ '$7.99', '$9.99', '$15.99', '$15.99', '$29.99', '$49.99' ]
// const test = price.toString().split('$')
// console.log(isAscending(test));