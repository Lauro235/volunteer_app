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
/**
 *
 * @param volunteerID The ID that comes from the request object
 * @param date The date that comes from the request body
 * @param slot The slot that comes from the request body
 * @param pool The current pool session
 * @returns a boolean essentially, but wrapped up in an object to allow for the server to compare the request id to the id of the person holding the booking.
 */
const isBookedBoolean = (volunteerID, date, slot, pool) => __awaiter(void 0, void 0, void 0, function* () {
    // let thisDate = date;
    // let thisSlot = slot;
    return yield pool
        .query(`
  SELECT volunteer_id
  FROM sessions
  WHERE session_date = $1
  AND session_slot = $2; 
`, [date, slot])
        .then((response) => {
        if (response.rows.length === 0) {
            throw new Error("No session scheduled for this time.");
        }
        return response.rows[0];
    })
        .then((data) => {
        if (typeof data.volunteer_id === "number") {
            return {
                bool: true,
                id: data.volunteer_id
            };
        }
        else if (data.volunteer_id === null) {
            return {
                bool: false,
                id: volunteerID
            };
        }
        else {
            throw new Error("Error to be defined...");
        }
    })
        .catch((error) => {
        return error;
    });
});
exports.isBookedBoolean = isBookedBoolean;
