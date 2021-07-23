const express = require("express");
const router = express.Router();
const { authentication } = require("../middlewares/auth");

// let home = require("./home.js");
// let user = require("./user.js");
let transactions = require("./transactions.js");
let target = require("./target.js");
let badge = require("./badge");
let achievement = require("./achievement");
let loginRouter = require("./loginRouter");
let registerRouter = require("./registerRouter");

// router.use("/", home); 
// router.use("/user", user); 
router.use("/login", loginRouter);
router.use("/register", registerRouter);
router.use("/transactions", transactions);
router.use("/target", target);
router.use("/badge", badge);
router.use("/achievement", achievement);

module.exports = router;
