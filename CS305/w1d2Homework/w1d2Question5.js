// Question 5

function convertFahrenheit(fTemp)
{
    let fToCel = (fTemp - 32) * 5 / 9 ;
    return fToCel.toFixed(4).replace('.0000', '');
}

console.log('Expect 0: - - - ', convertFahrenheit(32));
console.log('Expect -17.7778: - - - ', convertFahrenheit(0));
console.log('Expect 100: - - - ', convertFahrenheit(212));
console.log("expect 37.7778: ", convertFahrenheit (100));