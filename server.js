// Requiring necessary npm packages
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const env = require('dotenv').load();
const mysql2 = require("mysql2");
var sequelize = require('sequelize');
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

// Requiring our routes
// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

//Models
const models = require("./config/database/models/db");

//Sync Database
models.sequelize.sync().then(function() {

    console.log('Nice! Database looks fine')

}).catch(function(err) {

    console.log(err, "Something went wrong with the Database Update!")

});

app.listen(PORT, function() {
    console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
    );
});