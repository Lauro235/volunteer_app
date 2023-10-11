import * as pool  from "../../db_connection/connect"
import { Request, Response } from "express";

const checkSessionExists = async (req: Request, res: Response) => {
  const { date, slot } = req.body;
  const { rows } = await pool.query(`
    SELECT
    (CASE
      WHEN EXISTS (
        SELECT id FROM sessions WHERE sessions.date = $1 AND sessions.slot = $2
      ) THEN true
      ELSE false END) as boolean;
  `, [date, slot])
  return rows[0].boolean; 
}

export default checkSessionExists;