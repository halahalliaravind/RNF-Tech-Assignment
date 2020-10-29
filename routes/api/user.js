const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const validateSignUpInput = require("../../validation/signup");
const validateLoginInput = require("../../validation/signin");

const User = require("../../models/user");

router.post("/signup", (req, res) => {
  const { errors, isValid } = validateSignUpInput(req.body);
  const { first_name, last_name, bio, email, password } = req.body;
  console.log(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ $or: [{ email }, { first_name }] }).then((user) => {
    if (user) {
      if (user.email === email) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        return res.status(400).json({ first_name: "firstname already exists" });
      }
    } else {
      const newUser = new User({
        first_name,
        last_name,
        bio,
        email,
        password,
      });
      //hashing password
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) =>
              console.log({ error: "Error while creating new user" })
            );
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const { email, password } = req.body;
  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(404).json({ email: "Email not found" });
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user.id,
          first_name: user.first_name,
        };
        jwt.sign(payload, JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
          if (err) {
            console.log(err);
          }
          return res.json({
            success: true,
            token: "Bearer " + token,
          });
        });
      } else {
        return res.status(400).json({ password: "Password Incorrect" });
      }
    });
  });
});

router.get("/fetch", (req, res) => {
  User.find({ })
    .then((users) => res.status(200).json(users))
    .catch((err) =>
      res.status(400).json({ user: "Error fetching posts of logged in user" })
    );
});

module.exports = router;
