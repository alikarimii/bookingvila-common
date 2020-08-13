export class Result<T> {
    public isFailure: boolean;
    private _value: T;

    public constructor(public isSuccess: boolean, value?: T) {
        this.isFailure = !isSuccess;
        this._value = value as T;
        Object.freeze(this);
    }

    public getValue(): T {
        return this._value;
    }

    public static ok<L, R>(value?: R): Result<R> {
        return new Result<R>(true, value);
    }

    public static fail<L, R>(error: L): Result<L> {
        return new Result<L>(false, error);
    }

    public static combine(results: Result<any>[]): Result<any> {
        for (let result of results) {
            if (result.isFailure) return result;
        }
        return Result.ok();
    }
}

export type Either<L, A> = Left<L, A> | Right<L, A>;

export class Left<L, A> {
    readonly value: L;

    constructor(value: L) {
        this.value = value;
    }

    isLeft(): this is Left<L, A> {
        return true;
    }

    isRight(): this is Right<L, A> {
        return false;
    }
}

export class Right<L, A> {
    readonly value: A;

    constructor(value: A) {
        this.value = value;
    }

    isLeft(): this is Left<L, A> {
        return false;
    }

    isRight(): this is Right<L, A> {
        return true;
    }
}

export const left = <L, A>(l: L): Left<L, A> => {
    return new Left(l);
};

export const right = <L, A>(a: A): Right<L, A> => {
    return new Right<L, A>(a);
};
