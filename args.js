"use strict";

const colors = require("colors/safe");
let { MONTHS } = require("./data");

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
    if (month && year) {
      return { month, year };
    } else {
      return false;
    }
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
  let yInt = parseInt(year);
  if (!!yInt && yInt < 100000 && yInt > 1754) {
    return yInt;
  } else if (yInt+2000 <= new Date().getFullYear()) {
    return yInt+2000;
  } else if (yInt+1900) {
    return yInt+1900;
  } else {
    return handle("Please supply a valid integer year between 9999 and 1754.");
  }
};
const validateMonth = month => {
  let mInt = parseInt(month);
  if (!!mInt && mInt < 13 && mInt > 0) {
    return mInt;
  } else if (typeof(month) == "string") {
    return isMonth(month);
  } else {
    return handle("Please supply a valid month.");
  }
};

const isMonth = str => {
  let match = MONTHS.find((m, index) => {
    if (m.indexOf(str.toLowerCase()) > -1) {
      return true;
    }
  });
  if (match) {
    return MONTHS.indexOf(match)+1;
  } else {
    return handle("Please supply a valid integer month between 1 and 12.");
  }
};