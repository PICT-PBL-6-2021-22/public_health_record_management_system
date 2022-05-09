const jwt = require("jsonwebtoken");
const Doctor = require("../models/doctor");

const requireDoctorAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
      if (err) {
        let errors = { error: "Doctor is not authenticated!" };
        res.status(401).send({ errors });
      } else {
        const doctor = await Doctor.findById(decodedToken.id);
        req.doctor = doctor;
        next();
      }
    });
  } else {
    let errors = { error: "Doctor is not authenticated!" };
    res.status(401).send({ errors });
  }
};

module.exports = { requireDoctorAuth };
