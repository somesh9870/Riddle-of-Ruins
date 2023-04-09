const express = require("express");
const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const userRouter = express.Router();

// to register the user
userRouter.post("/register", async (req, res) => {
  const { email, password, username, score, level } = req.body;
  try {
    const emailExisted = await UserModel.find({ email: email });
    if (emailExisted.length > 0) {
      return res.status(400).send({ message: "Email already exists" });
    }

    bcrypt.hash(password, 4, async (err, hash) => {
      const payload = {
        email,
        password: hash,
        username,
        score: 0,
        level: 0,
      };
      const user = new UserModel(payload);
      await user.save();
      res.status(200).send({ message: "Registration successful" });
    });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// to log in the user
userRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserModel.find({ username: username });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, async (err, result) => {
        if (result) {
          res.status(200).send({
            message: "Login successful",
            userID: user[0]._id,
            // Generating the jwt token
            token: jwt.sign({ userID: user[0]._id }, process.env.secretKey),
          });
        } else {
          res.status(400).send({ message: "Invalid password" });
        }
      });
    } else {
      res
        .status(400)
        .send({ message: "User not found! Please creat an account" });
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

userRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  try {
    let user = await UserModel.findByIdAndUpdate({ _id: id }, payload);
    res.status(200).send({ message: "User successfully updated." });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

userRouter.get("/leaderboard", async (req, res) => {
  try {
    let user = await UserModel.find({});
    res.status(200).send({ message: user });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

module.exports = userRouter;
