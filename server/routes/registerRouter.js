const Controller = require("../controllers/registerControlller");
const router = require("express").Router();

router.post("/", Controller.registerPost);

module.exports = router;
