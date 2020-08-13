"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateLimiter = void 0;
var express_rate_limit_1 = __importDefault(require("express-rate-limit"));
var rate_limit_error_1 = require("../error/rate-limit-error");
exports.rateLimiter = function (max, timeMs) {
    if (timeMs === void 0) { timeMs = 30 * 60 * 1000; }
    return express_rate_limit_1.default({ max: max, windowMs: timeMs, handler: function (req, res, next) { throw new rate_limit_error_1.RateLimitError("Too many requests.please try later"); } });
};
