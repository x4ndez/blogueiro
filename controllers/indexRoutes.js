const router = require("express").Router();
const Users = require("../models/Users");
const BlogPosts = require("../models/BlogPosts");

// PATH: localhost/

router.get("/", async (req, res) => {

    const loginData = {

        loggedIn: req.session.loggedIn,
        username: req.session.username,

    }

    const blogPosts = await BlogPosts.findAll({
        raw: true,
    });

    res.render("index", { blogPosts, loginData });

});

router.get("/blogPost", async (req, res) => {



});

router.get("/dashboard", async (req, res) => {

    const loginData = {

        loggedIn: req.session.loggedIn,
        username: req.session.username,

    }

    if (req.session.loggedIn) {

        const user = await Users.findOne({
            where: {
                username: req.session.username,
            },
            raw: true,
        });

        const myBlogPosts = await BlogPosts.findAll({
            where: {
                userId: user.id,
            },
            raw: true,
        });

        res.render("dashboard", { myBlogPosts, loginData });

    } else {

        res.redirect("login");

    }

});

router.get("/dashboard/edit-blogpost/:id", async (req, res) => {

    const loginData = {

        loggedIn: req.session.loggedIn,
        username: req.session.username,

    }

    const postId = req.params.id;

    const blogPost = await BlogPosts.findByPk(postId, {
        raw: true,
    });

    res.render("blogpost-edit", { blogPost, loginData });

});

router.put("/dashboard/edit-blogpost/", async (req, res) => {

    const postId = req.body.id;

    const userData = {

        title: req.body.title,
        content: req.body.content,

    }

    await BlogPosts.update(userData, {
        where: {
            id: postId,
        }
    });

    res.status(200).json();

});

router.delete("/dashboard/edit-blogpost/", async (req, res) => {

    const postId = req.body.id;

    await BlogPosts.destroy({
        where: {
            id: postId,
        }
    });

    res.status(200).json();

});

router.post("/dashboard", async (req, res) => {

    const user = await Users.findOne({
        where: {
            username: req.session.username,
        },
        raw: true,
    });

    const newBlogPost = {

        title: req.body.title,
        content: req.body.content,
        userId: user.id,

    }

    await BlogPosts.create(newBlogPost);

    res.redirect("dashboard");

});

router.get("/login", (req, res) => {

    const loginData = {

        loggedIn: req.session.loggedIn,
        username: req.session.username,

    }

    res.render("login", { loginData });

});

router.post("/login", async (req, res) => {

    // Check if valid
    const user = await Users.findOne({
        where: {
            username: req.body.username,
        },
        raw: true,
    });

    if (user === null) {
        res.render("pnf");
    } else {

        if (req.body.password === user.password) {

            console.log("Logged in successfully");
            req.session.loggedIn = true;
            req.session.username = user.username;
            res.redirect("dashboard");

        } else {

            console.log("Unsuccessful login attempt!");
            res.redirect("login");

        }

    }

});

router.get("/logout", (req, res) => {

    req.session.destroy();

    res.redirect("/");

});

router.get("/login/new-account", (req, res) => {

    const loginData = {

        loggedIn: req.session.loggedIn,
        username: req.session.username,

    }

    res.render("new-account", { loginData });

});

async function validateUsername(username) {

    const validation = await Users.findOne({
        where: {
            username: username,
        },
        raw: true,
    });

    if (validation === null) return 1;
    else return 0;

}

async function validateEmail(email) {

    const validation = await Users.findOne({
        where: {
            email: email,
        },
        raw: true,
    });

    if (validation === null) return 1;
    else return 0;

}

async function validatePassword(password) {

    if (password.length < 8) {

        return 0;

    } else return 1;

}

router.post("/login/new-account", async (req, res) => {

    // TODO: encrypt pw

    const newAccountInput = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
    }

    const isValidEmail = await validateEmail(newAccountInput.email);
    const isValidUsername = await validateUsername(newAccountInput.username);
    const isValidPassword = await validatePassword(newAccountInput.password);

    if (isValidEmail === 0) {

        console.log("Email already in use.");

    }

    if (isValidUsername === 0) {

        console.log("Username already taken.");

    }

    if (isValidPassword === 0) {

        console.log("Please make a password that meets the password requirements.");

    }

    if (isValidEmail === 1 &&
        isValidUsername === 1 &&
        isValidPassword === 1
    ) {

        const newAccount = {

            email: req.body.email,
            username: req.body.username,
            password: req.body.password,

        }

        try {
            await Users.create(newAccount);
        } catch (err) {
            res.redirect("pnf");
        }

    }

    res.redirect("login");

});

router.get("*", (req, res) => {

    const loginData = {

        loggedIn: req.session.loggedIn,
        username: req.session.username,

    }

    res.render("pnf", loginData);

});

module.exports = router;