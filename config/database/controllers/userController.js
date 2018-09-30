const router = require("express").Router();
const User = require("../db").User;



//API USER ROUTES
router.post("/API/users", function(req, res) {
    if (req.body.username == null || req.body.password == null || req.body.email == null) {
        return (res.status(400).end())
    } else {
        User.create({
            "username": req.body.username,
            "password": req.body.password,
            "email": req.body.email
        }).then(
            function (result) {
                res.json({result});
            }
        );
    }
});