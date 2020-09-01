"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (value, helpers) {
    value = value
        .replace(/۰/g, '0')
        .replace(/۱/g, '1')
        .replace(/۲/g, '2')
        .replace(/۳/g, '3')
        .replace(/۴/g, '4')
        .replace(/۵/g, '5')
        .replace(/۶/g, '6')
        .replace(/۷/g, '7')
        .replace(/۸/g, '8')
        .replace(/۹/g, '9');
    // Throw an error (will be replaced with 'any.custom' error)
    if (value === '' || !value)
        return undefined;
    var L = value.length;
    if (L < 8 || parseInt(value, 10) == 0)
        throw new Error('lenght must be 10');
    value = ('0000' + value).substr(L + 4 - 10);
    if (parseInt(value.substr(3, 6), 10) == 0)
        throw new Error('code not valid');
    var c = parseInt(value.substr(9, 1), 10);
    var s = 0;
    for (var i = 0; i < 9; i++)
        s += parseInt(value.substr(i, 1), 10) * (10 - i);
    s = s % 11;
    if ((s < 2 && c == s) || (s >= 2 && c == (11 - s)))
        return value;
    throw new Error('code not valid');
});
