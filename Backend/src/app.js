const express = require("express");
const cookieparser = require("cookie-parser");
const authroutes = require("../src/routes/auth.route");
require("dotenv").config();

const app = express();

app.use("api/auth", authroutes);

app.use(express.json());
app.use(cookieparser());

module.exports = app;
