import express from "express";
import { registerUser } from "../controllers/userControllers.js";

const router = express.Router();

// POST route to register a user
router.post('/', registerUser); 

export default router;
