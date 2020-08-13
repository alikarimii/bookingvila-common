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
exports.ForbiddenError = void 0;
var custom_error_1 = require("./custom-error");
var ForbiddenError = /** @class */ (function (_super) {
    __extends(ForbiddenError, _super);
    function ForbiddenError(message) {
        var _this = _super.call(this, message) || this;
        _this.statusCode = 403;
        Object.setPrototypeOf(_this, ForbiddenError.prototype);
        return _this;
    }
    ForbiddenError.prototype.serializeError = function () {
        return [{ message: this.message }];
    };
    return ForbiddenError;
}(custom_error_1.CustomError));
exports.ForbiddenError = ForbiddenError;
