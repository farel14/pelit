const { User } = require("../models");
const { passwordHash } = require("../helpers/passwordBcrypt");

class UserController {
  static getOneUser(req, res) {
    const id = req.params.userId;
    User.findByPk(id)
      .then((user) => {
        res.status(200).json({
          fullName: user.fullName,
          email: user.email,
          photoProfile: user.photoProfile,
          balance: user.balance,
          id: user.id,
        });
      })
      .catch((err) => {
        res.status(500).json({ message: "Internal Server Error" });
      });
  }

  static patchBalanceUser(req, res) {
    const { balance } = req.body;
    const id = req.params.userId;
    User.update({ balance: +balance }, { where: { id } })
      .then((user) => {
        res.status(200).json({
          message: "Balance has been updated successfully",
          balance: +balance,
        });
      })
      .catch((err) => {
        res.status(500).json({ message: "Internal Server Error" });
      });
  }

  static patchPhotoProfileUser(req, res) {
    const { photoProfile } = req.body;
    const id = req.params.userId;
    User.update({ photoProfile }, { where: { id } })
      .then((user) => {
        res.status(200).json({
          message: "Photo profile has been updated successfully",
          photoProfile,
        });
      })
      .catch((err) => {
        res.status(500).json({ message: "Internal Server Error" });
      });
  }

  static patchEmailUser(req, res) {
    const { email } = req.body;
    const id = req.params.userId;
    User.update({ email }, { where: { id } })
      .then((user) => {
        res.status(200).json({
          message: "Email has been updated successfully",
          email,
        });
      })
      .catch((err) => {
        res.status(500).json({ message: "Internal Server Error" });
      });
  }

  static patchPasswordUser(req, res) {
    const { password } = req.body;
    const id = req.params.userId;
    User.update({ password: passwordHash(password) }, { where: { id } })
      .then((user) => {
        res.status(200).json({
          message: "Password has been updated successfully",
        });
      })
      .catch((err) => {
        res.status(500).json({ message: "Internal Server Error" });
      });
  }
}

module.exports = UserController;
