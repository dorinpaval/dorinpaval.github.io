"use strict";

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

console.log(maxOfThree(12,80,31));