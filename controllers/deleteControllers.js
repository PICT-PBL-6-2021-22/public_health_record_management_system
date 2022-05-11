const Doctor = require("../models/doctor");
const Patient = require("../models/patient");

module.exports.delete_doctor = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Doctor.findByIdAndDelete({ _id: id });
    res.status(200).json({ result });
  } catch (err) {
    console.log(err);
  }
};

module.exports.delete_patient = async (req, res) => {
  const healthID = req.params.healthID;
  try {
    const result = await Patient.findOneAndDelete({ healthID });
    res.status(200).json({ result });
  } catch (err) {
    console.log(err);
  }
};
