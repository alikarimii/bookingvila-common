"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestValidator = exports.ObjType = void 0;
const request_validator_1 = require("../error/request-validator");
var ObjType;
(function (ObjType) {
    ObjType[ObjType["params"] = 0] = "params";
    ObjType[ObjType["query"] = 1] = "query";
    ObjType[ObjType["body"] = 2] = "body";
})(ObjType = exports.ObjType || (exports.ObjType = {}));
function requestValidator(schema, obj) {
    return (req, res, next) => {
        let body;
        switch (obj) {
            case ObjType.params:
                body = req.params;
                break;
            case ObjType.query:
                body = req.query;
                break;
            default:
                body = req.body;
                break;
        }
        const verify = schema.validate(body, {
            allowUnknown: false,
        });
        if (verify.error) {
            throw new request_validator_1.RequestValidatorError(verify.error);
        }
        req.body.joi = verify.value;
        next();
    };
}
exports.requestValidator = requestValidator;
