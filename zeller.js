"use strict";

// ASSUMPTION: we only want the weekday of the first day of the month
module.exports = (m, y) => {
  if (m < 3) {
    m += 12;
    y -= 1;
  }
  let h = 1;
  h += parseInt((13*(m+1))/5);
  h += y % 100;
  h += parseInt((y%100)/4);
  h += parseInt(y/400);
  h += 5 * parseInt(y/100);
  h %= 7;
  return parseInt(h);
};