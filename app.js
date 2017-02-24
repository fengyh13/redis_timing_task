/**
 * Created by fyh13 on 16/11/2.
 */
"use strict";
require("babel-polyfill");

global.projectName = require('../package.json').name;

const Manage = require('../../pub');
global.Server = new Manage();
global.Config = require("../../pub/config");

require("./lib/redisServer");

console.log("redis server service is running...")
