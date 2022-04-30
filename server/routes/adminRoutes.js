const { Router } = require("express");
const {
  delete_doctor,
  delete_patient,
} = require("../controllers/deleteControllers");
const {
  view_patientlist,
  view_doctorlist,
} = require("../controllers/fetchlistControllers");

const router = Router();

router.delete("/deletedoctor/:id", delete_doctor);
router.delete("/deletepatient/:healthID", delete_patient);

router.get("/doctorlist", view_doctorlist);
router.get("/patientlist", view_patientlist);

module.exports = router;
