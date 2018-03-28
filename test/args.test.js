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

describe("args() with various month arguments", () => {
  describe("string month", () => {
    it("should accept a string month", () => {
      assert.isNotFalse(args([,,"January", 2018]));
    });
  });
  describe("jan, January should be parsed as 1", () => {
    it("should accept a string month", () => {
      assert.equal(args([,,"January",2018]).month, 1);
      assert.equal(args([,,"january",2018]).month, 1);
      assert.equal(args([,,"Jan",2018]).month, 1);
      assert.equal(args([,,"jan",2018]).month, 1);
    });
  });
});

describe("args() with various year arguments", () => {
  describe("two-digit years should be parsed into 4 digits", () => {
    it("args([,,1,18]) should be parsed as [,,1,2018]", () => {
      assert.equal(args([,,1,18]).year, 2018);
      assert.equal(args([,,1,96]).year, 1996);
    });
  });
});