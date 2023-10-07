import * as pool  from "../db_connection/connect"

/**
 * @description As a manager I want to see the availability of all sessions.
 * @param id - number represents the volunteer id.
 * @returns All sessions and status. Either 'booked', 'cancelled', 'available' or 'unavailable'.
 * @summary ✅
 */

export const getAllSessions = async (id: number) => {
  const res = await pool.query(`
  SELECT b.id, s.slot, s.date,
  CASE
	WHEN b.user_id IS NULL THEN 'available'
    WHEN b.user_id = $1 THEN 'booked' 
    WHEN (b.user_id IS NOT NULL AND b.user_id != $1) THEN 'unavailable' END AS status
  FROM bookings AS b
  INNER JOIN sessions AS s ON s.id = b.session_id;
  `, [id])
  return res.rows;
} 