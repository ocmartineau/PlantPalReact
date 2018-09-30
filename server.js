// Requiring necessary npm packages
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const env = require('dotenv').load();
const mysql2 = require("mysql2");
const db = require('./config/database/db');
// Requiring passport as we've configured it
const passport = require("passport");
// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
app.use(
    session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, function() {
    console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
    );
});