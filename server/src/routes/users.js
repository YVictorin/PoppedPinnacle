import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js"

const router = express.Router();

router
  .route('/')
  .get(async (req, res) => {
    try {
        const users = await User.getAll();
        res.status(200).send(users);  
    } catch(e) {
        console.error(e);
        res.status(500).send("There was a server issue getting users.");
    }
  })
  .post(async (req, res) => {
    try {      
      const hashedPassword = await bcrypt.hash(req.body.password, 10); 
      await User.addUser(req.body.firstName, req.body.lastName, hashedPassword, req.body.email)  // add user with hashed password to database
      res.status(201).send("User created successfully.");
    } catch (e) {
      console.error(e);
      res.status(500).send("There was a server issue adding user. " + e);
    }
  });

// Route to handle user login
router.post('/login', async (req, res) => {

  // Find user by email
  const user = await User.find(req.body.email)

  if (!user) {
    return res.status(400).send("Cannot find user.");
  }

  try {
    // bcrypt.compare prevents timing attacks
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (isMatch) {
      res.send("Success.");  
    } else {
      res.status(401).send("Not allowed.");  
    }
  } catch (e) {
    console.error(e);
    res.status(500).send("There was a server issue comparing user. " + e);
  }
});

export default router;
