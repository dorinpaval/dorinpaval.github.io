//Convert Fahreinheit to Celsius

"use strict";
module.exports={ convertFahrenheit};

/**
 * 
 * @param {number} fTemp temperature in fahrenheit grades
 * @returns {number} temperature in Celsius grades
 */
function convertFahrenheit(fTemp)
{
    let fToCel = (fTemp - 32) * 5 / 9 ;
    return fToCel.toFixed(4).replace(".0000", "");
}