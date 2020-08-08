export interface IError {
    message: string;
    code: number;
}
export declare class Result<T> {
    isSuccess: boolean;
    isFailure: boolean;
    readonly error: IError;
    private _value;
    constructor(isSuccess: boolean, error?: IError, value?: T);
    getValue(): T;
    errorValue(): {
        errors: IError[];
    };
    static ok<U>(value?: U): Result<U>;
    static fail<U>(error: IError): Result<U>;
    static combine(results: Result<any>[]): Result<any>;
}
export declare type Either<L, A> = Left<L, A> | Right<L, A>;
export declare class Left<L, A> {
    readonly value: L;
    constructor(value: L);
    isLeft(): this is Left<L, A>;
    isRight(): this is Right<L, A>;
}
export declare class Right<L, A> {
    readonly value: A;
    constructor(value: A);
    isLeft(): this is Left<L, A>;
    isRight(): this is Right<L, A>;
}
export declare const left: <L, A>(l: L) => Either<L, A>;
export declare const right: <L, A>(a: A) => Either<L, A>;
