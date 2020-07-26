import { CustomError } from "./custom-error";
import { ValidationError } from "joi";
export declare class RequestValidatorError extends CustomError {
    private errors;
    statusCode: number;
    constructor(errors: ValidationError);
    serializeError(): {
        message: string;
    }[];
}
