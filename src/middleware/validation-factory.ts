import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";
import { RequestValidatorError } from "../error/request-validator";

export enum ObjType {
  "params",
  "query",
  "body",
}

export function requestValidator<T extends Schema>(schema: T, obj?: ObjType) {
  if (!schema) return;
  return (req: Request, res: Response, next: NextFunction) => {
    let body: any;
    switch (obj) {
      case ObjType.params:
        body = req.params;
        break;
      case ObjType.query:
        body = req.query;
        break;
      default:
        body = req.body;
        break;
    }

    const verify = schema.validate(body, {
      allowUnknown: false,
    });
    if (verify.error) {
      throw new RequestValidatorError(verify.error);
    }
    next();
  };
}
