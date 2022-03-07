"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge, sumNumbers,avgNumbers,maxNumbers,minNumbers}; //add all of your function names here that you need for the node mocha tests


function doubleNums(arr){
return arr.map(num => num * 2);
}

function doubleAges(arr){
    
    return arr.map(elem => elem.age*2 );
}

function filterEven(arr){
    return arr.filter(item => item%2===0);
}

function filterOver10(arr) {
    return arr.filter(item => item.age>10);
}

function findEvenNum(arr){
    return arr.find(item => item%2===0);
}

function findEvenAge(arr){
    return arr.find(item => item.age%2===0);
}


function sumNumbers(arr){
    return arr.reduce((sum,item) => sum+= item,0);
}

function avgNumbers(arr){
    return arr.reduce((sum,item) => sum+= item,0)/arr.length;
}

function maxNumbers(arr){
    return arr.reduce((max,item) => Math.max(max,item),-Infinity);
}


function minNumbers(arr){
    return arr.reduce((min,item) => Math.min(min,item), Infinity);
}

function evenAges(arr){
    return arr.filter(num => num.age%2===0).map(num => num.age).reduce((sum,item,index,array) => { 
        let total= sum + item;
        return total/array.length;
    });       
}

function oddAges(arr){
    return arr.filter(num => num.age%2===1).map(num => num.age).reduce((sum,item,index,array) => { 
        let total= sum + item;
        return total/array.length;
    });       
}