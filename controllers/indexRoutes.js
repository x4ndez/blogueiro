const router = require("express").Router();
const Users = require("../models/Users");
const BlogPosts = require("../models/BlogPosts");

// PATH: localhost/

router.get("/", (req, res) => {

    res.render("index");

});

router.get("/dashboard", (req, res) => {

    res.render("dashboard");

});

router.get("/login", (req, res) => {

    res.render("login");

});

router.post("/login", async (req, res) => {

    // Check if valid
    const user = await Users.findOne({
        where: {
            username: req.body.username,
        },
        raw: true,
    });

    if (req.body.password === user.password) {

        console.log("Logged in successfully");
        res.render("dashboard");

    } else {

        console.log("Unsuccessful login attempt!");
        res.render("login");

    }

});

router.get("/login/new-account", (req, res) => {

    res.render("new-account");

});

router.post("/login/new-account", async (req, res) => {

    const newAccount = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
    }

    await Users.create(newAccount);

    res.render("POST", { newAccount });

});

router.get("*", (req, res) => {

    res.render("pnf");

});

module.exports = router;