import * as pool from "../db_connection/connect";

/**
 * 
 * @description As a manager I want to be able to see information on all my volunteers.
 * @returns The DB query containing information on all volunteers.
 * @summary ✅
 */

export const getAllVolunteers = async () => {
  const res = await pool.query(`
  SELECT u.id, u.first_name, u.surname, u.email_address, r.role_name
  FROM users AS u
  INNER JOIN roles AS r
    ON r.id = u.role_id
  WHERE r.role_name = 'volunteer'
  ORDER BY u.surname ASC;
  `)
  return res.rows;
}