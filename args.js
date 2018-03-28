"use strict";

let colors = require("colors/safe");

module.exports = argv => {
  let [,,...args] = argv;
  
  let month, year;
  
  if (args.length == 0) {
    month = new Date().getMonth() + 1;
    year = new Date().getFullYear();
    return { month, year };    
  }

  if (args.length == 1) {
    return handle("Please supply two valid integer arguments, or none.");
  }

  if (args.length == 2) {
    month = validateMonth(args[0]);
    year = validateYear(args[1]);
    return { month, year };
  }

  if (args.length > 2) {
    return handle("Please supply only two valid integer arguments.");    
  }
}

const handle = err => {
  console.log(colors.red(err));
  console.log(colors.red(`usage: node cal.js [<month> <year>]`));
  return false;
};

const validateYear = year => {
  year = parseInt(year);
  if (year == year && year < 100000 && year > 1754) {
    return year;
  } else {
    return handle("Please supply a valid integer year between 9999 and 1754.");
  }
};
const validateMonth = month => {
  month = parseInt(month);
  if (month == month && month < 13 && month > 0) {
    return month;
  } else {
    return handle("Please supply a valid integer month between 1 and 12.");
  }
};