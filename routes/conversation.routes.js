import express from "express";
import { auth } from "../authentication/auth.js";

import { addConversation } from "../controllers/conversation.controllers.js";
import { getConversation } from "../controllers/conversation.controllers.js";

const router = express.Router();



router.post("/add-conversation", auth, addConversation);
router.get("/get-conversation", auth, getConversation);

export default router;