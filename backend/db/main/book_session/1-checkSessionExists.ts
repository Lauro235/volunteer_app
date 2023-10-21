import * as pool  from "../../db_connection/connect"
import { Request, Response, NextFunction } from "express";

const query = async (req: Request, res: Response) => {
  const { date, slot } = req.body;
  const { rows } = await pool.query(`
    SELECT
    (CASE
      WHEN EXISTS (
        SELECT id FROM sessions WHERE sessions.date = $1 AND sessions.slot = $2
      ) THEN true
      ELSE false END) as boolean;
  `, [date, slot])
  if (rows[0].boolean === true) {
      return true
    }
}

/**
 * @param req 
 * @param res 
 * @param next 
 * @description This function will check if a session of the type morning or evening exists on the given date.
 */

const checkSessionExists = async (req: Request, res: Response, next: NextFunction) => {
  // checkSessionExists returns true or false. If true call next function
  const sessionExists = await query(req, res);

  if (sessionExists) {
    next();
  } else {
    res.status(200).send("Session does not exist");
  }
};

export default checkSessionExists;