"use strict";

Array.prototype.removeDuplicatesAsync= function (){
    let result=[];
    let arr=this;
    return new Promise(function (res, err){
        for(let i of arr){
                    if(!result.includes(i)){
                        result.push(i)
                    }}
        if(result.length>0)
            res(result);
        else
            err("Error")
    }).then(console.log)
    .catch(console.log)
}


console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync(); 
[].removeDuplicatesAsync();  // Error
console.log(`end`);