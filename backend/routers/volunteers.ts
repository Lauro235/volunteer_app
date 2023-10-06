import express, { Router } from "express";

export const volunteerRouter: Router = express.Router();
import { getAllSessions } from "../db/main/getAllSessions";

volunteerRouter.get("/", (req, res) => {
  res.send("Hello volunteer!")
})

volunteerRouter.get("/sessions/:volunteerID" , async (req, res) => {
  const { volunteerID } = req.params;
  const data = await getAllSessions(Number(volunteerID));
  res.status(200).json(data);
})