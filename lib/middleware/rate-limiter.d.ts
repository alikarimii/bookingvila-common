import expressRateLimit from "express-rate-limit";
export declare const rateLimiter: (max: number) => expressRateLimit.RateLimit;
