import { Router } from "express";
import Users from "../Models/Users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const authRoute = Router();

authRoute.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 12);
  try {
    const userExist = await Users.findOne({ email });

    if (userExist) {
      res.status(403).json("email already registered");
    }

    const newUSer = new Users({
      username: username,
      email: email,
      password: hashedPassword,
      profilePic: req.body.profilePic,
      isAdmin: req.body.isAdmin,
    });
    console.log(newUSer);

    const user = await newUSer.save();
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
});

authRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ email });
    if (!user) {
      res.status(401).json({ Error: "Email not registered" });
    }
    const checkPass = await bcrypt.compare(password, user.password);
    if (!checkPass) {
      res.status(401).json("Incorrect email or password");
    }

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "2d" }
    );

    const { password: userPassword, ...userInfo } = user._doc; // if i just write password then password in .compare will create confilict so now i use alias and user._doc password is stored in userPassword either do this or in.compare user req.body.password and don't destructure

    res.status(200).json({ ...userInfo, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

export default authRoute;
