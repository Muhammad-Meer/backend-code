const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoutes = require("../src/routes/auth.route");
const foodrouter = require('./routes/food.routes')



const app = express();

// Middleware pehle
app.use(express.json());
app.use(cookieParser());



// Routes
app.use("/api/auth", authRoutes);
app.use('/api/food', foodrouter)



module.exports = app;
