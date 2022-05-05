"use strict";
const fibonacci= (function(){
    let obj={};
    
    function f(n) {
    let value;
    if (obj[n]) {
        value = obj[n];
      } else {
        if (n === 0 || n === 1)
          value = 1;
        else{
          value = f(n - 1) + f(n - 2);
          obj[n] = value;}
      }
      return value;
    }
    return f;
})();

let dada=fibonacci(15);
console.log(dada);