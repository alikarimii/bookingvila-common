interface IUseCaseError {
    message: string;
    code: number;
}

export abstract class UseCaseError implements IUseCaseError {
    constructor(public readonly message: string, public readonly code: number) { }
}