import { Request, Response } from "express";
import checkSessionExists from "./1-checkSessionExists";
import { getSessionAvailability } from "./2-getSessionAvailability";
import conditionalBooking from "./3-conditionalBooking";

const bookSession = async (req: Request, res: Response) => {
  const sessionExists = checkSessionExists(req, res);
  const availabilityRequest = await getSessionAvailability(req)
  const bookingResponse = conditionalBooking(availabilityRequest, req);
  // return res;
  
} 

export default bookSession;