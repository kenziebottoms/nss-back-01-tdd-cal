"use strict";

const { assert } = require("chai");

const zeller = require("../zeller");

describe("zeller()", () => {
  it("is a function", () => {
    assert.isFunction(zeller.zeller());
  });
});