const Patient = require("../models/patient");

module.exports.add_prescription = async (req, res) => {
  const healthID = req.params.healthID;
  const {
    doctor,
    hospital,
    chiefComplaint,
    clinicalFindings,
    medicines,
    investigations,
    advices,
  } = req.body;
  try {
    const patient = await Patient.findOneAndUpdate(
      { healthID },
      {
        $push: {
          prescriptions: {
            doctor,
            hospital,
            chiefComplaint,
            clinicalFindings,
            medicines,
            investigations,
            advices,
          },
        },
      }
    );
    res.status(200).json({ patient });
  } catch (err) {
    res.status(404).json({ msg: "Something Went Wrong!" });
  }
};

module.exports.view_prescription = async (req, res) => {
  const healthID = req.params.healthID;
  const id = req.params.id;
  try {
    const patient = await Patient.findOne({ healthID });
    const prescription = patient.prescriptions.filter((pres) => pres._id == id);
    res.status(200).json({ prescription });
  } catch (err) {
    res.status(404).json({ msg: "Something Went Wrong" });
  }
};
