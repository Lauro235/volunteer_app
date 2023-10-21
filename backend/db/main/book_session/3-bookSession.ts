import * as pool from "../../db_connection/connect";
import { Request, Response } from "express";

const attachVolunteerIDToSession = async (req: Request) => {
  const { volunteerID } = req.params;
  const { date, slot } = req.body;
  await pool.query(
    `
  UPDATE sessions
    SET user_id = $1
    WHERE date = $2
      AND slot = $3
  RETURNING sessions.id;
  `,
    [volunteerID, date, slot]
  );
};

const addBookingEvent = async (req: Request) => {
  const { volunteerID } = req.params;
  const { date, slot } = req.body;
  await pool.query(
    `
  INSERT INTO booking_events( user_id, session_id, type ) 
  VALUES 
    ( $1, ( SELECT id FROM sessions WHERE sessions.date = $2 AND sessions.slot = $3 ), 'booked');
  `,
    [volunteerID, date, slot]
  );
};

const bookSession = async (
  req: Request,
  res: Response
): Promise<void | { status: "booked" | "error" }> => {
  try {
    await addBookingEvent(req);
    await attachVolunteerIDToSession(req);
    res.status(200).json({
      status: "success, you have booked the session!",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "error",
    });
  }
};

export default bookSession;
