import { CustomError } from "./custom-error";
import { ValidationError } from "joi";

export class RequestValidatorError extends CustomError {
  statusCode = 400;
  constructor(private errors: ValidationError) {
    super("Bad request");
    Object.setPrototypeOf(this, RequestValidatorError.prototype);
  }
  serializeError() {
    return this.errors.details.map((er) => {
      return {
        message: er.message,
      };
    });
  }
}
