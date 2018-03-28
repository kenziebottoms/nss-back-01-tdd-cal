"use strict";

const { assert } = require("chai");
const args = require("../args");

describe("args() w/ various argument counts", () => {
  describe("2 arguments", () => {
    it("Should parse valid integers month and year", () => {
      assert.isNotFalse(args([,,3,2018]));
    });
  });
  describe("3 or more arguments", () => {
    it("should throw an error", () => {
      assert.isFalse(args([,,1,2,3]));
    });
  });
  describe("1 argument", () => {
    it("should throw an error", () => {
      assert.isFalse(args([,,1]));
    });
  });
});

describe("args() with string arguments", () => {
  describe("string month", () => {
    it("should accept a string month", () => {
      assert.isNotFalse(args([,,"January", 2018]));
    });
  });
  describe("jan, January should be parsed as 1", () => {
    it("should accept a string month", () => {    
      assert.equal(args([,,"January"]), 0);
      assert.equal(args([,,"january"]), 0);
      assert.equal(args([,,"Jan"]), 0);
      assert.equal(args([,,"jan"]), 0);
    });
  });
});