import expressRateLimit from "express-rate-limit";
export declare const rateLimiter: (max: number, timeMs?: number) => expressRateLimit.RateLimit;
