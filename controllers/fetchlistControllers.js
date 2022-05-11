const Doctor = require("../models/doctor");
const Patient = require("../models/patient");

module.exports.view_doctorlist = async (req, res) => {
  try {
    const doctorlist = await Doctor.find();
    res.status(200).json({ doctorlist });
  } catch (err) {
    console.log(err);
  }
};

module.exports.view_patientlist = async (req, res) => {
  try {
    const patientlist = await Patient.find();
    res.status(200).json({ patientlist });
  } catch (err) {
    console.log(err);
  }
};
