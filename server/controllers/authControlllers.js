const Admin = require("../models/admin");

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
