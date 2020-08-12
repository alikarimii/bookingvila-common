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
var RateLimitError = /** @class */ (function (_super) {
    __extends(RateLimitError, _super);
    function RateLimitError(message) {
        var _this = _super.call(this, message) || this;
        _this.statusCode = 429;
        Object.setPrototypeOf(_this, RateLimitError.prototype);
        return _this;
    }
    RateLimitError.prototype.serializeError = function () {
        return [{ message: this.message }];
    };
    return RateLimitError;
}(custom_error_1.CustomError));
exports.RateLimitError = RateLimitError;
