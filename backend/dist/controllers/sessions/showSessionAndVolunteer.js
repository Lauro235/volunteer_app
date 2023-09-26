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
exports.showSessionAndVolunteer = void 0;
const showSessionAndVolunteer = (poolSession, date, slot) => __awaiter(void 0, void 0, void 0, function* () {
    return poolSession
        .query(`
      SELECT TO_CHAR(s.session_date, 'YYYY-MM-DD') as session_date, s.session_slot,
      v.first_name, v.surname
      FROM sessions AS s
      INNER JOIN volunteers AS v
      ON s.volunteer_id = v.id
      WHERE s.session_date = $1
      AND s.session_slot = $2`, [date, slot])
        .then((data) => {
        return data.rows[0];
    }).catch((error) => {
        console.log(error);
        return error;
    });
});
exports.showSessionAndVolunteer = showSessionAndVolunteer;
