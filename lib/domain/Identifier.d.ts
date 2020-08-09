export declare class Identifier<T> {
    private value;
    constructor(value: T);
    equals(id?: Identifier<T>): boolean;
    toString(): string;
    /**
     * Return raw value of identifier
     */
    toValue(): T;
}
