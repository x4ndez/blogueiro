const router = require("express").Router();

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

router.get("/login/new-account", (req, res) => {

    res.render("new-account");

});

router.get("*", (req, res) => {

    res.render("pnf");

});

module.exports = router;