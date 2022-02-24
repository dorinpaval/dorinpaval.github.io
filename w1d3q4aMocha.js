"use strict";
const assert = require("assert");

const functionModule = require("./w1d3Question4a");
const CalcDownPayment = functionModule.CalcDownPayment;

describe("CalcDownPayment returns the final amount", function () {
    it("2000 is correct", function () {
        assert.equal(CalcDownPayment(40000), 2000);
    });
    it("2500 is correct", function () {
        assert.equal(CalcDownPayment(50000), 2500);
    });
    it("7500 is correct", function () {
        assert.equal(CalcDownPayment(100000), 7500);
    });
    it("25000 is correct", function () {
        assert.equal(CalcDownPayment(250000), 25000);
    });
});

