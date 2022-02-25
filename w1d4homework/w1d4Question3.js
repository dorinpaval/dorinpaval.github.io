"use strict";
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
    return max;
}

const max=findLongestWord(["this","is","the","LONGEST","one"]);
console.log(max);