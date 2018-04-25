/// <reference path="../../lib/index.d.ts" />

import Events = require("../../lib/main.js");

new Events().on("error", (err: Error) => {
  console.log(err);
}).on("test", (arg1: string, arg2: string, arg3: string) => {
  console.log(arg1, arg2, arg3);
}).emit("test", "arg1", "arg2", "arg3").emit("test2");