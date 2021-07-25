const UserController = require("../controllers/userController");
const router = require("express").Router();

router.get("/:userId", UserController.getOneUser);
router.patch("/balance/:userId", UserController.patchBalanceUser);
router.patch("/photo-profile/:userId", UserController.patchPhotoProfileUser);
router.patch("/email/:userId", UserController.patchEmailUser);
router.patch("/password/:userId", UserController.patchPasswordUser);

module.exports = router;
