"use strict";
exports.__esModule = true;
exports.logger = void 0;
var pino_1 = require("pino");
exports.logger = (0, pino_1["default"])({
    name: 'TS-DNS',
    level: 'debug'
});
