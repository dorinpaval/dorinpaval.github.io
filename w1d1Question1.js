// Question 1

const prompt= require('prompt-sync')();

let salaried= prompt('Are you salaried?yes/no');
let sales= prompt('What is your sales amount?');

if(salaried=='yes')
    {
        if(sales<=300)
            console.log('No comision');
        else if(sales>300 && sales<500)
            console.log('your sales commission=', sales/100);
        else
            console.log('your sales commission=', 2*sales/100);
    }
else
{
    if(sales>300 && sales<500)
        console.log('your sales commission=', 2*sales/100);
    else if (sales>=500)
        console.log('your sales commission=', 3*sales/100);
    else
        console.log('No comision');
}


