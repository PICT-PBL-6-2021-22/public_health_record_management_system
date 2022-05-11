const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");

const requireAdminAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
      if (err) {
        let AuthError = { error: "Admin is not authenticated!" };
        res.status(401).send({ AuthError });
      } else {
        const admin = await Admin.findById(decodedToken.id);
        req.Admin = admin;
        next();
      }
    });
  } else {
    let AuthError = { error: "Admin is not authenticated!" };
    res.status(401).send({ AuthError });
  }
};

module.exports = { requireAdminAuth };
