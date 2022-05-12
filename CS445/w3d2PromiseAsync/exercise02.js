"use strict";

async function noDuplicates(arr){
    let result=[];
    for(let i of arr){
        if(!result.includes(i)){
            result.push(i)
        }}
        return result;
}

Array.prototype.removeDuplicatesAsync= async function (){
    let arr=this;
    return new Promise( async function (res, err){
        let result= await noDuplicates(arr);
        if(result.length>0)
            res(result);
        else
            err("No elements in the array")
    }).then(console.log)
    .catch(console.log)
}


console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync(); 
[].removeDuplicatesAsync();  // Error
console.log(`end`);