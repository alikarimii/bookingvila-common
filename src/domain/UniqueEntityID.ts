import { Identifier } from "./Identifier";
import { Types } from "mongoose";

export class UniqueEntityID extends Identifier<Types.ObjectId> {
  constructor(id?: Types.ObjectId) {
    super(id ? id : new Types.ObjectId());
  }
}
