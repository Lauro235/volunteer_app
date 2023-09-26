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
exports.userSessionInformation = void 0;
/**
 *
 * @param isBooked - an object with the request ID and the status of the slot
 * @param volunteerID
 * @returns Promise<string | undefined>
 */
const userSessionInformation = (isBooked, volunteerID) => __awaiter(void 0, void 0, void 0, function* () {
    const bookingResponse = yield isBooked;
    if (bookingResponse !== undefined) {
        switch (bookingResponse.bool) {
            case true: {
                if (bookingResponse.id === volunteerID) {
                    console.log("volunteer requesting is the owner");
                    return 'booked';
                }
                else {
                    console.log("volunteer requesting is not the owner");
                    return 'closed';
                }
                break;
            }
            case false: {
                console.log("volunteer is booking the slot!");
                return 'open';
            }
        }
    }
    else {
        return undefined;
    }
});
exports.userSessionInformation = userSessionInformation;
