import { Identifier } from "./Identifier";
import { Types } from "mongoose";
export declare class UniqueEntityID extends Identifier<Types.ObjectId> {
    constructor(id?: Types.ObjectId);
}
