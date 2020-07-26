"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var custom_error_1 = require("../error/custom-error");
exports.errorHandler = function (err, req, res, next) {
    if (err instanceof custom_error_1.CustomError) {
        return res.status(err.statusCode).json({ errors: err.serializeError() });
    }
    res.status(400).json({
        errors: [{ message: "Something went Wrong" }],
    });
};
