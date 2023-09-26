"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionsRouter = void 0;
const express_1 = __importDefault(require("express"));
exports.sessionsRouter = express_1.default.Router();
exports.sessionsRouter.get("/", (req, res) => {
    res.send("Hello volunteer!");
});
