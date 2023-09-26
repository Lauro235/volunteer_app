import { IBookingStatus } from "./isBookedBoolean"
import { isDeepStrictEqual } from "util"

/**
 * 
 * @param isBooked - an object with the request ID and the status of the slot
 * @param volunteerID 
 * @returns Promise<string | undefined>
 */

export const userSessionInformation = async (isBooked: Promise<IBookingStatus | undefined>, volunteerID:number): Promise<'booked' |  'closed' | 'open' | undefined> => {
  const bookingResponse = await isBooked;

    if (bookingResponse !== undefined) {
      switch(bookingResponse.bool) {
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
          return 'open'
        }
      }
    } else {
      return undefined;
    }
}