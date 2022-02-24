"use strict";

const assert= require ("assert");
const functionModule= require("./w1d3Question4c.js");
const convertFahrenheit= functionModule.convertFahrenheit;

describe("ConvertFahrenheit returns the temp in Celsius", function () {
    it("0 is correct", function () {
        assert.equal(convertFahrenheit(32), 0);
    });
    it("-17.7778 is correct", function () {
        assert.equal(convertFahrenheit(0), -17.7778);
    });
    it("100 is correct", function () {
        assert.equal(convertFahrenheit(212), 100);
    });
});