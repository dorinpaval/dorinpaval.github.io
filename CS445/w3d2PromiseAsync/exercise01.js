"use strict";

async function isPrime(num){
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
    if(num % i === 0) 
        return false; 
    return true;
}

const isPrim = num => {
    return new Promise( function(res,err){
       setTimeout( async function(){
        let prime= await isPrime(num);
        if(!prime)
                return err({prime:false}); 
        return res({prime:true})}, 5000);
})
}



console.log('start'); 
isPrim(90)
    .then(res => console.log(res))
    .catch(err => console.error(err));
console.log('end');