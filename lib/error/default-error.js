"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultError = void 0;
const custom_error_1 = require("./custom-error");
class DefaultError extends custom_error_1.CustomError {
    constructor(msg, code) {
        super(msg);
        this.statusCode = 400;
        this.statusCode = code;
        this.message = msg;
        Object.setPrototypeOf(this, DefaultError.prototype);
    }
    serializeError() {
        return [{ message: this.message }];
    }
}
exports.DefaultError = DefaultError;
