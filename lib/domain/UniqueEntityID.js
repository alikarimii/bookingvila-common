"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueEntityID = void 0;
var Identifier_1 = require("./Identifier");
var mongoose_1 = require("mongoose");
var UniqueEntityID = /** @class */ (function (_super) {
    __extends(UniqueEntityID, _super);
    function UniqueEntityID(id) {
        return _super.call(this, id ? id : new mongoose_1.Types.ObjectId()) || this;
    }
    return UniqueEntityID;
}(Identifier_1.Identifier));
exports.UniqueEntityID = UniqueEntityID;
