const LoginController = require("../loginController");
const router = require("express").Router();

router.post("/", LoginController.loginPost);

module.exports = router;
