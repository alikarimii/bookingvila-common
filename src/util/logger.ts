import { createLogger, transports, format } from "winston";
import Daily from "winston-daily-rotate-file";
import fs from "fs";
import { LOG_DIR, NODE_ENV, SERVICE_NAME } from "./secret";

const myFormat = format.printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

var logger = createLogger({
  format: format.combine(format.timestamp(), myFormat),
  transports: [new transports.Console()],
});
if (NODE_ENV == "production") {
  try {
    fs.existsSync(LOG_DIR) || fs.mkdirSync(LOG_DIR);
    var transport = new Daily({
      dirname: LOG_DIR,
      filename: `${SERVICE_NAME}-%DATE%.log`,
      datePattern: "YYYY-MM-DD-HH",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "14d",
    });
    logger.clear().add(transport);
  } catch (error) {
    console.log(error);
  }
}

export { logger };
