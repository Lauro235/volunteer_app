"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDeepEqual = void 0;
function isDeepEqual(x, y) {
    const ok = Object.keys, tx = typeof x, ty = typeof y;
    return x && y && tx === 'object' && tx === ty ? (ok(x).length === ok(y).length &&
        ok(x).every(key => isDeepEqual(x[key], y[key]))) : (x === y);
}
exports.isDeepEqual = isDeepEqual;
