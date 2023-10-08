import * as pool from "../db_connection/connect";

/**
 * 
 * @description As a manager I would like to get information on all people within the organisation including managers.
 * @returns Information on all users in the database including managers.
 * @summary ✅
 */

export const getAllUsers = async () => {
  const res = await pool.query(`
  SELECT 
    u.first_name, u.surname, u.email_address, r.type AS role
  FROM users AS u
  INNER JOIN role_types AS r
    ON r.id = u.role_id;
  `)
  return res.rows;
}