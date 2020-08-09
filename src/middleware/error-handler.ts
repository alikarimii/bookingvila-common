import { Request, Response, NextFunction } from "express";
import { CustomError } from "../error/custom-error";
import { logger } from "../util/logger";
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ errors: err.serializeError() });
  }
  logger.error({ message: JSON.stringify(err), label: "errorHandler" })
  res.status(400).json({
    errors: [{ message: "Something went Wrong" }],
  });
};
