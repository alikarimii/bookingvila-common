import expressRateLimit from "express-rate-limit";
import { RateLimitError } from "../error/rate-limit-error";

export const rateLimiter = (max: number) => {
    return expressRateLimit({ max, windowMs: 30 * 60 * 1000, handler: (req, res, next) => { throw new RateLimitError("Too many requests.please try later") } })
}