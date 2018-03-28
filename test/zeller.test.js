"use strict";

const { assert } = require("chai");

const zeller = require("../zeller");

describe("general zeller() execution", () => {
  it("is a function", () => {
    assert.isFunction(zeller);
  });
  it("returns an integer between 0 and 6 (inclusive)", () => {
    assert.isNumber(zeller(1,2000));
    assert.isAtLeast(zeller(1,2000), 0);
    assert.isAtMost(zeller(1,2000), 6);
  });
});
describe("zeller(1,2000)", () => {
  it("should equal 0 (Saturday)", () => {
    assert.equal(zeller(1, 2000), 0);
  });
});
describe("zeller(3,2000)", () => {
  it("should equal 4 (Wednesday)", () => {
    assert.equal(zeller(3, 2000), 4);
  });
});