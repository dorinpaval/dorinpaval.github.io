"use strict";

/**
 * 
 * @param {number} arr the array 
 * @returns {number} the sum of aray's elements
 */
function sum(arr){
 let sum=0;
 for(let elem of arr)
    sum += elem;
 return sum;
}


/**
 * 
 * @param {number} arr the array 
 * @returns {number} the product of array's elements
 */
function multiply(arr){
    let product=1;
    for(let elem of arr)
        product *= elem;
    return product;
}

console.log(sum([1,2,3,4]));
console.log(multiply([1,2,3,4]));