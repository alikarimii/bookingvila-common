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
exports.DefaultError = void 0;
var custom_error_1 = require("./custom-error");
var DefaultError = /** @class */ (function (_super) {
    __extends(DefaultError, _super);
    function DefaultError(msg, code) {
        var _this = _super.call(this, msg) || this;
        _this.statusCode = 400;
        _this.statusCode = code;
        _this.message = msg;
        Object.setPrototypeOf(_this, DefaultError.prototype);
        return _this;
    }
    DefaultError.prototype.serializeError = function () {
        return [{ message: this.message }];
    };
    return DefaultError;
}(custom_error_1.CustomError));
exports.DefaultError = DefaultError;
