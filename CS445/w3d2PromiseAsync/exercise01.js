"use strict";
const isPrime = num => {
    return new Promise( function(res,err){
       setTimeout( function(){
           for(let i = 2, s = Math.sqrt(num); i <= s; i++)
                if(num % i === 0) 
                    err({prime:false}); 
            return res({prime:true})}, 5000);
})
}



console.log('start'); 
isPrime(90)
    .then(res => console.log(res))
    .catch(err => console.error(err));
console.log('end');