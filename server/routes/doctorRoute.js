const { Router } = require("express");
const { requireDoctorAuth } = require("../middlewares/doctorAuthMiddleware");
const {
  doctor_login,
  doctor_register,
} = require("../controllers/doctorAuthControllers");
const {
  add_prescription,
  view_prescription,
} = require("../controllers/prescriptionControllers");
const { requireAdminAuth } = require("../middlewares/adminAuthMiddleware");

// const {

// }

const router = Router();

router.post("/register/doctor", doctor_register, requireAdminAuth);
router.post("/login/doctor", doctor_login);
router.post("/prescription/:healthID", add_prescription, requireDoctorAuth);
router.get(
  "/viewprescription/:healthID/:id",
  view_prescription,
  requireDoctorAuth
);

module.exports = router;
