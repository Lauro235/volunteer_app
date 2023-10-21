import express, { Router } from "express"
import { getAllUsers } from "../db/main/getAllUsers";
import { getAllVolunteers } from "../db/main/getAllVolunteers";
import { getSessionsByVolunteerID } from "../db/main/getSessionsByVolunteerID";
import { getUserDetailsByID } from "../db/main/getUserDetailsById";

export const managerRouter: Router = express.Router();

managerRouter.get("/", (req, res) => {
  res.send("Hello manager!")
})

managerRouter.get("/users", async (req, res) => {
  const data = await getAllUsers();
  res.status(200).json(data);
});

managerRouter.get("/volunteers", async (req, res) => {
  const data = await getAllVolunteers();
  res.status(200).json(data);
});

managerRouter.get("/users/:userID", async (req, res) => {
  const { userID } = req.params
  const data = await getUserDetailsByID(Number(userID))
  res.status(200).json(data)
  
})

managerRouter.get("/sessions/:volunteerID", async (req, res) => {
  const { volunteerID } = req.params
  const data = await getSessionsByVolunteerID(Number(volunteerID))
  res.status(200).json(data)
})

managerRouter.post("/sessions/create", async (req, res) => {
  
})

