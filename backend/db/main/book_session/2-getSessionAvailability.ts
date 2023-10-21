import * as pool from "../../db_connection/connect";
import { NextFunction, Request, Response } from "express";

export interface IAvailabilityRequest {
  id: number;
  date: string;
  slot: string;
  user_id: null | number;
  status: string;
}

const query = async (
  req: Request,
  res: Response
): Promise<true | "booked" | "unavailable" | void> => {
  const { volunteerID } = req.params;
  const { date, slot } = req.body;

  const response = await pool.query(
    `
  SELECT s.id, s.date, s.slot, s.user_id,
  CASE
      WHEN s.user_id IS NULL THEN 'available'
      WHEN s.user_id = $1 THEN 'booked' 
      WHEN (s.user_id IS NOT NULL AND s.user_id != $1) THEN 'unavailable'
  END AS status
  FROM sessions AS s
    INNER JOIN attendance_types AS a
      ON s.attendance_id = a.id
      INNER JOIN time_keeping_types AS t
      ON s.time_keeping_id = t.id
  WHERE s.date = $2
  AND s.slot = $3;
  `,
    [volunteerID, date, slot]
  );

  console.log(response.rows[0]);

  // return response.rows[0].user_id === null ? true : false;
  if (response.rows[0].user_id === null) {
    return true;
  } else {
    if (response.rows[0].user_id === Number(volunteerID)) {
      return "booked";
    } else {
      return "unavailable";
    }
  }
};

/**
 * @description As a volunteer I want to book an available session. This function takes the slot and date from the request as well as the id from the reqest parameter and checks it against the latest associated booking associated with the session.
 * @param id - number represents the volunteer id, Request. object.
 * @returns true if available and false if otherwise
 * @summary ✅
*/

export const getSessionAvailability = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const availability = await query(req, res);

  if (availability === true) {
    next();
  } else {
    console.log(availability);

    res.status(200).json({
      status: availability,
    });
  }
};
