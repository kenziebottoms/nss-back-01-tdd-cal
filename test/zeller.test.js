"use strict";

const { assert } = require("chai");

const zeller = require("../zeller");

describe("zeller()", () => {
  it("is a function", () => {
    assert.isFunction(zeller.zeller);
  });
  it("returns an integer between 0 and 6 (inclusive)", () => {
    assert.isNumber(zeller.zeller());
    assert.isAtLeast(zeller.zeller(), 0);
    assert.isAtMost(zeller.zeller(), 6);
  });
});
describe("zeller(0,2018)", () => {
    it("should equal 1 (Monday)", () => {
      assert.equal(zeller.zeller(0,2018), 1);
    });
});