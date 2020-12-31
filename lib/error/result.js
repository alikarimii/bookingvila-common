"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.right = exports.left = exports.Right = exports.Left = exports.Result = void 0;
class Result {
    constructor(isSuccess, value) {
        this.isSuccess = isSuccess;
        this.isFailure = !isSuccess;
        this._value = value;
        Object.freeze(this);
    }
    getValue() {
        return this._value;
    }
    static ok(value) {
        return new Result(true, value);
    }
    static fail(error) {
        return new Result(false, error);
    }
    static combine(results) {
        for (let result of results) {
            if (result.isFailure)
                return result;
        }
        return Result.ok();
    }
}
exports.Result = Result;
class Left {
    constructor(value) {
        this.value = value;
    }
    isLeft() {
        return true;
    }
    isRight() {
        return false;
    }
}
exports.Left = Left;
class Right {
    constructor(value) {
        this.value = value;
    }
    isLeft() {
        return false;
    }
    isRight() {
        return true;
    }
}
exports.Right = Right;
exports.left = (l) => {
    return new Left(l);
};
exports.right = (a) => {
    return new Right(a);
};
