import express from "express";
import { getMessages, submitMessage } from "../controllers/message.controller";

const router = express.Router();

router.post("/message", submitMessage);
router.get("/message", getMessages);

export default router;
