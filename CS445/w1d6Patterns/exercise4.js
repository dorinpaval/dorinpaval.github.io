"use strict";
const fibonacci= (function(){
    let obj={};
    
    function f(n) {
    let value;
    if (n in obj) {
        value = obj[n];
      } else {
        if (n === 0 || n === 1)
          value = 1;
        else{
          value = f(n - 1,obj) + f(n - 2,obj);
          obj[n] = value;}
      }
      return value;
    }
    return f;
})();

let dada=fibonacci(5);
console.log(dada);