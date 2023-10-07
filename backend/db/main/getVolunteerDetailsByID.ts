import * as pool from "../db_connection/connect";

/*
  SELECT u.id, u.first_name, u.surname, u.email_address, r.role_name
  FROM users AS u
  INNER JOIN roles AS r
    ON r.id = u.role_id
  WHERE r.role_name = 'volunteer'
  ORDER BY u.surname ASC;
*/

export const getVolunteerDetailsByID = async (id: number) => {
  const res = await pool.query(`
  SELECT u.first_name, u.surname, u.email_address, r.role_name
  FROM users AS u
  INNER JOIN roles AS r
    ON r.id = u.role_id
  WHERE r.role_name = 'volunteer';
  AND u.id = $1
  `, [id])
  return res.rows;
}