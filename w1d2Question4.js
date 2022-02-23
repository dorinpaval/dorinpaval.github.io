// Question 4

"use strict";

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

console.log('Espect 10 - - - ', sumDigits(12345));
console.log('Espect 24 - - - ', multDigits(1345));
console.log('Espect 3 - - - ', sumDigits(102));
console.log('Espect 0 - - - ', multDigits(122));
console.log('Espect 8 - - - ', sumDigits(8));
console.log('Espect 8 - - - ', multDigits(8));
