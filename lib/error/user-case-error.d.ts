interface IUseCaseError {
    message: string;
    code: number;
}
export declare abstract class UseCaseError implements IUseCaseError {
    readonly message: string;
    readonly code: number;
    constructor(message: string, code: number);
}
export {};
