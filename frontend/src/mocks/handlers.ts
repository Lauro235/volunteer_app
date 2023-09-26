import { rest } from "msw";
import { sessionData } from "../data/sessionData";

export const handlers = [
  rest.get("/sessions", (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.body(JSON.stringify(sessionData))
    )
  })
]; 