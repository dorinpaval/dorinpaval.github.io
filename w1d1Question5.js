// Question 5
const prompt= require('prompt-sync')();
const COST_HOUSE=prompt('what is the cost of the house? ');

if(COST_HOUSE<50000)
    console.log('Your down payment is ', 5*COST_HOUSE/100);
else if(COST_HOUSE<100000)
    console.log('Your down payment is ', 1000+10*(COST_HOUSE-50000)/100);
    else if(COST_HOUSE<200000)
        console.log('Your down payment is ', 2000+15*(COST_HOUSE-100000)/100);
        else 
            console.log('Your down payment is ', 5000+10*(COST_HOUSE-200000)/100);

