"use strict";

let args = require("./args")(process.argv);
console.log(args);
require("./zeller")(args);