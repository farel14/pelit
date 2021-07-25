const { User } = require("../models");
const { validateJWT } = require("../helpers/jsonWebToken");

function authentication(req, res, next) {
  const access_token = req.headers.access_token;
  if (access_token && access_token !== "undefined") {
    try {
      const payload = validateJWT(access_token);
      User.findByPk(payload.id)
        .then((user) => {
          if (user) {
            req.loggedUser = {
              id: user.id,
              email: user.email,
              photoPofile: user.photoProfile,
              balance: user.balance,
              fullName: user.fullName,
            };
            next();
          } else {
            res.status(401).json({ message: "authentication failed" });
          }
        })
        .catch((err) => {
          res.status(500).json({ message: "Internal server error" });
        });
    } catch (err) {
      res.status(401).json({ message: "authentication failed" });
    }
  } else {
    res.status(401).json({ message: "you must login first" });
  }
}

module.exports = {
  authentication,
};
