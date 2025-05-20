import express from "express";
import {
    coba,
    getMessages,
    submitMessage,
} from "../controllers/message.controller";

const router = express.Router();

router.post("/message", submitMessage);
router.get("/message", getMessages);
router.get("/coba", coba);

export default router;
