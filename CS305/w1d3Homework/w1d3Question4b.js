// Sum and multiplication of digits

"use strict";
module.exports={sumDigits, multDigits};
/**
 * 
 * @param {number} num a number to calculate the sum of the digits 
 * @returns {number} sum digits
 */
function sumDigits(num)
{
    let sum=0;
    while(num>0)
    {
        sum = sum + num%10;
        num = Math.floor(num / 10);
    }
    return sum;
}


/**
 * 
 * @param {number} numb a number to calculate the prod of the digits
 * @returns {number} product digits
 */
function multDigits(numb)
{
    let mult=1;
    while(numb>0)
    {
        mult = mult * (numb % 10);
        numb = Math.floor(numb / 10);
    }
    return mult;
}