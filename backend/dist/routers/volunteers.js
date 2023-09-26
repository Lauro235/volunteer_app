"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.volunteerRouter = void 0;
const express_1 = __importDefault(require("express"));
const connect_1 = require("../db/db_connection/connect");
const isBookedBoolean_1 = require("../controllers/sessions/isBookedBoolean");
const userSessionInformation_1 = require("../controllers/sessions/userSessionInformation");
const bookSession_1 = require("../controllers/sessions/bookSession");
const showSessionAndVolunteer_1 = require("../controllers/sessions/showSessionAndVolunteer");
exports.volunteerRouter = express_1.default.Router();
exports.volunteerRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const volunteers = yield connect_1.pool
        .query(`SELECT * FROM volunteers;`)
        .then((data) => data.rows)
        .catch((error) => {
        console.log(error);
    });
    res.status(200).send(volunteers);
}));
exports.volunteerRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const volunteerID = req.params.id;
    const volunteer = yield connect_1.pool
        .query(`
  SELECT * FROM volunteers
    WHERE id = $1;`, [volunteerID])
        .then((data) => data.rows);
    console.log(volunteer);
    res.status(200).send(volunteer);
}));
exports.volunteerRouter.put("/book/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const volunteerID = Number(req.params.id);
    const { body: { date, slot }, } = req;
    const poolSession = connect_1.pool;
    const isBooked = (0, isBookedBoolean_1.isBookedBoolean)(volunteerID, date, slot, poolSession);
    // sessionAvailability will be number if session doesn't have an id associated with it
    // or sessions volunteer id is the same as the volunteer id
    // If the cases above aren't met then sessionAvailability is null or undefined
    const sessionAvailability = yield (0, userSessionInformation_1.userSessionInformation)(isBooked, volunteerID);
    let response;
    if (sessionAvailability === "open") {
        yield (0, bookSession_1.bookSession)(volunteerID, date, slot, res, poolSession);
    }
    if (sessionAvailability === "open" || sessionAvailability === "booked") {
        response = yield (0, showSessionAndVolunteer_1.showSessionAndVolunteer)(poolSession, date, slot);
    }
    else if (sessionAvailability === "closed") {
        response = { "message": "This slot has been taken by another volunteer." };
    }
    else {
        response = "Unable to accept this request.";
        res.status(404).send(response);
    }
    res.status(200).json(response);
}));
