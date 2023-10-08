import * as pool  from "../db_connection/connect"

/**
 * @description As a volunteer I want to see the availability of all sessions. I should not be able to see the details of other volunteers.
 * @param id - number represents the volunteer id.
 * @returns All sessions and status. Either 'booked', 'cancelled', 'available' or 'unavailable'.
 * @summary ✅
 */

export const getSessionAvailability = async (id: number) => {
  const res = await pool.query(`
  SELECT s.id, s.date, s.slot, s.user_id
  CASE
      WHEN s.user_id IS NULL THEN 'available'
      WHEN s.user_id = $1 THEN 'booked' 
      WHEN (s.user_id IS NOT NULL AND s.user_id != $1) THEN 'unavailable'
  END AS status
  FROM sessions AS s
    INNER JOIN attendance_types AS a
      ON s.attendance_id = a.id
      INNER JOIN time_keeping_types AS t
      ON s.time_keeping_id = t.id;
  `, [id])
  return res.rows;
} 