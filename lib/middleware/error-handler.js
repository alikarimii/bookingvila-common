"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var custom_error_1 = require("../error/custom-error");
var logger_1 = require("../util/logger");
exports.errorHandler = function (err, req, res, next) {
    if (err instanceof custom_error_1.CustomError) {
        return res.status(err.statusCode).json({ errors: err.serializeError() });
    }
    logger_1.logger.error({ message: JSON.stringify(err), label: "errorHandler" });
    res.status(400).json({
        errors: [{ message: "Something went Wrong" }],
    });
};
