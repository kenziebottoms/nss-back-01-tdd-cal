"use strict";

const { assert } = require("chai");
const args = require("../args");

describe("args", () => {
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