const Patient = require("../models/patient");

module.exports.add_prescription = async (req, res) => {
  const healthID = req.params.healthID;
  const chiefComplaints = Object.values(req.body.chiefComplaints);
  const medicines = Object.values(req.body.medicines);
  const investigations = Object.values(req.body.investigations);
  const advices = Object.values(req.body.advices);
  const notes = req.body.notes.note;
  const diagnosis = req.body.diagnosis.diagno;
  const procedureConducted = req.body.procedureConducted.procedure;
  const { doctor, doctormobile, hospital } = req.body;

  try {
    const patient = await Patient.findOneAndUpdate(
      { healthID },
      {
        $push: {
          prescriptions: {
            doctor,
            doctormobile,
            hospital,
            notes,
            diagnosis,
            procedureConducted,
            chiefComplaints,
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
    res.status(404).json({ error: "Something Went Wrong" });
  }
};
