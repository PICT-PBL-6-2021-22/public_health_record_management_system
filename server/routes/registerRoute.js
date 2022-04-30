// register and login routes for the patient

const { Router } = require("express");
const {
  patient_register,
  patient_login,
} = require("../controllers/registerControllers");

const router = Router();

router.post("/register/patient", patient_register);
router.post("/login/patient", patient_login);

module.exports = router;
