"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueEntityID = void 0;
const Identifier_1 = require("./Identifier");
const mongoose_1 = require("mongoose");
class UniqueEntityID extends Identifier_1.Identifier {
    constructor(id) {
        super(id ? id : new mongoose_1.Types.ObjectId());
    }
}
exports.UniqueEntityID = UniqueEntityID;
