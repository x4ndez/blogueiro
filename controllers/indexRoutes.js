const router = require("express").Router();

// PATH: localhost/

router.get("/*", (req, res) => {

    res.render("index");

});

module.exports = router;