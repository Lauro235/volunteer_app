import express, { Router } from "express";

export const volunteerRouter: Router = express.Router();
import bookSession from "../db/main/book_session/bookSession";
import { getAvailabilityOfAllSessions } from "../db/main/getAvailabilityOfAllSessions";

volunteerRouter.get("/", (req, res) => {
  res.send("Hello volunteer!")
})

volunteerRouter.get("/sessions/:volunteerID" , async (req, res) => {
  const { volunteerID } = req.params;
  const data = await getAvailabilityOfAllSessions(volunteerID);
  res.status(200).json(data);
})

// book session

volunteerRouter.post("/sessions/:volunteerID", async (req, res) => {
  try {
    const value = await bookSession(req, res)
    // const
    res.status(200).json(value);

  }
  catch(err) {
    console.log(err)
  }
})