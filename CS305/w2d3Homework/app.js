"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { ucFirst, checkSpam, extractCurrencyValue, getMaxSubSum, truncate , camelize}; //add all of your function names here that you need for the node mocha tests



function ucFirst(str) {
    if(str==="")
        return str;
    else{
        let array= str[0].toUpperCase() + str.slice(1);
        return array;}
  }

  function checkSpam(str) {
    let arr=str.toUpperCase();
    if(arr.includes("XXX") || arr.includes("VIAGRA"))
        return true;
    else
        return false;  
  }


  function truncate(str, maxlength) {
    let arr=[];
    if(str.length>maxlength)
        arr= str.slice(0,maxlength-1)+ "…";
    else
        return str;
    return arr;
  }

function extractCurrencyValue(str)
{
  return  +str.slice(1);
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 */
function getMaxSubSum(arr) {
  let max=0;
  for(let i=0; i<arr.length; i++){
    let sum=0;
    for (let j=i; j<arr.length; j++){
        sum += arr[j];
        if(sum>max){
          max=sum;
          }
    }
  }
  return max;
}


function camelize(str) {
  if(str==="")
      return str;
  else{
  const str2 = str.split("-");
  for(let i=1;i<str2.length;i++){
      str2[i] = str2[i][0].toUpperCase() + str2[i].substr(1);
  }
  //str2.join("");
  return str2.join("");
  }
  
}



//console.log(ucFirst("maria"));
console.log(truncate("What I'd like to tell on this topic is:", 20));


console.log(camelize("tata-are-numai-mere"));