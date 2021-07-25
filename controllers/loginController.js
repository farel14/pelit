const { User } = require("../models");
const { comparePassword } = require("../helpers/passwordBcrypt");
const { generateJWT } = require("../helpers/jsonWebToken");

class LoginController {
  static loginPost(req, res, next) {
    const { email, password } = req.body;
    User.findOne({
      where: {
        email,
      },
    })
      .then((user) => {
        if (user) {
          if (comparePassword(password, user.password)) {
            const access_token = generateJWT({
              id: user.id,
              email: user.id,
            });
            res.status(200).json({
              access_token,
              data: {
                fullName: user.fullName,
                email: user.email,
                photoProfile: user.photoProfile,
                balance: user.balance,
                id: user.id,
              },
            });
          } else {
            res.status(401).json({ message: "Wrong Email/Password" });
          }
        } else {
          res.status(401).json({ message: "Wrong Email/Password" });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
      });
  }
}

module.exports = LoginController;
