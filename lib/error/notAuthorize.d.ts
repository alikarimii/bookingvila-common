import { CustomError } from "./custom-error";
export declare class UnAuthorizedError extends CustomError {
    statusCode: number;
    constructor(message: string);
    serializeError(): {
        message: string;
    }[];
}
