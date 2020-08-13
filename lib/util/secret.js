"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVICE_NAME = exports.LOG_DIR = exports.NODE_ENV = void 0;
exports.NODE_ENV = process.env.NODE_ENV || "development";
exports.LOG_DIR = process.env.LOG_DIR || "/home/node/app/log";
exports.SERVICE_NAME = process.env.SERVICE_NAME || "test";
