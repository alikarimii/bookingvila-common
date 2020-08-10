import expressRateLimit from "express-rate-limit";

export const rateLimiter = (max: number) => {
    return expressRateLimit({ max, windowMs: 30 * 60 * 1000 })
}