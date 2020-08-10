import { CustomError } from "./custom-error";

export class RateLimitError extends CustomError {
    statusCode = 429;
    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, RateLimitError.prototype);
    }

    serializeError() {
        return [{ message: this.message }];
    }
}
