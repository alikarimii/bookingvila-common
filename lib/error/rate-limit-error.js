"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateLimitError = void 0;
const custom_error_1 = require("./custom-error");
class RateLimitError extends custom_error_1.CustomError {
    constructor(message) {
        super(message);
        this.statusCode = 429;
        Object.setPrototypeOf(this, RateLimitError.prototype);
    }
    serializeError() {
        return [{ message: this.message }];
    }
}
exports.RateLimitError = RateLimitError;
