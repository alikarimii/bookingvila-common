"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var custom_error_1 = require("./custom-error");
var RequestValidatorError = /** @class */ (function (_super) {
    __extends(RequestValidatorError, _super);
    function RequestValidatorError(errors) {
        var _this = _super.call(this, "Bad request") || this;
        _this.errors = errors;
        _this.statusCode = 400;
        Object.setPrototypeOf(_this, RequestValidatorError.prototype);
        return _this;
    }
    RequestValidatorError.prototype.serializeError = function () {
        return this.errors.details.map(function (er) {
            return {
                message: er.message,
            };
        });
    };
    return RequestValidatorError;
}(custom_error_1.CustomError));
exports.RequestValidatorError = RequestValidatorError;
