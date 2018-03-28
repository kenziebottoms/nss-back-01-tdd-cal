"use strict";

let args = require("./args")(process.argv);
let { format, print } = require("./format");
print(format(args), args);