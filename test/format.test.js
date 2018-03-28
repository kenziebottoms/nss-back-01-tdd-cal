"use strict";

const format = require("../format");
const { assert } = require("chai");
const jan2000 = { month: 1, year: 2000 };
const _ = require("lodash");

describe("the header/first row", () => {
  it("Should look like this: Su Mo Tu We Th Fr Sa", () => {
    assert.deepEqual(format.format(jan2000)[0],
      ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]);
  });
});

describe("Each item in the grid", () => {
  it("Should be a 2-character string", () => {
    let grid = format.format(jan2000);
    grid.forEach(row => {
      row.forEach(item => {
        assert.equal(item.length, 2);
      })
    })
  });
});

describe("The first non-space item in the grid", () => {
  it("'01' should be found between indices 7 and 13", () => {
    let grid = format.format(jan2000);
    let list = _.flatten(grid);
    let spaceOnly = new RegExp(/[\s]*/);
    assert.isAtLeast(list.indexOf(" 1"), 7);
    assert.isAtMost(list.indexOf(" 1"), 13);
  });
});

describe("Leap year shenanigans", () => {
  it("Feb 2008 should have 29 days", () => {
    let grid = format.format({ month: 2, year: 2008 });
    let list = _.flatten(grid);
    assert.isAtLeast(list.indexOf("29"), 0);
  });
  it("Feb 1900 should have 28 days", () => {
    let grid = format.format({ month: 2, year: 1900 });
    let list = _.flatten(grid);
    assert.equal(list.indexOf("29"), -1);
  });
});