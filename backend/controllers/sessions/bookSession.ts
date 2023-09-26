import { Response } from "express";
import { Pool } from "pg";

export  const bookSession = async (volunteerID: number, date: string, slot: string, res: Response, pool: Pool) => {
  return await pool
  .query(
    `
UPDATE sessions AS s
  SET volunteer_id = $1
WHERE session_date = $2
AND session_slot = $3; 
`,
    [volunteerID, date, slot]
  )
  .catch((error) => {
    console.log(error);
  });
}