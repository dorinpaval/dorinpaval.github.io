"use strict";
const assert = require("assert");

const functionModule = require("./w1d3Question4b.js");
const sumDigits = functionModule.sumDigits;
const multDigits = functionModule.multDigits;

describe("SumDigits returns the digits' sum", function () {
    it("10 is correct", function () {
        assert.equal(sumDigits(1234), 10);
    });
    it("4 is correct", function () {
        assert.equal(sumDigits(103), 4);
    });
    it("8 is correct", function () {
        assert.equal(sumDigits(8), 8);
    });
    it("24 is correct", function () {
        assert.equal(multDigits(1234), 24);
    });
    it("36 is correct", function () {
        assert.equal(multDigits(2323), 36);
    });
    it("8 is correct", function () {
        assert.equal(multDigits(8), 8);
    });
});

