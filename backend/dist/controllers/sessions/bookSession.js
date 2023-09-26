"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookSession = void 0;
const bookSession = (volunteerID, date, slot, res, pool) => __awaiter(void 0, void 0, void 0, function* () {
    return yield pool
        .query(`
UPDATE sessions AS s
  SET volunteer_id = $1
WHERE session_date = $2
AND session_slot = $3; 
`, [volunteerID, date, slot])
        .catch((error) => {
        console.log(error);
    });
});
exports.bookSession = bookSession;
