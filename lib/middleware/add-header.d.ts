/// <reference types="qs" />
import { NextFunction, Request, Response } from "express";
export declare function addHeader(name: string, value: string | string[]): (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs>, res: Response<any>, next: NextFunction) => void;
