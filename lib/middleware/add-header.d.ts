import { NextFunction, Request, Response } from "express";
export declare function addHeader(name: string, value: string | string[]): (req: Request, res: Response, next: NextFunction) => void;
