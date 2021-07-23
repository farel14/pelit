const express = require("express");
const router = express.Router();

// let home = require("./home.js");
// let user = require("./user.js");
let transactions = require("./transactions.js");
let target = require("./target.js");
// let badge = require("./badge");
// let achievement = require("./achievement");
let loginRouter = require("../routes/loginRouter");
// let registerRouter = require("../../../bin/registerRouter");

// router.use("/", home); // Login dan Register masuk ke route ini
router.use("/login", loginRouter);
// router.use("/register", registerRouter);
// router.use("/user", user); // Login dan Register masuk ke route ini
// router.use("/badge", badge);
// router.use("/achievement", achievement);
router.use('/transactions', transactions);
router.use('/target', target);

module.exports = router;
