import express from "express";
import User from "../models/user.mjs";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/register",async (req,res)=>{
  const { name,city,email,password } = req.body;
  
  try{
    const existingUser = await User.findOne({ email });

    if(existingUser){
      res.status(400).json({ message: "User already exists"});
      return;
    }
    else{
      const hashedPassword = await bcrypt.hash(password,10);

      await User.create({
        name: name,
        city: city,
        email: email,
        password: hashedPassword
      });

      res.status(201).json({ message: "User registered successfully"});
    }
  }
  catch(err){
    console.error(err.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/login",async (req,res)=>{
  const { email,password } = req.body;

  try{
    const user = await User.findOne({ email});
    if(!user){
      res.status(400).json({ message: "Invalid credentials"});
      return;
    }

    const matchUser = await bcrypt.compare(password,user.password);
    
    if(!matchUser){
      res.status(400).json({ message: "Invalid password"});
      return;
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({ token });
  }
  catch(err){
    console.error(err.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;