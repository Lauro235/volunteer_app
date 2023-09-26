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
exports.isBookedBoolean = void 0;
const connect_1 = require("../db/db_connection/connect");
const isBookedBoolean = (volunteerID, date, slot) => __awaiter(void 0, void 0, void 0, function* () {
    return yield connect_1.pool
        .query(`
  SELECT volunteer_id
  FROM sessions
  WHERE session_date = $1
  AND session_slot = $2; 
`, [date, slot])
        .then((response) => {
        return response.rows[0];
    })
        .then((data) => {
        return typeof data.volunteer_id === "number"
            ? true
            : data.volunteer_id === null
                ? false
                : undefined;
    })
        .catch((error) => {
        console.log(error);
        return undefined;
    });
});
exports.isBookedBoolean = isBookedBoolean;
