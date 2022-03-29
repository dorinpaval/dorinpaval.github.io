"use strict";
const assert = require("assert");


const functionModule = require("./w1d3Question3.js");
const compoundInterest=functionModule.compoundInterest;

describe("CompoundInterests returns the final amount", function () {
    it("110.47 is correct", function () {
        assert.equal(compoundInterest(100,10,1), 110.47 );
    });
    it("16470.09 is correct", function () {
        assert.equal(compoundInterest(10000,5,10), 16470.09 );
    });
});