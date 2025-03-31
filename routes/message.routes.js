import express from "express";
import { auth } from "../authentication/auth.js"

import { sendMessage } from "../controllers/message.controllers.js";
import { getMessage } from "../controllers/message.controllers.js";

const router = express.Router();


router.post("/post-message-chat", auth, sendMessage);
router.get("/get-message-chat/:convId", auth, getMessage);


export default router;