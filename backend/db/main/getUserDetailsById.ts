import * as pool from "../db_connection/connect";

/**
 * @description As a volunteer I want to see the information I have provided to the volunteer app.
 * @param id - number represents the volunteer id.
 * @returns first_name, surname, email_address and role.
 * @summary ✅
 */

export const getUserDetailsByID = async (id: number) => {
  const res = await pool.query(`
  SELECT u.first_name, u.surname, u.email_address, r.type AS role
  FROM users AS u
  INNER JOIN role_types AS r ON r.id = u.role_id
  WHERE u.id = $1;
  `, [id])
  return res.rows;
}