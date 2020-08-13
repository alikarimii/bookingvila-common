import { CustomError } from "./custom-error";
export declare class DefaultError extends CustomError {
    statusCode: number;
    constructor(msg: string, code: number);
    serializeError(): {
        message: string;
    }[];
}
