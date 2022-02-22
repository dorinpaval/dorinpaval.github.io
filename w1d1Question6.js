//QUESTION 6
const prompt= require('prompt-sync')();
let num=Number(prompt('Give your number'));
let sum=0;
while(num>=1)
{
    sum = sum + num%10;
    num = Math.floor(num / 10);
}
console.log('The sum is', sum);
