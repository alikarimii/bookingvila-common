import { NextFunction, Request, Response } from "express"

export function addHeader(name: string, value: string | string[]) {
    return (req: Request, res: Response, next: NextFunction) => {
        req.headers[name] = value.toString()
        next()
    }
}