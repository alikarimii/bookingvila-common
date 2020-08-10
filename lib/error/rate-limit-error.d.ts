import { CustomError } from "./custom-error";
export declare class RateLimitError extends CustomError {
    statusCode: number;
    constructor(message: string);
    serializeError(): {
        message: string;
    }[];
}
