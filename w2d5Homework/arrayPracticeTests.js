"use strict";
/* global assert doubleNums  doubleAges filterEven filterOver10 findEvenNum findEvenAge */
// comment out the node specific code when going to the browser
/*const assert = require("assert");  //always need this with node
const myExports = require("./arrayPractice.js");  //with node need the name of your file with your functions here
const doubleNums = myExports.doubleNums;  //do this for all of the functions used in the Mocha tests
const doubleAges = myExports.doubleAges;
const filterEven = myExports.filterEven;
const filterOver10 = myExports.filterOver10;
const findEvenNum = myExports.findEvenNum;
const findEvenAge = myExports.findEvenAge; 
const sumNumbers=myExports.sumNumbers;
const avgNumbers=myExports.avgNumbers;
const maxNumbers=myExports.maxNumbers;
const minNumbers=myExports.minNumbers; */




let numArray;
let peopleArray;

describe("Average age using a chain of methods", function () {
    beforeEach(function (){
        peopleArray = [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }];
    });
    it("Average of people with even number ages", function () {
        assert.strictEqual(evenAges(peopleArray), 43);
    });

    it("Average of people with odd number ages", function () {
        assert.strictEqual(oddAges(peopleArray), 14);
    });
});

describe("map practice", function () {
    beforeEach(function () {
        numArray = [5, 0, 7, 77, -20, 300, 51, 2];
        peopleArray = [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }];
    });

    it("doubles an array of numbers", function () {
        assert.deepEqual(doubleNums(numArray), [10, 0, 14, 154, -40, 600, 102, 4]);
        assert.deepEqual(numArray, [5, 0, 7, 77, -20, 300, 51, 2]);  //test for pure function
    });

    it("doubles age", function () {
        assert.deepEqual(doubleAges(peopleArray),
            [ 30,  12,  26 , 160 ]);
        assert.deepEqual(peopleArray,
            [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }]);
    });
});

describe("filter practice", function () {
    beforeEach(function () {
        numArray = [5, 0, 7, 77, -20, 300, 51, 2];
        peopleArray = [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }];
    });

    it("filter all even numbers", function () {
        assert.deepEqual(filterEven(numArray), [0, -20, 300, 2]);
        assert.deepEqual(numArray, [5, 0, 7, 77, -20, 300, 51, 2]);  //test for pure function
    });

    it("filter all age > 10", function () {
        assert.deepEqual(filterOver10(peopleArray),
            [{ name: "Sam", age: 15 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80  }]);
        assert.deepEqual(peopleArray,
            [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }]);
    });

    it("find even", function () {
        assert.strictEqual(findEvenNum(numArray), 0);
        assert.strictEqual(findEvenNum([1, 3, 801]), undefined);
    });
    it("find even age ", function () {
        assert.deepEqual(findEvenAge(peopleArray), { name: "William", age: 6 });
        const peopleOddAge = [{ name: "Sam", age: 15 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 81  }];
        assert.deepEqual(findEvenAge(peopleOddAge), undefined);
    });

    it("includes even", function () {
        assert.strictEqual(numArray.includes(77), true);
        assert.strictEqual(numArray.includes(15), false);
    });

    /* complete the following similar to includes even test */
    it("includes even age", function(){
       assert.strictEqual(numArray.includes(77), true);
       assert.strictEqual(numArray.includes(15), false);
    });
});

describe("reduce practice", function () {
    beforeEach(function () {
        numArray = [5, 0, 7, 77, -20, 300, 51, 2];
    });

    it("Sum of numbers", function(){

        assert.strictEqual(sumNumbers(numArray), 422);
        assert.strictEqual(sumNumbers([1,2,3,4]), 10);
    });

    it("Average of numbers", function(){

        assert.strictEqual(avgNumbers(numArray), 52.75);
        assert.strictEqual(avgNumbers([1,2,3,4]), 2.5);
    });

    it("Max of numbers", function(){

        assert.strictEqual(maxNumbers(numArray), 300);
        assert.strictEqual(maxNumbers([1,2,3,4]), 4);
    });

    it("Min of numbers", function(){

        assert.strictEqual(minNumbers(numArray), -20);
        assert.strictEqual(minNumbers([1,2,3,4]), 1);
    });
});
