import express from "express";
import dotenv from "dotenv";
import cors from "cors"

import { volunteerRouter } from "./routers/volunteers";
import { managerRouter } from "./routers/managers";
import { sessionsRouter } from "./routers/sessions";

dotenv.config();

export const app = express();
app.use(express.json());
app.use(cors())

const port = process.env.PORT || 8001;

app.get("/", (req, res) => {
  res.send("Express + TypeScript Server")
})

app.use("/volunteers", volunteerRouter, (req, res, next) => {
  next();
})

app.use("/managers", managerRouter, (req, res, next) => {
  next();
})

app.use("/sessions", sessionsRouter, (req, res) => {
  res.sendStatus(401)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);  
})