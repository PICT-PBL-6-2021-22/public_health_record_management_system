const Admin = require("../models/admin");
const Doctor = require("../models/doctor");
const Patient = require("../models/patient");
const jwt = require("jsonwebtoken");
const maxAge = 3 * 24 * 60 * 60;
const { createToken } = require("../utils/createToken");
const handleError = (err) => {
  let errors = { email: "", password: "" };
  if (err.message.includes("Invalid Email.")) {
    errors.email = "Please enter a valid Email.";
  }
  if (err.message.includes("Incorrect Password")) {
    errors.password = "Incorrect password";
  }
  if (err.message.includes("Please enter email")) {
    errors.email = "Please enter email";
  }
  if (err.message.includes("Please enter a valid email")) {
    errors.email = "Please enter a valid email";
  }
  if (err.message.includes("Please enter password")) {
    errors.password = "Please enter password";
  }
  return errors;
};

module.exports.admin_login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.login(email, password);
    const token = createToken(admin._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ admin });
  } catch (err) {
    const errors = handleError(err);
    res.status(400).json({ errors });
  }
};

module.exports.auth = async (req, res) => {
  if (req.cookies.jwt) {
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
        if (err) {
          res.status(100).json({ msg: "Proceed to login" });
        } else {
          const admin = await Admin.findById(decodedToken.id);
          const patient = await Patient.findById(decodedToken.id);
          const doctor = await Doctor.findById(decodedToken.id);
          if (admin) {
            res.status(200).json({ msg: "Admin Login Found" });
          }
          if (patient) {
            res.status(200).json({ msg: "Patient Login Found" });
          }
          if (doctor) {
            res.status(200).json({ msg: "Doctor Login Found" });
          }
        }
      });
    } else {
      res.status(100).json({ msg: "Proceed to login" });
    }
  } else {
    res.status(100).json({ msg: "Proceed to login" });
  }
};

module.exports.get_admin = async (req, res) => {
  let admin = req.Admin;
  res.status(200).json({ admin });
};
