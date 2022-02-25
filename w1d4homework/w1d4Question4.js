"use strict";

/**
 * 
 * @param {string} firstArr the initial array
 * @return {string} the reverse array
 */
function reverseArray(firstArr){
    let newArr=[];
    let incr=0;
    const firstPosition=firstArr.length-1;
    for(let i=firstPosition;i>=0;i--)
        {
            newArr[incr]=firstArr[i];
            incr++;
        }
    return newArr;
}

console.log(reverseArray(["A","B","C"]));

/**
 * 
 * @param {string} secondArray the initial array 
 * @returns {string} the reverse array
 */
function reverseArrayInPlace(secondArray){
    
    const net= secondArray.length-1;
    console.log(net);
    for(let i=0;i<net/2;i++)
    {
        let temp=secondArray[net-i];
        secondArray[net-i]=secondArray[i];
        secondArray[i]=temp;
    }
    return secondArray;

}

console.log(reverseArrayInPlace([1,2,3,4,5]));