import * as pool  from "../db_connection/connect"

/**
 * @description As a volunteer I want to see the availability of all sessions. I should not be able to see the details of other volunteers.
 * @param id - number represents the volunteer id.
 * @returns All sessions and status. Either 'booked', 'cancelled', 'available' or 'unavailable'.
 */

export const getSessionAvailability = async (id: number) => {
  const res = await pool.query(`
  SELECT s.slot, s.date,
  CASE
    WHEN b.user_id = $1 THEN 'booked' 
    WHEN (b.user_id IS NOT NULL AND b.user_id != $1) THEN 'unavailable'
    ELSE 'available' END AS status
  FROM bookings AS b
  INNER JOIN users AS u ON u.id = b.user_id
  INNER JOIN sessions AS s ON s.id = b.session_id;
  `, [id])
  return res.rows;
} 