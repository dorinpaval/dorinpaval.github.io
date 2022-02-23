// Question 1
"use strict";

function ComputeSalesCommission(salaried=0, sales=0)
{
if(salaried===true)
    {
        if(sales<300)
           return "0 comision" ;
        else if(sales>=300 && sales<=500)
            return "your sales commission= "+ sales/100;
            else
            {
                 const comm=1*500/100+2*(sales-500)/100;
                 return "your sales commission= "+ comm;
    
                }
    }
else
{
    if(sales>=300 && sales<=500)
        return "your sales commission= "+ 2*sales/100;
    else if (sales>500)
    {
        const comm=2*500/100+ 3*(sales-500)/100;
        return "your sales commission= "+ comm ;
    }
         else
             return "0 comision" ;
}
}
console.log('Expect 0: ', ComputeSalesCommission(true,200));
console.log('Expect 0: ', ComputeSalesCommission(false,200));
console.log('Expect 3: ', ComputeSalesCommission(true,300));
console.log('Expect 6: ', ComputeSalesCommission(false,300));
console.log('Expect 65: ', ComputeSalesCommission(true,3500));
console.log('Expect 100: ', ComputeSalesCommission(false,3500));
