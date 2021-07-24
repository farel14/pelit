const { User } = require("../models");

class RegisterController {
  static registerPost(req, res, next) {
    const { email, password, fullName } = req.body;
    User.create({
      email,
      password,
      fullName,
      balance: 0,
      photoProfile:
        "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
    })
      .then((user) => {
        res.status(201).json({
          data: {
            id: user.id,
            email: user.email,
            fullName: user.fullName,
          },
          message: "Registered Successfully",
        });
      })
      .catch((err) => {
        let errors = [];
        if (
          err.name === "SequelizeUniqueConstraintError" ||
          err.name === "SequelizeValidationError"
        ) {
          errors = err.errors.map((e) => e.message);
          res.status(400).json({ message: errors });
        } else {
          res.status(500).json({ message: "Internal Server Error" });
        }
      });
  }
}

module.exports = RegisterController;
