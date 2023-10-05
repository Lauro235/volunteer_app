import { pool } from "db/db_connection/connect";

export const getUserDetailsByID = async (id: number) => {
  pool.query(`
  SELECT u.first_name, u.surname, u.email_address, r.role_name
  FROM users AS u
  INNER JOIN roles AS r ON r.id = u.role_id
  WHERE u.id = $1;
  `, [id])
}