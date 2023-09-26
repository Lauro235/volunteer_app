import express, { Router } from "express"

export const managerRouter: Router = express.Router();

managerRouter.get("/", (req, res) => {
  res.send("Hello volunteer!")
})