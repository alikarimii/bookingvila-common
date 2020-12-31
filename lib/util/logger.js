"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = require("winston");
const winston_daily_rotate_file_1 = __importDefault(require("winston-daily-rotate-file"));
const fs_1 = __importDefault(require("fs"));
const secret_1 = require("./secret");
const myFormat = winston_1.format.printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});
var logger = winston_1.createLogger({
    format: winston_1.format.combine(winston_1.format.timestamp(), myFormat),
    transports: [new winston_1.transports.Console()],
});
exports.logger = logger;
if (secret_1.NODE_ENV == "production") {
    try {
        fs_1.default.existsSync(secret_1.LOG_DIR) || fs_1.default.mkdirSync(secret_1.LOG_DIR);
        var transport = new winston_daily_rotate_file_1.default({
            dirname: secret_1.LOG_DIR,
            filename: `${secret_1.SERVICE_NAME}-%DATE%.log`,
            datePattern: "YYYY-MM-DD-HH",
            zippedArchive: true,
            maxSize: "20m",
            maxFiles: "14d",
        });
        logger.clear().add(transport);
    }
    catch (error) {
        console.log(error);
    }
}
