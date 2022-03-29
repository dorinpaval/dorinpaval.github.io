// Question 3
const prompt= require('prompt-sync')();

const INIT_AMOUNT= prompt('What is your initial amount?');
const INTEREST_RATE= prompt('What is the annual interest rate');
const NUM_YEARS= prompt('How many years?');

let balance= INIT_AMOUNT*(1+INTEREST_RATE/12)**NUM_YEARS;   //not sure if this is the right formula to calculate the balance

console.log('Balance after %s years', NUM_YEARS, balance);
