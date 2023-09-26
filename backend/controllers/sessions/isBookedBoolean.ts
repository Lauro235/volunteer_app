import { Pool } from "pg";

export interface IBookingStatus {
  bool: boolean;
  id: number;
}

/**
 * 
 * @param volunteerID The ID that comes from the request object
 * @param date The date that comes from the request body
 * @param slot The slot that comes from the request body
 * @param pool The current pool session
 * @returns a boolean essentially, but wrapped up in an object to allow for the server to compare the request id to the id of the person holding the booking.
 */

export const isBookedBoolean = async (volunteerID: number, date: string, slot: string, pool: Pool): Promise<IBookingStatus | undefined> => {

  // let thisDate = date;
  // let thisSlot = slot;
  
  return await pool
  .query(
    `
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
      }
      
    }
    else if (data.volunteer_id === null) {
      return {
        bool: false,
        id: volunteerID
      }
    }
    else {
      throw new Error("Error to be defined...");
    }
  })
  .catch((error) => {
    return error;
  });
}