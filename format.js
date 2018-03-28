"use strict";

const zeller = require("./zeller");
const { DAYS_IN_MONTHS, MONTHS } = require("./data");
const _ = require("lodash");

module.exports.format = ({ month, year }) => {
  let firstDay = zeller({ month, year });
  firstDay -= 1;
  let grid = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  let days_in_months = DAYS_IN_MONTHS[month - 1];
  if (month == 2) {
    if (year % 4 == 0) {
      if (!(year % 100 == 0 && year % 400 != 0)) {
        days_in_months = 29;
      }
    }
  }
  let weeks = (days_in_months + firstDay) / 7;
  for (let i = 0; i < firstDay; i++) {
    grid.push("  ");
  }
  for (let i = 1; i < 10; i++) {
    grid.push(` ${i}`);
  }
  for (let i = 10; i <= days_in_months; i++) {
    grid.push(`${i}`);
  }
  return _.chunk(grid, 7);
  // return 2-d array of blocks
};

module.exports.print = (grid, { month, year }) => {
  let title = `${MONTHS[month - 1]} ${year}\n`;
  title = title[0].toUpperCase() + title.slice(1);
  let margin = (21 - title.length) / 2;
  let str = "\n";
  for (let i = 0; i < margin; i++) {
    str += " ";
  }
  str += `${title}\n`;
  for (let y = 0; y < grid.length; y++) {
    str += `${grid[y].join(" ")}\n`;
  }
  console.log(str);
};