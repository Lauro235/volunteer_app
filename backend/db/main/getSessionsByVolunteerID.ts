import * as pool  from "../db_connection/connect"

export const getSessionsByVolunteerID = async (id: number) => {
  const res = await pool.query(`
    SELECT u.id, s.slot, s.date 
    FROM bookings AS b
    INNER JOIN users AS u ON u.id = b.user_id
    INNER JOIN sessions AS s ON s.id = b.session_id
    WHERE b.user_id = $1;
  `, [id])
  return res.rows;
} 