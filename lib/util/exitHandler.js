"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exitHandler = void 0;
function exitHandler(options, exitCode) {
    if (options.cleanup)
        console.log('clean');
    if (exitCode || exitCode === 0)
        console.log(exitCode);
    if (options.exit)
        process.exit();
}
exports.exitHandler = exitHandler;
