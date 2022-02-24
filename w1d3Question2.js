"use strict";
module.exports= { ComputeSalesCommission };
/**
 * 
 * @param {boolean} salaried true if the person is salaried 
 * @param {number} sales amount of sales
 * @returns {number} sales comission depending if the person is salaried and how much he spent
 */
function ComputeSalesCommission(salaried=0, sales=0)
{
if(salaried===true)
    {
        if(sales<300)
           return "0 comision" ;
        else if(sales>=300 && sales<=500)
            return  sales/100;
            else
            {
                 const comm=1*500/100+2*(sales-500)/100;
                 return  comm;
    
                }
    }
else
{
    if(sales>=300 && sales<=500)
        return  2*sales/100;
    else if (sales>500)
    {
        const comm=2*500/100+ 3*(sales-500)/100;
        return  comm ;
    }
         else
             return "0 comision" ;
}
}