"use strict";


/**
 * 
 * @param {number} num the given number
 * @returns {number} the double of the given number
 */
function double(num){
    return 2*num;
}


/**
 * 
 * @param {number} num the given number
 * @returns {number} the double of the given number
 */
 function times100(num){
    return 100*num;
}



/**
 * 
 * @param {number} arr the given array
 * @param {function} func the given function
 * @returns {number} the double and the 100 times of the array
 */
function myMap(arr,func){
    let returnVal=[];
    for(let i=0;i<arr.length;i++)
         returnVal[i]= func(arr[i]);
    return returnVal;
}


console.log(myMap([2,4,6,8],function(num){return 3*num;}));

const vector=[2,3,4,5,6];
const myMap1=vector.map(something => 3*something);

console.log(myMap1);