const router = require("express").Router();

router.use("/", require("./indexRoutes"));
router.use("/api", require("./api/routes"));

module.exports = router;