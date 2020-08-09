import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";
export declare enum ObjType {
    "params" = 0,
    "query" = 1,
    "body" = 2
}
export declare function requestValidator(schema: ObjectSchema, obj?: ObjType): (req: Request, res: Response, next: NextFunction) => void;
