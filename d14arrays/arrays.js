"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
//module.exports = {maxOfThree, sum, multiply }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} fstNo the first number
 * @param {number} sndNo the second number
 * @param {number} trdNo the third number
 * @returns {number} the largest one
 */
 function maxOfThree(fstNo, sndNo,trdNo)
 {
     if(fstNo> sndNo && fstNo> trdNo)
         return fstNo;
     else if (sndNo>fstNo && sndNo>trdNo)
         return sndNo;
         else
             return trdNo;
 }

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr){
    let tot = 0;
    for (const number of arr){
        tot += number;
    }
    return tot;
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr){
    let product=1;
    for(let elem of arr)
        product *= elem;
    return product;

}

/**
 * 
 * @param {string} arrWords array of words 
 * @returns {string} the largest word
 */
 function findLongestWord(arrWords){
    let max="";
    for(let elem of arrWords)
    {
        if(elem.length > max.length)
            max=elem;
    }
    return max.length;
}

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

/**
 * 
 * @param {number} studAnswers the array of students' answers 
 * @param {number} correctAnswers the array of correct answers
 * @returns {number} the array of score exam
 */
 function scoreExams(studAnswers,correctAnswers){
    //let scoreExam=[0];
    let studScore=[];
    //let noElem=correctAnswers.length;
    for(let i=0;i<studAnswers.length;i++)
    {
        let ans=0;
        studScore.push([]);
        for(let j=0;j<correctAnswers.length;j++){
            if(studAnswers[i][j]===correctAnswers[j])
                ans +=1;
                studScore[i] = ans;
            
           // console.log(studScore[j]);
        }

    }   
    return studScore; 
}


/**
 * 
 * @param {number} row the number of rows
 * @param {number} colomn the number of colomns
 * @returns {number} the generated matrix
 */
 function generateArray(row, colomn){
    let elem=1;
    let matrix = [];
    
    for(let i=0;i<row;i++){
    matrix.push([]);
    
    for(let j=0;j<colomn;j++)
            {
                matrix[i][j] = elem;
                elem += 1;
            }
        }
    return matrix;        
}