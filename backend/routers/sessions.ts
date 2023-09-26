import express, {Router} from "express"

export const sessionsRouter: Router = express.Router()

sessionsRouter.get("/", (req, res) => {
  res.send("Hello volunteer!")
})