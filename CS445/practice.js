"use strict";

// String.prototype.newReverse= function(){
//     let arr=this;
//     let myString= arr.split('');
//     let n=myString.length;
//     return new Promise(function( res, rej){
//         for(let i=0;i<n/2;i++){
//             let copy=myString[i];
//              myString[i]=myString[n-i-1];
//              myString[n-i-1]=copy;
//             console.log(copy)
//         }
//         res(myString.join(''));
//     }).then(console.log)

// };
// let mystr="hello"

// mystr.newReverse();


// const isPrimeAsync = num => new Promise(function(res,rej){
//         setTimeout( function(){ for(let i = 2, s = Math.sqrt(num); i <= s; i++)
//         if(num % i === 0) rej({prime:false}); 
//     res({prime:true});},2000);
//     })
    


// console.log('start');
// isPrime(9)
//     .then(res => console.log(res))
//     .catch(err => console.error(err));
// console.log('end');


async function da(){
    let a=10;
    return await new Promise(function (r,s){
    setTimeout( function (){ return "Done"},0);
    })
    }
    
    let my=da();
    console.log(my);