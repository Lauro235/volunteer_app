import * as pool  from "../../db_connection/connect"
import { Request } from "express";

const attachVolunteerIDToSession = async (req: Request) => {
  const { volunteerID } = req.params;
  const { date, slot } = req.body;
  await pool.query(`
  UPDATE sessions
    SET user_id = $1
    WHERE date = $2
      AND slot = $3
  RETURNING sessions.id;
  `, [volunteerID, date, slot])
} 

const addBookingEvent = async (req: Request) => {
  const { volunteerID } = req.params;
  const { date, slot } = req.body;
  await pool.query(`
  INSERT INTO booking_events( user_id, session_id, type ) 
  VALUES 
    ( $1, ( SELECT id FROM sessions WHERE sessions.date = $2 AND sessions.slot = $3 ), 'booked');
  `, [volunteerID, date, slot])
}

const conditionalBooking = async (availabilityRequest: boolean, req: Request): Promise<void | {status: 'booked' | 'error'}> => {
  if (availabilityRequest === true) {
    try {
      await addBookingEvent(req);
      await attachVolunteerIDToSession(req);
      return {
        status: 'booked'
      }
    }
    catch (error) {
      console.log(error);
      return {
        status: 'error'
      }
    }
  }
  else {
    throw new Error('Unable to complete booking.')
  }
}


export default conditionalBooking;