"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const volunteers_1 = require("./routers/volunteers");
const managers_1 = require("./routers/managers");
const sessions_1 = require("./routers/sessions");
dotenv_1.default.config();
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
const port = process.env.PORT || 8001;
exports.app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
exports.app.use("/volunteers", volunteers_1.volunteerRouter, (req, res, next) => {
    next();
});
exports.app.use("/managers", managers_1.managerRouter, (req, res, next) => {
    next();
});
exports.app.use("/sessions", sessions_1.sessionsRouter, (req, res) => {
    res.sendStatus(401);
});
exports.app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
