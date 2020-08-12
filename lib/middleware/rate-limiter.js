"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_rate_limit_1 = __importDefault(require("express-rate-limit"));
var rate_limit_error_1 = require("../error/rate-limit-error");
exports.rateLimiter = function (max) {
    return express_rate_limit_1.default({ max: max, windowMs: 30 * 60 * 1000, handler: function (req, res, next) { throw new rate_limit_error_1.RateLimitError("Too many requests.please try later"); } });
};
