import * as pool  from "../db_connection/connect"

/**
 * @description As a manager I want to see the availability of all sessions.
 * @param id - number represents the volunteer id.
 * @returns All sessions and status. Either 'booked', 'cancelled', 'available' or 'unavailable'.
 * @summary ✅
 */

export const getAllSessions = async () => {
  const res = await pool.query(`
  SELECT s.id, s.date, s.slot, s.user_id, a.type AS attendance, t.type AS time_keeping,
  CASE
      WHEN s.user_id IS NULL THEN 'available'
      WHEN s.user_id IS NOT NULL THEN 'unavailable'
  END AS status
  FROM sessions AS s
    INNER JOIN attendance_types AS a
      ON s.attendance_id = a.id
      INNER JOIN time_keeping_types AS t
      ON s.time_keeping_id = t.id;
  `)
  return res.rows;
} 