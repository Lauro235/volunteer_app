import express, { Router } from "express";

import { pool } from "../db/db_connection/connect";

import { isBookedBoolean } from "../controllers/sessions/isBookedBoolean";
import { userSessionInformation } from "../controllers/sessions/userSessionInformation";
import { bookSession } from "../controllers/sessions/bookSession";
import { showSessionAndVolunteer } from "../controllers/sessions/showSessionAndVolunteer";
import { QueryResult } from "pg";

export const volunteerRouter: Router = express.Router();
import { IResponse } from "../controllers/sessions/showSessionAndVolunteer";

volunteerRouter.get("/", async (req, res) => {
  const volunteers = await pool
    .query(`SELECT * FROM volunteers;`)
    .then((data) => data.rows)
    .catch((error) => {
      console.log(error);
    });

  res.status(200).send(volunteers);
});

volunteerRouter.get("/:id", async (req, res) => {
  const volunteerID = req.params.id;

  const volunteer = await pool
    .query(
      `
  SELECT * FROM volunteers
    WHERE id = $1;`,
      [volunteerID]
    )
    .then((data) => data.rows);
  console.log(volunteer);

  res.status(200).send(volunteer);
});

volunteerRouter.put("/book/:id", async (req, res) => {
  const volunteerID = Number(req.params.id);
  const {
    body: { date, slot },
  } = req;

  const poolSession = pool;

  const isBooked = isBookedBoolean(volunteerID, date, slot, poolSession);

  // sessionAvailability will be number if session doesn't have an id associated with it
  // or sessions volunteer id is the same as the volunteer id
  // If the cases above aren't met then sessionAvailability is null or undefined

  const sessionAvailability = await userSessionInformation(
    isBooked,
    volunteerID
  );

  /*
    Type issue Come back to this!
  */
 type TResponseType = Promise<QueryResult<IResponse>> | {[key: string]: any} | undefined | string
  
  let response: TResponseType

  if (sessionAvailability === "open") {
      await bookSession(volunteerID, date, slot, res, poolSession)
    }

  if (sessionAvailability === "open" || sessionAvailability === "booked") {
      response =  await showSessionAndVolunteer(poolSession, date, slot);
  }
  else if (sessionAvailability === "closed") {
      response = { "message": "This slot has been taken by another volunteer." };
    }
  else {
      response = "Unable to accept this request."
      res.status(404).send(response);
    }
    res.status(200).json(response)
});
