// Question 3
/*
    INPUT: the cost of a house
    OUTPUT: the down payment amount
    PROCESSING: based on the cost of the house the function calculates the down payment amount
                -if the cost of house is less then $50K, down payment = 5% of the cost
                -if the cost of house is $50K - $100K, down payment = $2500 + 10% of(cost of house-$50K)
                -if the cost of house is $100K - $200K, down payment = $7500 + 15% of(cost of house-$100K)    
*/
"use strict";

function calcDownPayment(COST_HOUSE)
{
if(COST_HOUSE<50000)
    return 5*COST_HOUSE/100;
else if(COST_HOUSE<100000)
{   const payment=2500+10*(COST_HOUSE-50000)/100;
    return  payment;
}
    else if(COST_HOUSE<200000)
        { const payment=7500+15*(COST_HOUSE-100000)/100;
            return payment;
        }
        else
            { 
            const payment=20000+10*(COST_HOUSE-200000)/100;
            return payment;
            }
}

console.log('Expect 2000 - - - ', calcDownPayment(40000));
console.log('Expect 2500 - - - ', calcDownPayment(50000));
console.log('Expect 7500 - - - ', calcDownPayment(100000));
console.log('Expect 25000 - - - ', calcDownPayment(250000));