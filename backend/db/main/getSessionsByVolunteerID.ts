import * as pool  from "../db_connection/connect"

/**
 * @description As a volunteer I want to see all the sessions that I have booked.
 * @param id - number represents the volunteer id.
 * @returns slot type like 'morning' or 'evening' and the date of the booking.
 * @summary ✅
 */

export const getSessionsByVolunteerID = async (id: number) => {
  const res = await pool.query(`
  SELECT u.id, s.slot, s.date 
  FROM sessions AS s
  INNER JOIN users AS u ON u.id = s.user_id
  WHERE s.user_id = $1;
  `, [id])
  return res.rows;
} 