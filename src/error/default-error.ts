import { CustomError } from "./custom-error"

export class DefaultError extends CustomError {
    statusCode = 400
    constructor(msg: string, code: number) {
        super(msg)
        this.statusCode = code
        this.message = msg
    }
    serializeError() {
        return [{ message: this.message }]
    }
}