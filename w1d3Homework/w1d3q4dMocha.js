"use strict";
const assert=require("assert");

const functionModule=require("./w1d3Question4d.js");
const calcDistance=functionModule.calcDistance;

describe("CalcDistance returns the distance of 2 points", function () {
    it("7.07 is correct", function () {
        assert.equal(calcDistance(0,0,5,5), 7.07);
    });
});