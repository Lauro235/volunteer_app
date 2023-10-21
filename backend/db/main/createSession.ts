import * as pool from "../db_connection/connect";
import { Request, Response } from "express";

/**
 * 
 * @description Adds a single session into the sessions table.
 * @param req Request object which contains date and slot preference.
 * @param res 
 */

const createSession = async (req: Request, res: Response) => {
  const { date, slot } = req.body;
  await pool.query(`
    INSERT INTO sessions (date, slot, user_id, attendance_id, time_keeping_id)
    VALUES
      ($1, $2, NULL, 1, 1);
  `, [date, slot]);
}