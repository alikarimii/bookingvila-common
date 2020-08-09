import { SchemaLike } from "joi";

export type schemaCheck<T> = {
  [key in keyof T]: SchemaLike | SchemaLike[];
};
