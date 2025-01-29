import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

//use cookies on the backend to store jwt across /login and /account routes
router.get('/', verifyToken, (req, res) => {
        if(!req.user) {
            return res.status(500).json({ message: "You have not provided a user account" })
        }
        res.status(200).json({ message: "Profile data", user: req.user })
    })

export default router;