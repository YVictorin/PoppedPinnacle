import bcrypt from "bcrypt";
import User from "../models/User.js";
import { generateToken } from "../middleware/authMiddleware.js";


// Register a user
export const registerUser = async (req, res, next) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);

        // Add user to the database with hashed password
        await User.addUser(firstName, lastName, hashedPassword, email);

        res.status(201).json({ message: "User registered successfully." });
    } catch (error) {
        console.error(error);
        next(error);  // pass to the simple error-handling middleware in server.js
    }
};


// Login a user
export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required." });
        }

        const user = await User.find(email);
        if (!user) return res.status(400).json({ message: "Invalid email or password." });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: "Invalid email or password." });

        // when user logs in generate a jwt lasting for one hour
        const token = generateToken(user);
    
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "development", // Secure in production in the future
            sameSite: "strict", // Prevent CSRF
            maxAge: 60 * 60 * 1000, // 1 hour

        }) 
        .status(200)
        .json({ message: "Login successful." });

    } catch (error) {
        console.error(error);
        next(error);
    }
};

