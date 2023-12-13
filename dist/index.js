"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentDate = void 0;
function getCurrentDate() {
    const currentDate = new Date();
    return currentDate.toDateString();
}
exports.getCurrentDate = getCurrentDate;
