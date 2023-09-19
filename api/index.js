const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./models/User.js");
const cookieParser = require("cookie-parser");
const cloudinary = require("cloudinary");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
const bcryptSalt = bcrypt.genSaltSync(10);
app.use(express.json());
app.use(cookieParser());
const jwtSecret = process.env.JWT_SECRET;

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.listen(process.env.PORT || 4000);
