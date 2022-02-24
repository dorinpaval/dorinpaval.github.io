"use strict";

// Question 2
/*
    INPUT: the function will get the initial amount, annual interest rate  and the number of years to compound
    OUTPUT: the balance of a savings account after a period of time with a specific interest rate
    PROCESSING: first we calculate the the monthly interest and then the new balance will be old 
                balance + interest rate multiplied by old balance 
*/
module.exports = { compoundInterest };

/**
 * 
 * @param {number} INIT_AMOUNT the initial amount
 * @param {number} INTEREST_RATE the interest rate
 * @param {number} NUM_YEARS the number of years
 * @returns {string} amount of money after NUM_YEARS years
 */
function compoundInterest(INIT_AMOUNT, INTEREST_RATE, NUM_YEARS) {
    let balance = INIT_AMOUNT;
    const MONTHLY_INTEREST = INTEREST_RATE / 100 / 12;
    const PAYMENTS = NUM_YEARS * 12;                                   // calculate how many months we calculate the balance for
    for (let i = 1; i <= PAYMENTS; i++) {
        balance = balance + (balance * MONTHLY_INTEREST);
    }

    return balance.toFixed(2);
}