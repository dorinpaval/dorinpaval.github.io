"use strict";
let obj={};
function fibonacci(n) {
    let value;
    if (n in obj) {
        value = obj[n];
      } else {
        if (n === 0 || n === 1)
          value = 1;
        else
          value = fibonacci(n - 1,obj) + fibonacci(n - 2,obj);
          obj[n] = value;
      }
  
      return value;
}

let dada=fibonacci(10);
console.log(dada);