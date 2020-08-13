"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.right = exports.left = exports.Right = exports.Left = exports.Result = void 0;
var Result = /** @class */ (function () {
    function Result(isSuccess, value) {
        this.isSuccess = isSuccess;
        this.isFailure = !isSuccess;
        this._value = value;
        Object.freeze(this);
    }
    Result.prototype.getValue = function () {
        return this._value;
    };
    Result.ok = function (value) {
        return new Result(true, value);
    };
    Result.fail = function (error) {
        return new Result(false, error);
    };
    Result.combine = function (results) {
        for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
            var result = results_1[_i];
            if (result.isFailure)
                return result;
        }
        return Result.ok();
    };
    return Result;
}());
exports.Result = Result;
var Left = /** @class */ (function () {
    function Left(value) {
        this.value = value;
    }
    Left.prototype.isLeft = function () {
        return true;
    };
    Left.prototype.isRight = function () {
        return false;
    };
    return Left;
}());
exports.Left = Left;
var Right = /** @class */ (function () {
    function Right(value) {
        this.value = value;
    }
    Right.prototype.isLeft = function () {
        return false;
    };
    Right.prototype.isRight = function () {
        return true;
    };
    return Right;
}());
exports.Right = Right;
exports.left = function (l) {
    return new Left(l);
};
exports.right = function (a) {
    return new Right(a);
};
