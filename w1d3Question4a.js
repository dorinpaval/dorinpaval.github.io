// CalcDownPayment

"use strict";
module.exports={CalcDownPayment};

/**
 * 
 * @param {number} COST_HOUSE  get an input number
 * @returns {number} the sum of payment
 */
function CalcDownPayment(COST_HOUSE) {
    if (COST_HOUSE < 50000){
        const payment= 5 * COST_HOUSE / 100;
        return payment;
    }
    else if (COST_HOUSE < 100000) {
        const payment = 2500 + 10 * (COST_HOUSE - 50000) / 100;
        return payment;
    }
    else if (COST_HOUSE < 200000) {
        const payment = 7500 + 15 * (COST_HOUSE - 100000) / 100;
        return payment;
    }
    else {
        const payment = 20000 + 10 * (COST_HOUSE - 200000) / 100;
        return payment;
    }
}

