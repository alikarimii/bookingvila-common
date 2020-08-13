"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addHeader = void 0;
function addHeader(name, value) {
    return function (req, res, next) {
        req.headers[name] = value.toString();
        next();
    };
}
exports.addHeader = addHeader;
