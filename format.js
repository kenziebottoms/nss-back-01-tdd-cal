"use strict";

const _ = require("lodash");

const zeller = require("./zeller");
const { DAYS_IN_MONTHS, MONTHS } = require("./data");
const { isLeapYear } = require("./helpers");

// take the month and year, return a grid for printing
// ASSUMPTION: month parameter is 1-indexed (1=Jan, 2=Feb, etc.)
module.exports.format = ({ month, year }) => {
  // resets the 0 index from Saturday to Sunday for my own sanity
  let firstDay = zeller({ month, year }) - 1;

  let grid = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  let days_in_months = DAYS_IN_MONTHS[month - 1];
  if (isLeapYear(year) && month == 2) {
    days_in_months = 29;
  }

  let weeks = (days_in_months + firstDay) / 7;
  // blank spaces
  for (let i = 0; i < firstDay; i++) {
    grid.push("  ");
  }
  // 1-digit numbers
  for (let i = 1; i < 10; i++) {
    grid.push(` ${i}`);
  }
  // 2-digit numbers (the rest of them)
  for (let i = 10; i <= days_in_months; i++) {
    grid.push(`${i}`);
  }

  // return in weeklong row chunks
  return _.chunk(grid, 7);
};

// print the grid nice n square
module.exports.print = (grid, { month, year }) => {
  let title = `${MONTHS[month - 1]} ${year}\n`;
  // capitalize first letter
  title = title[0].toUpperCase() + title.slice(1);

  let str = "\n";

  // center the title
  let margin = (21 - title.length) / 2;
  for (let i = 0; i < margin; i++) {
    str += " ";
  }

  str += `${title}\n`;

  // put a space between items and a new line between rows
  for (let y = 0; y < grid.length; y++) {
    str += `${grid[y].join(" ")}\n`;
  }

  console.log(str);
};