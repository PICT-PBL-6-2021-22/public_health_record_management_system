const Doctor = require("../models/doctor");
const { createToken } = require("../utils/createToken");
const maxAge = 3 * 24 * 60 * 60;
module.exports.doctor_register = async (req, res) => {
  const {
    name,
    org,
    orgAddress,
    dob,
    mobile,
    email,
    adharCard,
    bloodGroup,
    education,
    address,
    password,
    specialization,
    emergencyno,
  } = req.body;
  try {
    const doctor = await Doctor.create({
      name,
      org,
      orgAddress,
      dob,
      mobile,
      email,
      adharCard,
      bloodGroup,
      education,
      address,
      password,
      specialization,
      emergencyno,
    });

    res.status(200).json({ doctor });
  } catch (err) {
    // let errors = handleError(err);
    // errors = err.errors;
    // errors = handleError(errors);
    // console.log(err);
    res.status(404).json({ err });
  }
};

module.exports.doctor_login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const doctor = await Doctor.login(email, password);
    const token = createToken(doctor._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ doctor });
  } catch (err) {
    console.log(err);
    // console.log(err.message);
    // const errors = handleError(err);
    // console.log(err.errors);
    res.status(404).json({ err });
  }
};
