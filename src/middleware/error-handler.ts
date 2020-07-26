import { Request, Response, NextFunction } from "express";
import { CustomError } from "../error/custom-error";
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ errors: err.serializeError() });
  }
  res.status(400).json({
    errors: [{ message: "Something went Wrong" }],
  });
};
