export declare class Result<T> {
    isSuccess: boolean;
    isFailure: boolean;
    private _value;
    constructor(isSuccess: boolean, value?: T);
    getValue(): T;
    static ok<L, R>(value?: R): Result<R>;
    static fail<L, R>(error: L): Result<L>;
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
export declare const left: <L, A>(l: L) => Left<L, A>;
export declare const right: <L, A>(a: A) => Right<L, A>;
