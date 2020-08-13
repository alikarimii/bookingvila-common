import expressRateLimit from "express-rate-limit";
import { RateLimitError } from "../error/rate-limit-error";

export const rateLimiter = (max: number, timeMs: number = 30 * 60 * 1000) => {
    return expressRateLimit({ max, windowMs: timeMs, handler: (req, res, next) => { throw new RateLimitError("Too many requests.please try later") } })
}
