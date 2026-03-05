const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require("../src/routes/auth.route");
require("dotenv").config();

const app = express();

// Middleware pehle
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);

module.exports = app;
