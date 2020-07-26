export abstract class CustomError extends Error {
  abstract statusCode: number = 400;
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
  }
  abstract serializeError(): { message: string; field?: string }[];
}
