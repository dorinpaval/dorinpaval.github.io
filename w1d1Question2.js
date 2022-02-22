// Question 2
const prompt= require('prompt-sync')();

let age= prompt('What is your age?');

while(age<18)
{
   
    age= prompt('Introduce another age');
    
}

console.log('You are older than 18');


/*
const prompt= require('prompt-sync')();

let age= prompt('What is your age?');

do
{
    age= prompt('Introduce another age');
}while(age<18);

console.log('You are older than 18');
*/


