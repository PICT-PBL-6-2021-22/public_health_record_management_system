const jwt = require("jsonwebtoken");
const Patient = require("../models/patient");

const requirePatientAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
      if (err) {
        let errors = { error: "Patient is not authenticated!" };
        res.status(401).send({ errors });
      } else {
        const patient = await Patient.findById(decodedToken.id);
        req.patient = patient;
        next();
      }
    });
  } else {
    let errors = { error: "Patient is not authenticated!" };
    res.status(401).send({ errors });
  }
};

module.exports = { requirePatientAuth };
