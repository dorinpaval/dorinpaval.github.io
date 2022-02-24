"use strict";
module.exports = { isVowel };
/**
 *  @param {string} letter is a given letter
 *  @returns {boolean} true if the letter is Vowel
 */
function isVowel(letter) {
    //let vowel = letter.toLowerCase();
    if (letter === "a" || letter === "e" || letter === "o" || letter === "i" || letter === "u"){
        return true;
    }else{
        return false;
}
}


