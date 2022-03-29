// Question 2
/*
    INPUT: the function will get the initial amount, annual interest rate  and the number of years to compound
    OUTPUT: the balance of a savings account after a period of time with a specific interest rate
    PROCESSING: first we calculate the the monthly interest and then the new balance will be old 
                balance + interest rate multiplied by old balance 
*/
"use strict";

function compoundInterest(INIT_AMOUNT, INTEREST_RATE, NUM_YEARS)
{
    let balance= INIT_AMOUNT;
    const MONTHLY_INTEREST= INTEREST_RATE/100/12; 
    const PAYMENTS= NUM_YEARS*12;                                   // calculate how many months we calculate the balance for
    for (let i=1; i<=PAYMENTS; i++)
        {
            balance= balance +(balance*MONTHLY_INTEREST);
        }

    return balance.toFixed(2);
}


//let balance= INIT_AMOUNT*(1+INTEREST_RATE/12)**NUM_YEARS;   //not sure if this is the right formula to calculate the balance

console.log('Expect 110.47 - - - ' + compoundInterest(100,10,1));
console.log('Expect 16470.09 - - - ' +compoundInterest(10000, 5, 10));