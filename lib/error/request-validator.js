"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestValidatorError = void 0;
const custom_error_1 = require("./custom-error");
class RequestValidatorError extends custom_error_1.CustomError {
    constructor(errors) {
        super("Bad request");
        this.errors = errors;
        this.statusCode = 400;
        Object.setPrototypeOf(this, RequestValidatorError.prototype);
    }
    serializeError() {
        return this.errors.details.map((er) => {
            return {
                message: er.message,
            };
        });
    }
}
exports.RequestValidatorError = RequestValidatorError;
