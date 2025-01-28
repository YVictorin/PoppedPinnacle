import express from "express"
import SupportBotController from "../controllers/supportBotController.js";

const router = express.Router();

router.post("/", SupportBotController.getAIResponse);

export default router