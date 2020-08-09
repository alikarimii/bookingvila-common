import { SchemaLike } from "joi";
export declare type schemaCheck<T> = {
    [key in keyof T]: SchemaLike | SchemaLike[];
};
