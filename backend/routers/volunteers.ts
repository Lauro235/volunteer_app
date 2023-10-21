import express, { Router } from "express";

export const volunteerRouter: Router = express.Router();
import { getAvailabilityOfAllSessions } from "../db/main/getAvailabilityOfAllSessions";

import checkSessionExists from "../db/main/book_session/1-checkSessionExists";
import { getSessionAvailability } from "../db/main/book_session/2-getSessionAvailability";
import bookSession from "../db/main/book_session/3-bookSession";

volunteerRouter.get("/", (req, res) => {
  res.send("Hello volunteer!");
});

volunteerRouter.get("/sessions/:volunteerID", async (req, res) => {
  const { volunteerID } = req.params;
  const data = await getAvailabilityOfAllSessions(volunteerID);
  res.status(200).json(data);
});

// book session

volunteerRouter.post(
  "/sessions/:volunteerID",
  checkSessionExists,
  getSessionAvailability,
  bookSession
);
