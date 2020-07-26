import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";
export declare enum ObjType {
    "params" = 0,
    "query" = 1,
    "body" = 2
}
export declare function requestValidator<T extends Schema>(schema: T, obj?: ObjType): ((req: Request, res: Response, next: NextFunction) => void) | undefined;
